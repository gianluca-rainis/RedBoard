import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    async function loadSession() {
      try {
        const response = await fetch("/api/session");
        const data = await response.json();

        if (ignore) {
          return;
        }

        if (data.loggedIn && data.email) {
          setSessionEmail(data.email);
          setIsLoading(false);
          return;
        }

        router.replace("/accountPage");
      } catch {
        if (!ignore) {
          router.replace("/accountPage");
        }
      }
    }

    loadSession();

    return () => {
      ignore = true;
    };
  }, [router]);

  if (isLoading) {
    return <p className="text-sm text-muted-foreground">Loading...</p>;
  }

  return (
    <div className="max-w-md space-y-4">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
    </div>
  );
}
