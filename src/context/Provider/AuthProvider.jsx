import { useEffect, useState } from "react";
import { AuthContext } from "../Context";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../../fireBase/fireBase.config";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiousUrl = useAxiosSecure()

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
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            if(currentUser?.email){
                const user ={
                    email: currentUser.email
                }
                axiousUrl.post(`/jwt`, user)
                .then(res=>{
                    console.log(res.data)
                })
            }
            setLoading(false)
        })

        return ()=>{
            unSubscribe()
        }
    },[axiousUrl])



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