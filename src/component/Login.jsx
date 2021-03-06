
import Input from "./Input";

function Login(probs){

    return(
    <form className="form">
    <Input type="text" placeholder="username"/>
    <Input type="password" placeholder="password"/>
    {!probs.isRegister && <Input type="password" placeholder="confirm password"/> }
    
    <button type="submit">{probs.isRegister ? "Login" : "Register"}</button>
    </form>);
}

export default Login;