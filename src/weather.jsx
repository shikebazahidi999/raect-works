import { Cloud, Sun } from "lucide-react";
import Navbar from "./App";
import { useEffect, useState } from "react";

export default function Weather(){
    const [info,setinfo] = useState();
    const [cityName,setCityname] = useState("Ghazni");
    const [clickedButton,setclickbutton] = useState(false);
    function clickMe(){
      setclickbutton(!clickedButton);
    }
     useEffect(()=>{
        async function infomation(){
          const srcinfo = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=684418efa9274f3ad6491868b0271123`);
          const getinfo = await srcinfo.json(); 
          setinfo(getinfo); 
        }
        infomation();
        
        
     },[clickedButton]);
     
    
     console.log(info);
     if(!info){
        return(
        <h1 className="text-6xl text-green-500">Loading...</h1>)
     }
      const sunrise = new Date(info.sys.sunrise*1000).toLocaleDateString([],{
        hour:"2-digit",
        minute:"2-digit"
     });
      const sunset = new Date(info.sys.sunset*1000).toLocaleDateString([],{
        hour:"2-digit",
        minute:"2-digit"
     });

    return(
        <>
        <Navbar/>
        <div className="h-screen w-screen flex flex-col items-center justify-center p-64">
          <div className="w-full flex flex-row space-y-2">
            <input  value={cityName} onChange={(effect)=> setCityname(effect.target.value)} className="border-2 border-blue-400 w-full" type="text" />
            <button onClick={clickMe} className="border-2 border-blue-400 h-fit w-fit hover:bg-blue-400 hover:text-white">Search</button>
          </div>
        <div className=" p-10 h-fit w-full border-x-2 border-blue-400 flex flex-col ">
            <div className="flex justify-center ">
            <h1 className=" text-3xl h-fit w-fit font-bold  text-transparent bg-linear-90 from-blue-500 via-blue-300 to-blue-500 bg-clip-text  ">
                {cityName} Citie's Weather 
            </h1>
            <hr />
            </div>
            <div className=" mt-4 flex flex-col gap-4">
                
                    {/*  sky state*/}
              <h1>{info.weather[0].main === "Clear"? <div className="flex justify-between"><h1>Sunny</h1><Sun size={42} className="text-yellow-400"/></div> : info.weather[0].main==="Clouds"? <div className="flex justify-between"><h1 className="text-xl">Cloudy</h1><Cloud size={42} className="text-gray-400"/></div> : ""
              }</h1>
              <hr />
              {/* wind deg */}
              <div className="flex justify-between ">
                <h1 className="text-xl">Wind Deg </h1>
                <h1 className="text-xl">{info.wind.deg}</h1>
              </div>
              <hr />
              {/* wind speed */}
              <div className="flex justify-between">
                <h1 className="text-xl">Wind Speed </h1>
                <h1 className="text-xl">{info.wind.speed}</h1>
              </div>
              <hr />
              {/* sunrise */}
              <div className="flex justify-between">
                <h1 className="text-xl">SunRise </h1>
                <h1 className="text-xl">{sunrise}</h1>
              </div>
              <hr />
              {/* sunset */}
              <div className="flex justify-between">
                <h1 className="text-xl">SunRSet </h1>
                <h1 className="text-xl">{sunset}</h1>
              </div>
<div>
  <h1></h1> <p>
</div>
              

            </div>
            
        </div>
        </div>
         </>)}