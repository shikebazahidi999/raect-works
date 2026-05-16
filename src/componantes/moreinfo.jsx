import { useParams } from "react-router-dom";
import Navbar from "../App";
import { employs } from "../../public/Details";
import { useRef, useState } from "react";
import { LucideUsers2, Mail } from "lucide-react";

export default function Moreinfo(){
    const {id} = useParams();
    let [email,setemail] = useState("");
    let [password,setpasword] = useState("");
    let [checkpasswors,setcheckpassword] =useState(false);
    let hidDiv = useRef(null)
    let errorh1= useRef(null)
        const info = employs.find((items)=>items.id ==Number(id));
        function Loging(){
            setemail("");
            setpasword("")
            if(email===info.email&&password===info.name){
                setcheckpassword(true);
                hidDiv.current.style.cssText= "display: none;"

            }else{
               
                errorh1.current.style.cssText = "display:block;"
            

            }
        }
    return(
        <>
        <Navbar/>
        <div  className="bg-linear-60 from-purple-950 via-800 to-purple-950 h-full w-full flex  items-center justify-center ">
            {/* log in div started */}
            <div ref={hidDiv} className="flex h-screen  items-center justify-center">
            <div  className=" flex flex-col items-center justify-center h-fit w-150 bg-gray-300/10 p-6 gap-5 border border-purple-500 rounded-md shadow-xl shadow-purple-600">
                <h1 className="text-purple-400 text-2xl font-bold">For verifying it is you {info.name}</h1>
                <input value={email} onChange={(changes)=>setemail( changes.target.value)} className="w-full h-fit p-3 text-purple-400 border border-purple-500 focus:outline-purple-600" type="text" placeholder="Enter your Email" />
                <input value={password} onChange={(changes)=>setpasword( changes.target.value)} className="w-full h-fit p-3 text-purple-400 border border-purple-500 focus:outline-purple-600" type="text" placeholder="Enter your Password" />
                <button onClick={Loging} className="w-full h-fit p-3 border border-purple-500 bg-purple-500/10 text-purple-400 font-bold hover:text-purple-900 hover:bg-purple-500 hover:rounded-md transition-all duration-150">Log In</button>
                <h1 ref={errorh1} className=" hidden font-bold text-red-700 animate-pulse m-5">the password or the email you entered is not correct please try agin</h1>
            </div>
            </div>
            {/* log in div ended */}
            {/* show information div started */}
            { checkpasswors &&(
            <div className="w-full">
                         <div className="bg-purple-500 w-full h-60 flex justify-between ">
                            <img className="h-70 w-70 rounded-full  mt-25 border  border-purple-600 shadow-lg shadow-purple-600" src="/public/picture12.jpg" alt="" />
                            <h1 className="mt-30 p-6 text-8xl cursive bg-linear-60 from-purple-950 via-purple-700 to-purple-800 h-fit w-fit text-transparent bg-clip-text">{info.name}</h1>
                    </div>
                        <div className="w-full flex flex-col gap-6 mt-5 items-baseline-last p-3 border border-purple-400 ">
                            <h1 className="text-2xl font-bold text-purple-400 flex">Name : <h1>{info.name}</h1></h1>
                            <h1 className="text-2xl font-bold text-purple-400 flex">Father name : <h1>{info.fatherName}</h1></h1>
                            <h1 className="text-2xl font-bold text-purple-400 flex"><LucideUsers2/> family name : <h1>{info.LastName}</h1></h1>
                            <h1 className="text-2xl font-bold text-purple-400 flex"> Age : <h1>{info.age}</h1></h1>
                            <h1 className="text-2xl font-bold text-purple-400 flex"><Mail/> Email : <h1> {info.email}</h1></h1>
                            <h1 className="text-2xl font-bold text-purple-400 flex"> Id Number : <h1>{info.id}</h1></h1>
                         </div>
                          <div className="w-full flex flex-col items-center">
                            <h1 className="text-4xl font-bold text-purple-400">Extra Informations</h1>
                            <p className="text-xl p-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, reprehenderit iusto! Rerum ratione quaerat perspiciatis aspernatur sint, vel provident, omnis sunt, aut recusandae repudiandae. Dignissimos temporibus quis, aut nisi quaerat, fuga enim earum nihil modi at ipsam possimus, id eaque exercitationem. Beatae minima blanditiis commodi asperiores vitae a odit. Quia, facere maiores! Tempora, officiis, itaque at soluta id odit officia placeat non accusamus, dolorum quae quis laboriosam ea incidunt eum possimus a maxime vero neque similique amet fuga! Exercitationem laborum qui perferendis eaque repellat aliquid impedit. Deserunt ab natus earum vel explicabo enim reiciendis maxime temporibus totam sapiente, vitae esse dolorum? Iusto rem quae accusantium voluptatum provident illo odit ullam. Impedit perspiciatis est excepturi odit totam dicta, in dolorem dolorum quos numquam accusamus repellat ipsum. Similique voluptates maxime repellendus est maiores dolor dicta, nemo perferendis temporibus possimus, ad blanditiis fugiat eum optio, provident modi voluptatibus quidem! Provident quis necessitatibus eveniet, consequatur quisquam commodi error quaerat deserunt ipsam distinctio, quos nihil temporibus, nesciunt eius? Voluptatem earum maiores dicta qui sapiente illo, perspiciatis reprehenderit suscipit, voluptate rem doloribus? Suscipit cum, fugit modi alias ipsa nobis officiis ducimus quidem reiciendis, blanditiis nam illo consequatur sed maxime recusandae deserunt tenetur quod! Odit quasi nisi repellat accusamus voluptatem ullam et tempore odio repellendus consequatur quas explicabo itaque, minus necessitatibus eaque beatae molestiae in facilis. Neque natus sint pariatur explicabo commodi animi soluta alias maxime fugiat, accusantium praesentium assumenda enim placeat repellendus eos tempora? Voluptatem, inventore ipsa blanditiis nostrum asperiores, perferendis ullam nulla rerum provident sit ducimus sequi officiis excepturi magnam, veniam nisi voluptate! Error officiis reiciendis modi natus repellendus odit, debitis quo molestias libero asperiores est aut vel reprehenderit fugit laborum earum provident maiores enim inventore ea obcaecati rem doloremque doloribus nam? In eum maiores odit assumenda deserunt accusantium est harum nesciunt praesentium fuga. Ipsa voluptatibus magnam nihil repellat quaerat inventore molestias obcaecati atque temporibus quod suscipit tenetur fugit, nobis dolorem delectus velit amet, tempora illo, ipsum ullam! Porro sint, voluptatum temporibus quasi dignissimos assumenda fuga quae ipsum vel, quidem, maxime dolore? Labore quisquam dolorem aperiam atque doloremque earum dignissimos autem tempora odit nam quis laboriosam recusandae pariatur quidem velit unde neque, optio sit fugiat eligendi. Quis ipsam repellendus et neque aperiam iure cupiditate, beatae dolor, delectus quibusdam doloribus nihil similique tenetur vero quos porro aliquam, possimus fuga enim veritatis. Totam magni et doloremque ad reprehenderit culpa, ratione in impedit iusto saepe harum quaerat alias debitis autem reiciendis non aperiam corporis, perspiciatis, quos distinctio est cumque blanditiis. Ea rerum iure molestias ut aliquid repellendus necessitatibus facilis quis et dicta rem quae accusantium, voluptates qui odit sit architecto enim adipisci delectus numquam placeat modi quisquam nam. Eos quibusdam error aspernatur tempore similique cumque quisquam voluptatem assumenda illo dolorem atque temporibus ex at dolorum omnis fuga, commodi corrupti numquam ut! Alias aliquam nam, id dolores repudiandae qui molestiae quisquam officia illo eius nostrum corporis maxime cumque nulla doloremque tempore. Quibusdam dolor ad architecto ratione modi, cupiditate sed quasi eum quidem in ullam aspernatur maxime totam, quis, fugiat quisquam sit repudiandae quae ipsa natus voluptates nam quo id dolore! Distinctio ratione doloribus consectetur nobis, officiis sed beatae laborum velit incidunt ad eveniet facilis ut minus porro nesciunt deserunt debitis culpa, quod dicta excepturi at doloremque magnam iure veniam. Maxime itaque earum dolorem accusamus, fugiat enim eligendi nobis quos ratione pariatur sequi, ipsam iusto eveniet quis qui suscipit aspernatur recusandae fugit laborum odio facilis molestiae dolores. Voluptates nihil error ab ullam nisi ex aut atque. Blanditiis nobis aliquam, consectetur ad magni dolorum natus. Repudiandae alias cum deserunt. Repellendus velit illum voluptas magni eligendi in, quis officia neque ex placeat corporis, laboriosam amet doloribus quidem, beatae a voluptate ullam culpa pariatur fuga ut. Placeat, possimus pariatur sapiente iste eos rem voluptas inventore dignissimos unde totam rerum recusandae explicabo quae repudiandae nihil. Ex nesciunt incidunt voluptatem doloribus atque et praesentium neque quidem quaerat voluptas cum eum rerum accusamus ipsum repellat deleniti voluptatibus in, minus eligendi blanditiis velit? Natus, vel aperiam. Reprehenderit blanditiis provident aspernatur nostrum dolore voluptatum accusamus voluptatem numquam quam iure placeat cupiditate nemo qui esse fuga corporis aut recusandae earum, quia dolores expedita. Hic eius consequatur rerum soluta et assumenda mollitia eos, blanditiis accusamus. Optio iste nulla cum odio at sunt, nesciunt numquam impedit alias inventore possimus, facere repudiandae minima quisquam necessitatibus expedita perspiciatis delectus quia tenetur architecto repellat distinctio, explicabo obcaecati? Dolorem nostrum blanditiis, architecto quos omnis doloribus quidem consequatur assumenda ut nam tenetur quis quasi reprehenderit asperiores animi expedita facere illo harum. Tempore quibusdam voluptates cupiditate, magnam adipisci iusto aut voluptatum neque dolores natus impedit, illo excepturi a. Nam dolore deleniti quos cupiditate sunt tenetur explicabo necessitatibus maxime beatae totam! Nobis incidunt aliquid mollitia quos quisquam vel voluptatum est, quidem sint ratione repellendus maiores saepe suscipit eaque odio impedit eius accusamus commodi porro iste. Similique impedit dolor placeat recusandae, doloremque eaque corporis cumque facilis. Voluptates odit, nisi reprehenderit blanditiis maiores consequuntur doloribus repellat, eum ipsum harum itaque, perspiciatis consequatur nulla quidem quia! Magni, culpa repudiandae praesentium delectus ad esse architecto minus laboriosam odio optio consequatur consectetur quo. Reprehenderit nihil officiis incidunt voluptatem sed temporibus itaque magnam libero perferendis amet laborum aspernatur quisquam voluptas nemo voluptates eos accusantium, mollitia, repellendus accusamus dolorem molestiae maiores est! Quam deleniti adipisci debitis tempora minus, dignissimos fugit ducimus! Mollitia, soluta expedita sapiente amet dignissimos asperiores! Totam corrupti recusandae nemo ea numquam, officia pariatur, aspernatur corporis culpa officiis eveniet labore ipsam, facere ut. Nesciunt culpa architecto iusto, atque corrupti excepturi perspiciatis ipsa provident, quas cumque ipsum aliquid iste aspernatur sunt labore ullam repellat. Animi blanditiis, quidem, quibusdam ipsam aspernatur quia suscipit dolore illo atque sequi ex aperiam magnam deserunt laudantium numquam reiciendis inventore! Dignissimos quam ex quos itaque rerum sint doloremque animi sunt atque provident amet ullam numquam, fugit modi mollitia enim pariatur nobis. Rem hic ipsum corporis voluptatibus rerum maiores cum enim reiciendis fugit repellat quos omnis sequi eveniet repudiandae similique pariatur libero minima possimus autem, voluptatem aspernatur facere? Eaque ea dolorem at nostrum quae blanditiis quo, ipsa, vel mollitia esse repudiandae.</p>

                </div>
            </div>)}

            {/* show information div ended */}

        </div>
        </>
    )
    
}