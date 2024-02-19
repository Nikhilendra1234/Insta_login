import Input from "../../elements/input"
import Button from "../../elements/button"
import './signup.css'
// import { useState } from "react"
function Signup(){



    return(
        <div className="signup" >
        <Input placeholder="fullname" />
        <Input placeholder="phone number,username or email" />
        <Input placeholder="password" />
        <Button text="sign in"/>
        </div>
    )
}
export default Signup