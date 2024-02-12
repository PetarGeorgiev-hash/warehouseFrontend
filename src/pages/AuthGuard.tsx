import { Outlet } from "react-router-dom";
import { Navigation } from "../components/navigation/Navigation";
import { PrivateRoute } from "./PrivateRoute";

export const AuthGuard = () => {
  return (
    <div>
      <Navigation />
      <PrivateRoute component={<Outlet />} />
    </div>
  );
};
