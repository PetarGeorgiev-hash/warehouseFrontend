import { createContext, useEffect, useState } from "react";
import { IReactChildren } from "./auth.context";
import { baseUrl } from "../assets/routs";

export interface IClients {
  id: string;
  name: string;
}

export const ClientContext = createContext({
  clients: [] as IClients[],
  setNewClient: () => {},
});

export const ClientsProvider: React.FC<IReactChildren> = ({ children }) => {
  const [clients, setClients] = useState<IClients[]>([{ id: "", name: "" }]);
  const token = localStorage.getItem("token");
  const isTokenThere = () => {
    const token = localStorage.getItem("token");
    if (token !== "" || token !== undefined) {
      return true;
    }
    return false;
  };

  const fetchClients = () => {
    if (isTokenThere()) {
      fetch(baseUrl + "client", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((resp) => resp.json())
        .then((resutl) => setClients(resutl));
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const setNewClient = () => {};

  return (
    <ClientContext.Provider value={{ clients, setNewClient }}>
      {children}
    </ClientContext.Provider>
  );
};
