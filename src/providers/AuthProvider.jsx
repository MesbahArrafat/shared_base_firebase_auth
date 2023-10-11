import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import PropTypes from 'prop-types'; 
import auth from "../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }  
    const signInUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const signInWithGoogle = ()=>{
        return signInWithPopup(auth,googleProvider);
    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    //observe auth state change
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser =>{
            setUser(currentUser);
            console.log("observing Current User :",currentUser);
            setLoading(false);
        }));
        return () =>{
            unSubscribe();
        }
    },[])
    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logOut,
        signInWithGoogle
    };
    return(
        <AuthContext.Provider value={authInfo}>
          {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;
AuthProvider.propTypes  = {
    children: PropTypes.node
}