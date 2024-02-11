import { useContext } from "react";
import { AuthContext } from "../store/auth.context";
import { Navigate, Outlet } from "react-router-dom";
import { routes } from "../assets/routs";
import { Navigation } from "../components/navigation/Navigation";
import { PrivateRoute } from "./PrivateRoute";

export const AuthGuard = () => {
  const ctx = useContext(AuthContext);

  if (!ctx.isLoggedIn()) Navigate({ to: routes.login });
  console.log(ctx.isLoggedIn());

  return (
    <div>
      <Navigation />
      <PrivateRoute component={<Outlet />} />
    </div>
  );
};
