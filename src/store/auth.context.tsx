import { ReactNode, createContext } from "react";
import { isValidToken } from "../helper-functions/isValidToken";

interface IAuthContext {
  isLoggedIn: () => boolean;
}

export const AuthContext = createContext<IAuthContext>({
  isLoggedIn: () => false,
});
interface IReactChildren {
  children: ReactNode;
}
export const AuthContextProvider: React.FC<IReactChildren> = ({ children }) => {
  const isLoggedIn = () => {
    const token = checkStorage();
    if (token !== "" || undefined) {
      return isValidToken(token);
    }
    return false;
  };

  const checkStorage = () => {
    const storegeToken = localStorage.getItem("token") || "";
    return storegeToken;
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
