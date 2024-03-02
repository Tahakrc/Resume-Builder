import { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(() => {
        const storedData = localStorage.getItem('userData');
        return storedData ? JSON.parse(storedData) : {};
    });

    const saveUserData = (data) => {
        setUserData((prevData) => ({
            ...prevData,
            ...data
        }));
    };

    useEffect(() => {
        localStorage.setItem('userData', JSON.stringify(userData));
    }, [userData]);

    console.log(userData);
    return (
        <UserContext.Provider value={{ userData, saveUserData }}>
            {children}
        </UserContext.Provider>
    );
};

const useUserData = () => {
    return useContext(UserContext);
};

export { UserProvider, useUserData, UserContext };
