import { Link, useNavigate } from "react-router-dom"
import Navbar from "./App"
import { employs } from "../public/Details"
export default function Allinfo(){
    const navigate = useNavigate();
    function Click(){
        navigate("/")
    }

    return(
        
        <>
        <Navbar/>
        <div className="flex flex-row gap-4">
            {
                employs.map((p)=> (
                             <div key={p.id} className="relative w-fit group top-30">
<img className=" h-96 w-72  rounded-xl hover:border hover:border-pink-500 transition-all duration-300 hover:shadow-xl hover:shadow-pink-50 hover:blur-[2px] " src={p.image} alt=""/>
<div className="bg-black-400/45 w-full absolute bottom-0 left-0 hidden group-hover:block  p-2 rounded-b-2xl hover:backdrop-blur-lg">
<Link className="font-extrabold text-2xl"to={`/allinfo/${p.id}`}  >{p.name}</Link>
   

<div>
<p>{p.LastName}</p>

</div>
    </div>       
 </div> 
                ))
            }

        </div>
        <button onClick={Click} className=" absolute bottom-0 border  ">Main Page</button>

        </>
    )
}