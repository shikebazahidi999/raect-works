import { useRef } from "react";
import Navbar from "./App";

export default function Images(){
    const users = [
        {
            image:"../public/picture14.jpg",
            name:" Lamin Yamal",
            info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fugiat, maxime repudiandae o",

        },
        {
            image:"../public/picture1.jpg",
            name:" Lamin Yamal",
            info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fugiat, maxime repudiandae o.",

        },
        {
            image:"../public/picture3.jpg",
            name:" Instagram User1",
            info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fugiat, maxime repudiandae odio aut hic consequuntur, tempora nisi sed qui labore saepe laboriosam dolorum veniam fuga neque animi atque quia.",

        },
        {
            image:"../public/picture4.jpg",
            name:"Instagram User2",
            info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fugiat, maxime repudiandae odio aut hic consequuntur, tempora nisi sed qui labore saepe laboriosam .",

        },
        {
            image:"../public/picture6.jpg",
            name:" Instagram User3",
            info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fugiat, maxime repudiandae odio aut hic consequuntur, tempora nisi sed.",

        }
    ];
    const Name = useRef(users[0].name);
    const Image = useRef(users[0].image);
    const Info = useRef(users[0].info);
    const button = useRef(null);
    let Index = 0;
    function click(){
        Index++;
        if(Index>= users.length){
            Index =0
        }
        
            Name.current.textContent = users[Index].name;
            Image.current.src = users[Index].image;
            Info.current.textContent = users[Index].info;

           if(Index!=0){
             button.current.classNamelist.remove("hidden");
             button.current.classNamelist.add("block")

           } }
          function clickforshow(){
         
          }
    return(
        <> 
        <Navbar/>
        {/* main div */}
        <div className=" h-screen w-full bg-[url('public/nature2.jpg')] bg-cover flex justify-center items-center gap-2" >
        {/* person Div */}
           <div id="proDiv" className="w-96 rounded-2xl border border-stone-400 p-5 bg-stone-400/10 flex flex-col items-center justify-center gap-1">
            <img ref={Image} id="images" className="h-65 w-65 rounded-full" src="../public/picture14.jpg" alt="" />
          <h1 ref={Name} id="names" className="text-white text-2xl font-[cursive]">{users[Index].name}</h1>
          <p ref={Info} id="information" className="text-stone-950">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque obcaecati accusamus blanditiis unde molestias error ipsa in natus a, eveniet impedit voluptatem, tenetur recusandae aliquam enim alias. Quia, et assumenda!</p>
          <button onClick={click} className="text-2xl bg-stone-700/60 p-2 border border-stone-400 hover:bg-stone-700/80 hover:rounded-2xl hover:text-stone-300 transition-all duration-150">Next Page</button>
          <button ref={button} id="btn" onClick={clickforshow} className=" hidden text-2xl bg-stone-700/60 p-2 border border-stone-400 hover:bg-stone-700/80 hover:rounded-2xl hover:text-stone-300 transition-all duration-150">Show All Users</button>
          </div>   
        </div>
              </>   )}