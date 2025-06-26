import axios from "axios";

const baseURL = "http://localhost:3001/api/users";


const createUser = async (userData) => {

   try{ 

   const result = await axios.post(`${baseURL}/create`,userData)

    return result.data;

   } catch (error) {

     console.log(error.response.data);
     
   }

}

const loginUser = async (userData) => {

    try{
        const result = await axios.post(`${baseURL}/login`, userData);
        console.log("Login successful:", result.data);
        return result.data;
    } catch (error) {
        console.log(error.response.data);
    }
}

const googleLogin = async(codeResponse) => {

    console.log("Login beginning with code:", codeResponse);

    try{
        
        console.log("Google code received:", codeResponse.code);
        const result = await axios.post(`${baseURL}/google`,{code: codeResponse.code});
        console.log("Google login successful:", result.data);
        return result.data

    } catch (error) {
        console.log("Google login error:", error.response);
    }
}

export {createUser,loginUser,googleLogin};