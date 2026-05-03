
import { useReducer } from "react";

export default function Radiucer(){
    let intioalvalue = 0;
    function functio(state,func){
        if(func.type==="add"){
            return(
                state +1
                
            )
            showbtn()
        }
        else if(func.type==="reset"){
            
        }
        else{
            return(
                state-1
            )
            
        }
    }
   
   const [state,func] =useReducer(functio,intioalvalue)
    return(
        <>
        <div className="flex items-center flex-col gap-2 border-2 rounded-2xl border-red-400 p-30 bg-lime-100/20 ">
            <button className=" hover:shadow-2xl hover:shadow-lime-300 text-2xl border-2 border-lime-200 p-3 rounded-2xl  font-bold bg-red-300 " onClick={()=>func({type:"add"})}>increement</button>
            <h1 className="text-3xl text-red-300">{state}</h1>
            <button className="  hover:shadow-2xl hover:shadow-lime-300 text-2xl border-2 border-lime-200 p-3 rounded-2xl  font-bold bg-red-300  " onClick={()=>func({type:"mines"})}>decreement</button>
            <button className="">onClick={()=>func({type:"reset"})}</button>
        </div>
        </>
    )
}