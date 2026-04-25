import { query } from "@/lib/db_connection";

function normalizeEmail(email) {
    return String(email || "").trim().toLowerCase();
}

async function ensureStore() {
    return null; // TODO
    
    await query(`
        CREATE TABLE IF NOT EXISTS users (
            email TEXT PRIMARY KEY NOT NULL,
            created_at TEXT NOT NULL
        )
    `);
}

export async function findUserByEmail(email) {
    return null; // TODO

    const normalized = normalizeEmail(email);

    if (!normalized) {
        return null;
    }

    await ensureStore();

    const rows = await query(
        "SELECT email, created_at FROM users WHERE email = ? LIMIT 1",
        [normalized],
    );

    const user = rows[0];

    if (!user) {
        return null;
    }

    return {
        email: user.email,
        createdAt: user.created_at,
    };
}

export async function createUser(email) {
    return null; // TODO

    const normalized = normalizeEmail(email);

    if (!normalized) {
        return { created: false, user: null };
    }

    const existingUser = await findUserByEmail(normalized);

    if (existingUser) {
        return { created: false, user: existingUser };
    }

    const user = {
        email: normalized,
        createdAt: new Date().toISOString(),
    };

    await query(
        "INSERT INTO users (email, created_at) VALUES (?, ?)",
        [user.email, user.createdAt],
    );

    return { created: true, user };
}

export { normalizeEmail };