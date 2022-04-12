import bcrypt from "bcrypt";
import cookie from "cookie";
import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const salt = bcrypt.genSaltSync();
  const { email, password, name } = req.body;

  // Handle if required parameters are missing
  if (!email || !password || !name) {
    return res.status(400).json({
      message: "Invalid request: email, password and name are required",
    });
  }

  // Create user or handle if user already exists
  let user;

  try {
    user = await prisma.user.create({
      data: {
        email,
        password: bcrypt.hashSync(password, salt),
        name,
      },
    });
  } catch {
    return res.status(401).json({
      error: "Email already in use",
    });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email, time: Date.now() },
    process.env.JWT_SECRET,
    { expiresIn: "8h" }
  );

  // Set jwt to cookie and return user response
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("TRAX_ACCESS_TOKEN", token, {
      httpOnly: true,
      maxAge: 8 * 60 * 60,
      path: "/",
      secure: process.env.NODE_ENV === "production",
    })
  );

  // Remove password from user response
  delete user.password;

  return res.json(user);
};
