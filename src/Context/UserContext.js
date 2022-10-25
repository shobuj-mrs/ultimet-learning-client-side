import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // google log in method
    const loginProvider = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    // log out 
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    // email register sign up  method 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in method
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // github log in method
    const githubLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }

    // user update
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user inside state changed', currentUser);
            setLoading(false);
            setUser(currentUser);
        })

        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loginProvider,
        logOut,
        createUser,
        signIn,
        loading,
        updateUserProfile,
        githubLogin,


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;