import { ReactNode, createContext, useEffect, useState } from "react";
import { isValidToken } from "../hooks/isValidToken";

const AuthContext = createContext({
  isLoggedIn: false,
});
interface IReactChildren {
  children: ReactNode;
}
export const AuthContextProvider: React.FC<IReactChildren> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token && isValidToken(token)) setIsLoggedIn(true);
  }, [token]);

  useEffect(() => {}, []);
  return (
    <AuthContext.Provider value={{ isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
