import { useContext } from "react";
import { AuthContext } from "../store/auth.context";
import { useNavigate } from "react-router-dom";
import { routes } from "../assets/routs";

type PrivateRouteProps = {
  component: React.ReactNode;
};

export const PrivateRoute = ({ component }: PrivateRouteProps) => {
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();

  if (!ctx.isLoggedIn()) {
    navigate(routes.login);
  }

  return <>{component}</>;
};
