import { NextResponse } from 'next/server';

// This middleware runs before pages/components and can be used to modify responses
export function middleware(request) {
  // We're just returning the request as-is here
  // But this ensures the middleware is active
  return NextResponse.next();
}

// These are the paths the middleware will run on
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (static files)
     * 4. /favicon.ico, /sitemap.xml (static files)
     */
    '/((?!api|_next|_static|favicon.ico|sitemap.xml).*)',
  ],
}; 