"use client";
import Link from "next/link"
import './style.css';
import {useRouter} from 'next/navigation';

import withAuth from '../restrict/withAuth'; 

 function Layout({children}){
    const router=useRouter();
   function handleSubmit(){
    localStorage.removeItem("user");
    localStorage.removeItem("userAuthenticated");
  router.push("/signin");
   }
    return(
        <>
        <div>
      
         <ul className="menu">
         <li>
        <h3>Image Gallery</h3>
        </li>
        <li>
          <Link href="/screens/imageupload">UploadImage</Link>
        </li>
        <li>
          <Link href="/screens/imageshow">ImageList</Link>
        </li>
        <div style={{marginLeft: 50}}>
        <li>
       <button type="submit" onClick={handleSubmit}>Logout</button>
       </li>
       </div>
      </ul>
      
      </div>
      {children}
        </>
    )
}
export default withAuth(Layout);