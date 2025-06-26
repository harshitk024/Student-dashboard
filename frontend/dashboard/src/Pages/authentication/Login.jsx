import LoginBox from "../../components/auth/LoginBox";
import SignUp from "../../components/auth/Signup";
import Header from "../../components/ui/Header";
import { useState } from "react";

const Login = ({login, user}) => {


  const [isLogin, setIsLogin] = useState(true);

  const [signupInput, setSignupInput] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const [loginInput, setLoginInput] = useState({
    username: "",
    password: "",
  });

  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      {isLogin ? (
        <LoginBox
          toggleLogin={toggleLogin}
          loginInput = {loginInput}
          setLoginInput={setLoginInput}
          login={login}
        />
      ) : (
        <SignUp 
          toggleLogin={toggleLogin}
          signupInput = {signupInput}
          setSignupInput = {setSignupInput}
          login = {login}
         />
      )}
    </div>
  );
};

export default Login;
