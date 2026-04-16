import { useNavigate, useParams } from "react-router-dom";
import { employs } from "../public/Details";
import Navbar from "./App";
export default function People(){


   const { id } = useParams();
    const info = employs.find((items)=>items.id ==Number(id))
    return(
        <>
        <Navbar/>
                                     <div className="relative w-fit group top-30">
<img className=" h-96 w-72  rounded-xl hover:border hover:border-pink-500 transition-all 
duration-300 hover:shadow-xl hover:shadow-pink-50 hover:blur-[2px] " src= {info.image} />
<div className="bg-black-400/45 w-full absolute bottom-0 left-0 hidden group-hover:block  p-2 rounded-b-2xl hover:backdrop-blur-lg">
<h1 className="font-extrabold text-2xl">Name:{info.name}</h1>
   

<div>
<p>FatherName{info.fatherName}</p>
<p>LastName:{info.LastName}</p>
<p>Age:{info.age}</p>
<p>Gender:{info.gender}</p>
</div>
    </div>       
 </div> 
        </>
    )
}