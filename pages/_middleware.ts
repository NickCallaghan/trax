import { NextResponse } from "next/server";

const signedInPages = ["/", "/library", "/playlists", "/settings", "/profile"];

export default function middleware(req) {
  if (signedInPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.TRAX_ACCESS_TOKEN;

    if (!token) {
      return NextResponse.redirect("/login");
    }
  }
}
