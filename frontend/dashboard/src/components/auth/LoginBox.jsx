import GoogleLogin from "../ui/GoogleLogin";
import Input from "../ui/Input";
import {loginUser} from "../../services/users";
import { useNavigate } from "react-router-dom";
// import { GoogleLogin } from "@react-oauth/google";

const LoginBox = ({toggleLogin,loginInput,setLoginInput,login}) => {

  const navigate = useNavigate();
 
  const handleLogin = async (e) => {

    e.preventDefault();

    console.log(loginInput)

    const result = await loginUser(loginInput);

    console.log("Login result:", result);

    setLoginInput({
      username: "",
      password: ""
    })
    console.log("Login input reset:", loginInput);
    

    if(result){
      login(result);
      navigate("/")
    } else {
      window.alert("Login failed. Please check your credentials and try again.");
    }

  }

  return (
    <div class="flex flex-col items-center justify-center ">
      <div class = " flex flex-col p-5 items-center">
        <div class="flex flex-col items-center justify-center gap-5">
          <div>
            <div className="h-primary">Welcome Back</div>
          </div>
          <GoogleLogin login = {login} />
        </div>
        <div class = "flex items-center justify-center p-8">
            <div class = "text-base opacity-50">or</div>
        </div>
        <form className="flex flex-col gap-2" onSubmit = {handleLogin}>
            <Input placeholder = "Enter email or username" value = {loginInput.username} onChange = {(e) => setLoginInput({...loginInput,username: e.target.value})}/>
            <Input placeholder = "Enter Password" type = "password" value = {loginInput.password} onChange = {(e) => setLoginInput({...loginInput,password: e.target.value})}/>
            <div class = "flex items-center text-sm text-cyan-700 justify-end cursor-pointer hover:underline">
                Forgot Password?
            </div>
            <button type="submit" className="bg-primary-500 mt-4 text-white px-10 py-3 rounded-xl hover:bg-secondary-500">Continue</button>
        </form>
        <div class = "flex flex-col w-50 mt-4  ">
            <div class = "text-sm text-center opacity-50 ">Don’t have an  account? <span class= "hover:underline cursor-pointer" onClick={toggleLogin}>Sign up</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LoginBox;
