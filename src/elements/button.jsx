import { useState } from 'react'
import './elements.css'
function Button({text}){
    const[lonsin,setLonSin]=useState(true);
    const handleOnClick=()=>{
        setLonSin(!lonsin);
        if(lonsin){
            alert("Logged in succesfully");
        }
        else{
            alert("user successfully registered");
        }
    }
    return (
        <>
        <button className='btn' onClick={handleOnClick}>{text}</button>
        </>
    )
}
export default Button