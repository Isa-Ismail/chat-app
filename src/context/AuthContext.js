import { createContext } from "react";
import { useEffect, useState } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            console.log(user)
            setCurrentUser(user);
        });
        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider value={{currentUser}}>    
            {children}
        </AuthContext.Provider>    
  );
}