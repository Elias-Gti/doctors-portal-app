import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile,} from 'firebase/auth';
import apps from '../../firebase/Firebase.config';

export const AuthContext =createContext();

const auth= getAuth(apps)


const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]= useState(true);

    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)

    }

    const loginUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);

    }
    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }

    const updateUser =(userInfo)=>{
        return updateProfile(user,userInfo)
    }
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,currentUser=>{
            console.log('user finding');
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>unsubscribe();
    },[]);


    const authInfo={
        createUser,
        loginUser,
        logOut,
        user,
        loading,
        updateUser
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
        
    );
};

export default AuthProvider;