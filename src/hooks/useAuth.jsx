import { useContext } from "react";
import { AuthContext } from "../context/Context";


const useAuth = () => {
   const context =  useContext(AuthContext)
   console.log(context)
   return context 
};

export default useAuth;