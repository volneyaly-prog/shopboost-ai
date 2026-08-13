import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  // Pwoteksyon baz pou kounye a
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
