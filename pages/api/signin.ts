import bcrypt from "bcrypt";
import cookie from "cookie";
import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;

  // Handle if required parameters are missing
  if (!email || !password) {
    return res.status(400).json({
      message: "Invalid request: email and password are required",
    });
  }

  const user = await prisma.user.findUnique({
    where: { email },
  });

  // Check if user exists and password is correct
  if (user && bcrypt.compareSync(password, user.password)) {
    // Create jwt and serialize it to cookie
    const token = jwt.sign(
      { id: user.id, email: user.email, time: Date.now() },
      "super secret",
      { expiresIn: "8h" }
    );

    res.setHeader(
      "Set-Cookie",
      cookie.serialize("TRAX_ACCESS_TOKE", token, {
        httpOnly: true,
        maxAge: 8 * 60 * 60,
        path: "/",
        secure: process.env.NODE_ENV === "production",
      })
    );

    return res.status(200).json({
      message: "Successfully signed in",
    });
  }

  // otherwise retrun an access denied error
  return res.status(401).json({ message: "invalid username or password" });
};
