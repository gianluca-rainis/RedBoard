import { createUser, normalizeEmail } from "@/lib/auth-store";
import { getSession } from "@/lib/session";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const email = normalizeEmail(req.body?.email || "");

    if (!email) {
        return res.status(400).json({ error: "Email is required" });
    }

    const { user } = await createUser(email);

    if (!user) {
        return res.status(500).json({ error: "Unable to create account" });
    }

    const session = await getSession(req, res);

    session.email = email;
    
    await session.save();

    return res.status(200).json({ ok: true, email });
}