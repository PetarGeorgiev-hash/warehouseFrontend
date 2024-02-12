import { useContext } from "react";
import { ClientContext } from "../../store/clients.context";

export const useClients = () => {
  const ctx = useContext(ClientContext);
  const { clients } = ctx;

  return { clients };
};
