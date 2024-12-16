import { useEffect, useState } from "react";
import { AuthContext } from "../Context";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../../fireBase/fireBase.config";
import axios from "axios";


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const registerUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser =(name, imgPath)=>{
        return updateProfile(auth.currentUser, {
            displayName:name,
            photoURL: imgPath  
        })
    }

    const logInUser =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser =()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            if(currentUser?.email){
                const user ={
                    email: currentUser.email
                }
                axios.post(`http://localhost:4000/jwt`, user,{
                    withCredentials:true
                })
                .then(res=>{
                    console.log(res.data)
                    setLoading(false)
                })
            }
            else{
                axios.post('http://localhost:4000/logout',{},{
                    withCredentials:true
                })
                .then(res=>{
                    console.log(res.data)
                    setLoading(false)
                })
            }
            
        })

        return ()=>{
            unSubscribe()
        }
    },[])



    const authInfo = {
        user,
        loading,
        registerUser,
        updateUser,
        logInUser,
        signOutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;