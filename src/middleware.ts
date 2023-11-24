import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const res = NextResponse.next();

  // add the CORS headers to the response

  return res;
}

// specify the path regex to apply the middleware to
export const config = {
  matcher: "/api/:path*",
};
