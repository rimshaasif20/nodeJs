// import { NextResponse } from "next/server";

// import { cookies } from 'next/headers'
// export function middleware(request) {
// const user=cookies();
//   const { nextUrl } = request;
//   const url = nextUrl.clone();
//   const token=user.get("user")


//   if (!token) {
//    if(url.pathname==="/")
//    {
//     return NextResponse.redirect(url,"/portfolio")
//    }
//   } else {
//     if (url.pathname === "/") {
//       url.pathname = "/portfolio/about";
//       return NextResponse.redirect(url.toString());
//     }
//   }

//   if (nextUrl.pathname.startsWith("/")) {
//     return NextResponse.rewrite(new URL("/portfolio", nextUrl.origin));
//   }

//   return NextResponse.next(); // Continue to the next middleware/route
// }
import { NextResponse } from "next/server";
import {cookies} from "next/headers"
export function middleware(request){
const token= cookies.get("user")
    if(!token===null){
 return NextResponse.redirect(new URL("/portfolio",request.url))
    }
    else{
        return NextResponse.redirect(new URL("/",request.url));
    }
}

export const config={
    matcher: "/portfolio/:path*"
}