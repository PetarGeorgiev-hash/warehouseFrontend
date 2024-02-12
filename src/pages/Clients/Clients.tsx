import { BodyWrapper } from "../../styles/common.style";
import { useClients } from "./Clients.logic";

export const Clients = () => {
  const { clients } = useClients();
  return (
    <BodyWrapper>
      {clients.map((client) => {
        <ClientCard key={client.id} />;
      })}
    </BodyWrapper>
  );
};
