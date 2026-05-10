import { useContext } from "react"
import { usecontexts } from "./App"

export default function Textcomponent(){
   const Textdata = useContext(usecontexts)
    return(
        <>
        <h1>{Textdata.values}</h1>
        <p>hello</p>
        </>
    )
}