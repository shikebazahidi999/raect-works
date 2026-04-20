import { useContext } from "react";
import Navbar from "./App";
import { NameContext } from "./Mainpage";

export default function About(){
   const info = useContext(NameContext)
    return(
        
        
        <>
        <Navbar/>
        <div className="border border-dashed p-3 text-black w-96 mt-52 ">
            <h1></h1>
            <p>{info}</p>
        </div>
        </>
    )
}