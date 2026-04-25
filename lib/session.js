import { getIronSession } from "iron-session";

const defaultPassword = "dev_only_change_this_to_a_secure_minimum_32_char_password";

export const sessionOptions = {
    cookieName: "redboard_session",
    password: process.env.SESSION_PASSWORD || defaultPassword,
    cookieOptions: {
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        httpOnly: true,
        path: "/",
    },
};

export async function getSession(req, res) {
    return getIronSession(req, res, sessionOptions);
}