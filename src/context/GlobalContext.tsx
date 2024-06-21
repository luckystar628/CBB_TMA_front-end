import React, { createContext, useContext, useState } from "react";

interface GlobalContextType {
    user: { username: string, score: number, id: string, isInvited: boolean };
    setUser: React.Dispatch<React.SetStateAction<{ username: string, score: number, id: string, isInvited: boolean }>>;
}

interface GlobalProvideProps {
    children: React.ReactNode;
}

const GlobalContext = createContext<GlobalContextType | null>(null);

export const GlobalProvider: React.FC<GlobalProvideProps> = ({ children }) => {

    const [user, setUser] = useState({ username: "", score: 0, id: "", isInvited: false });

    return (
        <GlobalContext.Provider value={{ user, setUser }}>
            {children}
        </GlobalContext.Provider>
    );
}

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);

    if (!context) {
        throw new Error("useGlobalContext must be used within a GlobalProvider");
    }

    return context;
}