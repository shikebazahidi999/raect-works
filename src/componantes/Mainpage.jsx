import { useState } from "react"
import Navbar from "../App"


export default function MainPage(){
   
    
     let [value,setvalue] =useState("")
    return(
       
        <>
        
        {/* <div className="h1style" >
            <div className="h1div">
        <h1>{value}</h1>
        <button id="btn" onClick={()=> setvalue( value = "Hello world")  }>show Text</button>
        <button onClick={()=> setvalue(value ="")}>hide text</button>
        </div>
        </div> */}
        <Navbar/>
        <div className="h1div flex flex-col gap-4">
            <input className=" border " value={value} onChange={(event)=> setvalue(event.target.value)} type="text" />
            <h1 className=" border border-black p-2 font-serif bg-linear-90 from-green-900 via-green-300 to-green-900 text-transparent bg-clip-text ">{value}</h1>
            <button className="border font-bold hover:bg-gray-400 hover:text-white transition-all duration-150 hover:rounded-md" onClick={()=>setvalue(value = "")}>hide text</button>
        </div>
        </>
    )
}