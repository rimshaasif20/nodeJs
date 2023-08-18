"use client"
import Image from "./imageupload/page";
import withAuth from "../restrict/withAuth";
const Screen=()=>{
    return(
        <Image />
    )
}
export default withAuth(Screen);