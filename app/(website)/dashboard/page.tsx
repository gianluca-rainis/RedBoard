"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
    const searchParams = useSearchParams();
    const initialEmail = searchParams.get("email") ?? "";

    const [email, setEmail] = useState(initialEmail);
    const [submitted, setSubmitted] = useState(false);

    return (
        <section className="mx-auto mt-24 w-full max-w-xl rounded-2xl border bg-card p-6 shadow-sm sm:p-8">
            <h1 className="text-3xl font-extrabold tracking-tight">RSVP Now</h1>
            <p className="mt-2 text-sm text-muted-foreground">
                Fill in the form below to register your interest.
            </p>

            <form onSubmit={(e) => {e.preventDefault(); setSubmitted(true);}} className="mt-6 space-y-4">
                <div className="space-y-1.5">
                <label htmlFor="email" className="text-sm font-medium">
                    Email
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="h-10 w-full rounded-md border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-primary"
                    placeholder="you@example.com"
                />
                </div>

                <Button type="submit" className="w-full" size="lg">
                Submit RSVP
                </Button>
            </form>

            {submitted && (
                <p className="mt-4 text-sm text-green-600">
                Thanks! Your RSVP has been recorded.
                </p>
            )}
        </section>
    );
}
