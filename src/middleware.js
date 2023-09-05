import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(req) {
    const path = req.nextUrl.pathname

    const { nextUrl: { search } } = req;
    const urlSearchParams = new URLSearchParams(search);
    const params = Object.fromEntries(urlSearchParams.entries());
    console.log(params, "params------------------------------------- 1")

    if (params.JSESSIONID) {
        console.log(params.JSESSIONID, "params.JSESSIONID------------------------------------- 2")

        const response = NextResponse.next()

        response.cookies.set("JSESSIONID", params.JSESSIONID)
        response.cookies.set("grails_remember_me", params.grails_remember_me)

        return response
    }




    const isPublicPath = path === '/login' || path === '/signup' || path === '/verifyemail'
    console.log(isPublicPath, "isPublicPath------------------------------------- 3")
    const token = req.cookies.get('grails_remember_me')?.value || ''
    console.log(token, "token------------------------------------- 4")


    if (isPublicPath && token) {
        console.log("isPublicPath && token ------------------------------------- 5")

        return NextResponse.redirect(new URL('/', req.nextUrl))
    }

    if (!isPublicPath && !token) {
        console.log("!isPublicPath && !token ------------------------------------- 6")

        return NextResponse.redirect(new URL('http://localhost:8080/app', req.nextUrl))
    }

}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/', '/app/:path*', '/login'],
}