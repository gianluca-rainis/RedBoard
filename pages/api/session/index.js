import { normalizeEmail } from "@/lib/auth-store";
import { getSession } from "@/lib/session";

export default async function handler(req, res) {
    const session = await getSession(req, res);

    if (req.method === "GET") {
        const email = normalizeEmail(session.email || "");
        
        return res.status(200).json({
            loggedIn: Boolean(email),
            email: email || null,
        });
    }

    if (req.method === "DELETE") {
        session.destroy();

        return res.status(200).json({ ok: true });
    }

    return res.status(405).json({ error: "Method not allowed" });
}