import React, { createContext, useContext, useState } from "react";

interface GlobalContextType {
    user: { username: string, score: number, id: string, isInvited: boolean };
    setUser: React.Dispatch<React.SetStateAction<{ username: string, score: number, id: string, isInvited: boolean }>>;
    questionCounter: number;
    setQuestionCounter: React.Dispatch<React.SetStateAction<number>>;  // for updating the question counter state.  This is used for tracking which question the user is on. 0-indexed.  If the user answers all questions, the counter will be set to 1000.  This is a temporary solution until we have a better way to track questions.  A more complex solution might involve using Redux or a similar state management library.  But for the sake
}

interface GlobalProvideProps {
    children: React.ReactNode;
}

const GlobalContext = createContext<GlobalContextType | null>(null);

export const GlobalProvider: React.FC<GlobalProvideProps> = ({ children }) => {

    const [user, setUser] = useState({ username: "", score: 0, id: "", isInvited: false });
    const [questionCounter, setQuestionCounter] = useState<number>(0); 

    return (
        <GlobalContext.Provider value={{ user, questionCounter, setUser, setQuestionCounter }}>
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