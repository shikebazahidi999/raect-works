import { Link } from "react-router-dom";
import { employs } from "../../public/Details"
import Navbar from "../App";

export default function Informations(){
    const infos = employs;
    return(
        <>
        <Navbar/>
        <div className="bg-linear-60 from-purple-950 via-800 to-purple-950 h-full w-full grid grid-cols-4 p-8 mt-20 gap-5">
            {infos.map((items)=>(
                <div className="bg-gray-300/10 h-fit w-fit p-6 flex flex-col gap-2 rounded-md border border-gray-500  hover:shadow-xl hover:shadow-purple-500 shadow-md shadow-purple-600 transition-all duration-150 items-center" key={items.id}>
                    <img className="h-70 w-70 rounded-full border border-purple-500 shadow-md shadow-purple-400 " src={items.image} alt="" />
                    <h1 className="text-2xl font-bold text-purple-400 cursive">Name : {items.name}</h1>
                    <h1 className="text-2xl font-bold text-purple-400 cursive">last name : {items.LastName}</h1>
                   <Link to={`/informations/${items.id}`}> <button className="w-full bg-gray-200/10 p-2 rounded-md border text-purple-400 hover:shadow-md hover:shadow-purple-600"> See More Informations</button></Link>
                </div>
            ))}
        </div>
        </>
    )
}