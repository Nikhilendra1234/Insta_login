import { useState } from 'react'
import './elements.css'

function Input({placeholder}){
    const [details,setDetails]=useState("");

    return(
        <>
                <input type="text" 
                placeholder={placeholder} 
                className="input" 
                value={details}
                onChange={(e)=>setDetails(e.target.value)}
                />

        </>
    )
}

export default Input