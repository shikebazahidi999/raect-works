
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
      text:"About"
    },
    {
    href:"/images",
    text:"Images",
    },
    {
      href:"/costomars",
      text:"costomars"
    },
    {
       href:"/Pages",
       text:"Pages"
    },
   {
   href:"/allinfo",
   text:"AllInfo"
   } ,
   {
   href:"/weather",
   text:"Weather page"
   } 
 
  ];

  return(
    <>
 
    <div className="navDiv">
      <h1 ><span className="sh">SH</span> resturant</h1>

        <ul className=" flex flex-row gap-3 bg-black h-fit">
          {routes.map((items)=>(
            <li className="ul" key={items.href}>
            <Link 
            to={items.href}>{items.text}</Link>
            </li>
          ))}

        </ul>
       
    
    </div>

 
    </>
  );
}

