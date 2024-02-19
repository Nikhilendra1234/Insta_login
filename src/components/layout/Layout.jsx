import { useEffect, useState } from "react"
import Login from "../Login/Login.jsx"
import Signup from "../Signup/Signup.jsx"
import './layout.css'
function Layout(){
    const[lonsin,setLonSin]=useState(true);

    const handleOnClick=()=>{
        console.log("clicked");
        setLonSin(!lonsin);

    }

    useEffect(()=>{},[lonsin]);

    return (
        <div className="layout">
            <div className="heading"><h2>instagram</h2></div>
            {
            lonsin?
                <Login  handleOnclick={handleOnClick}/>
                :
                <Signup handleOnclick={handleOnClick}/>
            }

            <div className="que">
                <p>{`Don't have accout ?`}<span onClick={handleOnClick}>sing up</span></p>
            </div>
        </div>
    )
}

export default Layout