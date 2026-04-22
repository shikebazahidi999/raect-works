import { useContext } from "react";
import { StudentsContext } from "./about";

export default function Students(){
   const infos = useContext(StudentsContext);

    return(
        <>
        <div className="h-fit w-fit p-5 rounded-2xl bg-lime-400/30">
            <h1 className=" text-center m-5 text-4xl font-bold bg-linear-90 from-red-400 via-sky-400 to-lime-400 text-transparent bg-clip-text w-fit">Students</h1>
        <div className=" grid grid-cols-2 h-fit w-fit gap-3 ">
          {infos.employ.map((item)=>(
            <div className=" hover:shadow-2xl hover:shadow-lime-400 h-fit w-75 p-3 bg-linear-90 from-red-200 via-sky-200 to-lime-200 rounded-2xl" key={item.id}>
                <h1 className="font-black"> Id: {item.id}</h1>
                <h1 className="text-2xl"> Name:{item.name}</h1>
                <h1>Father's Name:{item.fatherName}</h1>
                <h1>Last Name:{item.LastName}</h1>
                <h1>{item.gender  === "female"? "She is our student" :  "He is our student"}</h1>

            </div>

          ))};

        </div>
            </div>

        </>
    )
}