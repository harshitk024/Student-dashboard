import Login from "./Pages/authentication/Login";
import {BrowserRouter as Router, Routes, Route,useNavigate,Navigate} from "react-router-dom"
import Home from "./Pages/Home"
import { useState,useEffect } from "react";

const App = () => {

  const [user,setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  console.log("User state:", user);

  useEffect(() => {

    const savedUser = window.localStorage.getItem("user")

    if(savedUser) {
      setUser(savedUser);
      console.log("Saved user from localStorage:", savedUser);
    }
    setIsLoading(false);
    
  },[])

  const login = (user) => {
    setUser(user);
    window.localStorage.setItem("user", JSON.stringify(user));
    console.log("User logged in:", user);
  }

  if(isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <div>
      <Router>
        <Routes>
          <Route path = "/" element = {user ? <Home /> : <Navigate replace to = "/login" />} />
          <Route path = "/login" element={<Login login = {login} user= {user} />} />
        </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;