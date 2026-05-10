import { createContext, useContext, useReducer, useRef } from "react";
import {  useEffect} from "react";
import { Link,  } from "react-router-dom";
import BgChanger from "./bgChanger";
export default function Navbar(){
 
  const useeffect =useEffect(()=>{
    <BgChanger/>
  })
  const routes = [
    {
      href:"/about",
      text:"About",
    },
    {
    href:"/images",
    text:"Images",
    },
    {
      href:"/costomars",
      text:"costomars",
    },
    {
       href:"/Pages",
       text:"Pages",
    },
   {
   href:"/allinfo",
   text:"AllInfo",
   } ,
   {
   href:"/weather",
   text:"Weather page",
   }, 
   {
   href:"/",
   text:"Main Page",
   },
   
 
  ]; return(
    <><div className="navDiv">
      <h1 ><span className="sh">SH</span> resturant</h1>

        <ul className=" flex flex-row gap-3 bg-black h-fit">
          {routes.map((items)=>(
            <li className="ul" key={items.href}>
            <Link 
            to={items.href}>{items.text}</Link>
            </li>
          ))}
</ul> </div> </>
  );
}


import {  useState, } from "react";
import About from "./about";
import Radiucer from "./useraduce";
import Textcomponent from "./text";
 export const NameContext = createContext();
export const usecontexts = createContext();
export  function MainPage(){

  let [value,setvalue] =useState();
  let text = "hello";
 function textfunction(values,setvalues){
     return(
    values
     )
 }
 let  [values, setvalues] =useReducer(textfunction,text)
  let getvalue = useRef();

  function click(){
setvalue(getvalue.current.value);
  }
   return(
        <>
      <Navbar/>
        <usecontexts.Provider value={textfunction}>
         <Textcomponent/>
          </usecontexts.Provider>
        <NameContext.Provider value={{value:values,setvalues:setvalues}}>
          <About/>
          </NameContext.Provider>
        
   <div className="flex flex-row items-center justify-center p-20 h-fit bg-linear-90 from-red-200 via-sky-200 to-lime-200 ">        
{/* <div className="h1div flex flex-col gap-4">
            <input ref={getvalue} className=" border " value={value} onChange={(event)=> setvalue(event.target.value)} type="text" />
            <h1 className=" border border-black p-2 font-serif bg-linear-90 from-green-900 via-green-300 to-green-900 text-transparent bg-clip-text ">{value}</h1>
            <button onClick={click} className="border font-bold hover:bg-gray-400 hover:text-white transition-all duration-150 hover:rounded-md"
             >hide text</button>
        </div> */}
        <Radiucer/>
        </div>
        
        </>)}

