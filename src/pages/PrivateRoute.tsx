import { useContext, useEffect } from "react";
import { AuthContext } from "../store/auth.context";
import { useNavigate } from "react-router-dom";
import { routes } from "../assets/routs";

type PrivateRouteProps = {
  component: React.ReactNode;
};

export const PrivateRoute = ({ component }: PrivateRouteProps) => {
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();
  const { isValid, expTime } = ctx.isLoggedIn();

  if (!isValid) {
    navigate(routes.login);
  }

  useEffect(() => {
    setTimeout(() => {
      console.log("hi");

      localStorage.removeItem("token");
      navigate(routes.login);
    }, expTime * 1000);
  });

  return <>{component}</>;
};
