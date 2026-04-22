import { createContext, useContext } from "react";
import Navbar from "./App";
import Students from "./Students.jsx";
import Teachers from "./Teachers.jsx";
import { employs } from "../public/Details.js";
import { Taechers } from "../public/Details.js";
export const StudentsContext = createContext();

export default function About(){
  
   const Information = {
   employ: employs,
   teacher: Taechers
   }
   
    return(
        
        
        <>
        <Navbar/>
        <div className="h-full w-full bg-linear-90 from-red-200 via-sky-200 to-lime-200 mt-21 flex items-center flex-col gap-4">
            <h1 className="text-4xl m-5 font-bold bg-linear-90 from-red-400 via-sky-400 to-lime-400 text-transparent bg-clip-text">All information about us</h1>
            <div className="flex flex-row justify-between w-full p-10">
       <StudentsContext.Provider value={Information}>
        
        <Students/>

        <Teachers/>
        
       </StudentsContext.Provider>
       </div>
       </div>
        
            
        </>
    )
}