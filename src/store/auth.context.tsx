import { ReactNode, createContext } from "react";
import { isValidToken } from "../helper-functions/isValidToken";

interface IAuthContext {
  isLoggedIn: () => { isValid: boolean; expTime: number };
}

export const AuthContext = createContext<IAuthContext>({
  isLoggedIn: () => ({ isValid: false, expTime: 0 }),
});
export interface IReactChildren {
  children: ReactNode;
}
export const AuthContextProvider: React.FC<IReactChildren> = ({ children }) => {
  const isLoggedIn = () => {
    const token = checkStorage();
    if (token !== "" || undefined) {
      const { isValid, expaireTime } = isValidToken(token);

      return { isValid: isValid, expTime: expaireTime };
    }
    return { isValid: false, expTime: 0 };
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
