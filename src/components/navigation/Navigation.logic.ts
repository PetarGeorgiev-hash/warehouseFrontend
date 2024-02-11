import { useNavigate } from "react-router-dom";
import { routes } from "../../assets/routs";

export const useNavigation = () => {
  const navigate = useNavigate();

  const logOutHandler = () => {
    localStorage.removeItem("token");
    navigate(routes.login);
  };

  return { logOutHandler };
};
