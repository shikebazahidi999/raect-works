
import { use, useReducer, useRef, useState } from "react";

export default function Radiucer(){
    let intioalvalue = {count: 0 ,add:"hello" };
    function functio(state,funct){
       switch(funct.type){
        case "add":
            return {count:state.count + funct.payload}
            break
            case "mines":
                return{count:state.count - funct.payload}
                break
            
            default:
                return   state.count= 0;
           

       }
    }
   
   const [state,func] =useReducer(functio,intioalvalue);
   let [count,setcount] = useState(0);
   let usesRef = useRef(0);
   function increes(){
    usesRef.current++
   }
   function decrees(){
    usesRef.current --
   }
   function reset(){
    usesRef.current = 0
   }
    return(
        <>
        <div className="flex items-center flex-row gap-5 border-2 rounded-2xl border-red-400 p-20 bg-lime-100/20">
        <div className="flex items-center flex-col gap-2 border-2 rounded-2xl border-red-400 p-20 bg-lime-100/20 ">
        <h1 className="bg-linear-60 from-lime-400 via-red-200 to-red-400 font-bold text-2xl bg-clip-text text-transparent">Hook reducer</h1>
            <button className=" hover:shadow-2xl hover:shadow-lime-300 text-2xl border-2 border-lime-200 p-3 rounded-2xl  font-bold bg-red-300 " onClick={()=>func({type:"add", payload: 8})}>increement</button>
            <h1 className="text-3xl text-red-300">{state.count}</h1>
            <button className="  hover:shadow-2xl hover:shadow-lime-300 text-2xl border-2 border-lime-200 p-3 rounded-2xl  font-bold bg-red-300  " onClick={()=>func({type:"mines", payload:1})}>decreement</button>
            <button onClick={()=>func({type:"reset",payload:0})} className=" hover:shadow-2xl hover:shadow-lime-300 text-2xl border-2 border-lime-200 p-3 rounded-2xl  font-bold bg-red-300 ">reset</button>
        </div>
        {/* hook useState */}
        <div className="flex items-center flex-col gap-2 border-2 rounded-2xl border-red-400 p-20 bg-lime-100/20 ">
        <h1 className="bg-linear-60 from-lime-400 via-red-200 to-red-400 font-bold text-2xl bg-clip-text text-transparent">Hook usestate</h1>
            <button className=" hover:shadow-2xl hover:shadow-lime-300 text-2xl border-2 border-lime-200 p-3 rounded-2xl  font-bold bg-red-300 " onClick={()=>setcount(count + 2)}>increement</button>
            <h1 className="text-3xl text-red-300">{count}</h1>
            <button className="  hover:shadow-2xl hover:shadow-lime-300 text-2xl border-2 border-lime-200 p-3 rounded-2xl  font-bold bg-red-300  " onClick={()=> setcount(count - 2)}>decreement</button>
            <button onClick={()=>setcount(count =0)} className=" hover:shadow-2xl hover:shadow-lime-300 text-2xl border-2 border-lime-200 p-3 rounded-2xl  font-bold bg-red-300 ">reset</button>
        </div>
        {/* hook useref */}
        <div className="flex items-center flex-col gap-2 border-2 rounded-2xl border-red-400 p-20 bg-lime-100/20 ">
        <h1 className="bg-linear-60 from-lime-400 via-red-200 to-red-400 font-bold text-2xl bg-clip-text text-transparent">Hook useRef</h1>
            <button className=" hover:shadow-2xl hover:shadow-lime-300 text-2xl border-2 border-lime-200 p-3 rounded-2xl  font-bold bg-red-300 " onClick={increes}>increement</button>
            <h1 className="text-3xl text-red-300">{usesRef.current}</h1>
            <button className="  hover:shadow-2xl hover:shadow-lime-300 text-2xl border-2 border-lime-200 p-3 rounded-2xl  font-bold bg-red-300  " onClick={ decrees}>decreement</button>
            <button onClick={reset} className=" hover:shadow-2xl hover:shadow-lime-300 text-2xl border-2 border-lime-200 p-3 rounded-2xl  font-bold bg-red-300 ">reset</button>
        </div>
        </div>
        </>
    )
}