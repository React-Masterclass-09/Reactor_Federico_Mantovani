import supabase from "../database/supabase";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider({ children }) {

    const [user, setUser] = useState(null);

    const getUser = async () => {
        const { data: {session}, error } = await supabase.auth.getSession();
        if (session){
            const {user} = session;
            setUser(()=> user ?? null);
        }

    }

    useEffect(
        ()=>{
            getUser();
        }, []
    )

    const singOut = async () => {
        await supabase.auth.signOut();
        setUser(null);
    }

    return (

        <UserContext.Provider value={{user, singOut}}>
            {children}
        </UserContext.Provider>
    )
}