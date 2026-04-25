import { createClient } from "@libsql/client";

export async function query(sql, values) {
    const conn = createClient({
        url: process.env.DATABASE_URL,
        authToken: process.env.AUTH_TOKEN,
    });

    const results = await conn.execute(sql, values);
    
    await conn.close();

    const rows = results.rows || [];

    if (results.lastInsertRowid !== undefined && results.lastInsertRowid !== null) {
        rows.insertId = Number(results.lastInsertRowid);
    }

    if (results.rowsAffected !== undefined && results.rowsAffected !== null) {
        rows.rowsAffected = Number(results.rowsAffected);
    }

    return rows;
}