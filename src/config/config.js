
export const cookieOptions = {
    httpOnly: true,
    secure: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: "None",
    maxAge: 1000 * 60 * 60, // 5 minutes
}
