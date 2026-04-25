import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const router = useRouter();
  const autoSubmittedRef = useRef(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const searchEmail = typeof router.query?.email === "string"?router.query.email.trim().toLowerCase():"";

  async function loginWithEmail(value) {
    const response = await fetch("/api/session/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: value }),
    });

    if (response.ok) {
      return { ok: true };
    }

    if (response.status === 404) {
      return { ok: false, accountMissing: true };
    }

    return { ok: false, accountMissing: false };
  }

  async function signupWithEmail(value) {
    const response = await fetch("/api/session/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: value }),
    });

    return response.ok;
  }

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    let ignore = false;

    async function load() {
      try {
        const sessionResponse = await fetch("/api/session");
        const sessionData = await sessionResponse.json();

        if (ignore) {
          return;
        }

        if (sessionData.loggedIn && sessionData.email) {
          setEmail(sessionData.email);
        }

        if (searchEmail) {
          setEmail(searchEmail);

          if (!autoSubmittedRef.current) {
            autoSubmittedRef.current = true;
            const loginResult = await loginWithEmail(searchEmail);

            if (ignore) {
              return;
            }

            if (!loginResult.ok && loginResult.accountMissing) {
              await signupWithEmail(searchEmail);
            }
          }
        }
      } catch {
        if (!ignore) {
          setError("Something went wrong. Please try again.");
        }
      } finally {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    }

    load();

    return () => {
      ignore = true;
    };
  }, [router.isReady, searchEmail]);

  async function handleLoginSubmit(event) {
    event.preventDefault();

    const trimmedEmail = email.trim().toLowerCase();

    if (!trimmedEmail) {
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      const loginResult = await loginWithEmail(trimmedEmail);

      if (loginResult.ok) {
        return;
      }

      if (loginResult.accountMissing) {
        const created = await signupWithEmail(trimmedEmail);

        if (created) {
          return;
        }

        setError("Unable to create your account. Please try again.");
        return;
      }

      setError("Unable to log in. Please try again.");
    } catch {
      setError("Unable to log in. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="max-w-md space-y-4 items-center text-center justify-center mx-auto py-16">
      <h1 className="text-3xl font-bold mb-4">RSVP Now!</h1>
      <p className="text-sm text-muted-foreground">
        Enter your email to RSVP Now!
      </p>
      <form onSubmit={handleLoginSubmit} className="space-y-3">
        <input
          type="email"
          required
          className="h-10 w-full rounded-md border bg-card px-4 py-2 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-primary"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
        />
        <Button type="submit" className="w-full" style={{cursor: "pointer"}} disabled={isLoading}>
          RSVP Now!
        </Button>
      </form>
      {error ? <p className="text-sm text-red-400">{error}</p> : null}
      <h2 className="text-xl mb-4">Attention: This is just a placeholder form for now!</h2>
    </div>
  );
}
