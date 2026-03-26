import { createContext, useContext } from "react";
export const AuthContext = createContext({});

export const useData = () => useContext(AuthContext);
