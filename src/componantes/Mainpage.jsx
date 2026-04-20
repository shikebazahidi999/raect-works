import { createContext, useState, } from "react";
import Navbar from "../App";

import About from "../about";

export const NameContext = createContext();
export default function MainPage(){
   
    
     let [value,setvalue] =useState("");
  
     
    return(
       
        <>
     
        <Navbar/>
  <NameContext.Provider value={value}>
    
</NameContext.Provider>
        <div className="h1div flex flex-col gap-4">
            <input className=" border " value={value} onChange={(event)=> setvalue(event.target.value)} type="text" />
            <h1 className=" border border-black p-2 font-serif bg-linear-90 from-green-900 via-green-300 to-green-900 text-transparent bg-clip-text ">{value}</h1>
            <button className="border font-bold hover:bg-gray-400 hover:text-white transition-all duration-150 hover:rounded-md"
             >hide text</button>
        </div>
        </>
    )
}