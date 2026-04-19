import { useEffect, useState } from "react";
import Navbar from "./App";
import { Search } from "lucide-react";

export default function Pages(){
   const [qimat, setqimat] = useState("")
    const [value, setvalue] = useState([]);
   const [clickedBtn, setclickedbtn]= useState(false)
     function ClickButton(){
       setclickedbtn(!clickedBtn);
    }
    useEffect(()=>{
       async function posts(){
          const Data = await fetch("https://jsonplaceholder.typicode.com/posts");
          const Datas = await Data.json();
          setvalue(Datas);
           if(qimat.trim().length!== 0){
        const qimats =setvalue( value.filter((v)=> v.title.includes(qimat)))}
        }
        
        posts()
    },[clickedBtn]);
  
    if(value.length===0){
        return(
            <div className="h-full w-full flex items-center justify-center ">
            <h1 className=" text-3xl text-center ">Wait For It...</h1>
            </div>
        )
    };
    
    return(
        <>
        <Navbar/>
        <div className="bg-linear-90 from-stone-400 via-stone-300 to-stone-500 h-full w-full  ">
            <div className=" mt-20 p-7 w-full flex flex-row ">
                <input value={qimat} onChange={(effect)=> setqimat(effect.target.value)} type="text" placeholder="Search a post by the title name" className="w-full h-10 border-2 border-r-0 border-stone-400 focus:outline-stone-500" />
                <button onClick={ClickButton} className=" text-stone-800 border-2 border-l-0 border-stone-400 px-4 hover:bg-stone-500 hover:text-stone-200  hover:border-l-2"><Search/></button>
            </div>
            <div className="grid grid-cols-2 gap-5 p-5 " >
                {
                    value.map((p)=>(
                        <div key={p.title} className=" bg-stone-200 gap-4 h-fit w-fit p-2 rounded-2xl hover:shadow-2xl hover:shadow-stone-700 transition-all duration-200  ">
                            <h1 className="text-2xl font-bold font-serif bg-linear-90 from-stone-800 via-stone-400 to-stone-800 w-fit text-transparent bg-clip-text">{p.title}:</h1>
                            <p>{p.body}</p>
                        </div>
                    ))
                }

            </div>
        </div>
        </>

    )
}