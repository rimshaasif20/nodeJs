"use client";
import Link from "next/link"
import './style.css';
import { deleteCookie } from 'cookies-next';
import {useRouter} from "next/navigation"

export default function Layout({children}){
  const router= useRouter();
 function handleSubmit(){

   router.push("/")
 }
   
    return(
        <>
        <div>
      
         <ul className="menu">
         <li>
        <h3>NextApp</h3>
        </li>
        <li>
          <Link href="/portfolio">Home</Link>
        </li>
        <li>
          <Link href="/portfolio/about">About</Link>
        </li>
        <li>
          <Link href="/portfolio/service">ImageList</Link>
        </li>
        <li>
          <Link href="/portfolio/feedback">Upload Image</Link>
        </li>
         <li>
          <Link href="/" onClick={handleSubmit()}>Logout</Link>
        </li>
      </ul>
      
      </div>
      {children}
        </>
    )
}