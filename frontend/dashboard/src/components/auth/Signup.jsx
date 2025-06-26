import GoogleLogin from "../ui/GoogleLogin"
import Input from "../ui/Input";
import {createUser} from "../../services/users";



const SignUp = ({toggleLogin, signupInput,setSignupInput}) => {


  const handleSignup = async (e) => {
    e.preventDefault();

    const result = await createUser(signupInput);

    if (result) {

        window.alert("Signup successful! Please login to continue.");
        toggleLogin();
        setSignupInput({
          name: "",
          username: "",
          email: "",
          password: "",
        });
    }
    else {
      console.error("Signup failed");
    }

  }
  return (
    <div class="flex flex-col items-center justify-center">
      <div class="flex flex-col p-5 items-center">
        <div class="flex flex-col items-center justify-center gap-5">
          <div>
            <div class="text-center w-75 mb-3">
              <div className="h-primary">Welcome to Edash</div>
              <div>Create your account and be academically productive</div>
            </div>
          </div>
          <GoogleLogin />
        </div>
        <div class = "flex items-center justify-center p-8">
            <div class = "text-base opacity-50">or</div>
        </div>
        <form className="flex flex-col gap-2" onSubmit={handleSignup}>
            <Input value = {signupInput.name} placeholder = "Name" type="text" onChange = {(e) => setSignupInput({...signupInput,name: e.target.value}) } />
            <Input value = {signupInput.username} placeholder = "Username" type = "text" onChange = {(e) => setSignupInput({...signupInput,username: e.target.value}) }/>
            <Input value = {signupInput.email} placeholder="Email" type = "email" onChange = {(e) => setSignupInput({...signupInput,email: e.target.value}) }/>
            <Input value = {signupInput.password} placeholder= "Create password"  type = "password" onChange = {(e) => setSignupInput({...signupInput,password: e.target.value}) }/>

            <button type = "submit" className="bg-primary-500 mt-4 text-white px-10 py-3 rounded-xl hover:bg-secondary-500">Continue</button>
        </form>
        <div class = "flex flex-col w-60 my-5  ">
            <div class = "text-sm text-center opacity-50 ">Already have an account? <span class = "hover: underline cursor-pointer" onClick={toggleLogin}>Sign in</span></div>
        </div>
        
      </div>
    </div>
  );
};

export default SignUp;
