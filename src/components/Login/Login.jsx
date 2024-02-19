import Button from "../../elements/button"
import Input from "../../elements/input"
import './login.css'
function Login(){
    return(
        <div className="login">
            <Input placeholder="phone number , username or email"/>
            <Input placeholder="password"/>
            <Button text="sign in" />
        </div>
    )
}
export default Login