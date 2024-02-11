import { AuthForm } from "../components/AuthForm/AuthForm";

export const Login = () => {
  return <AuthForm name="Log in" auth="login" isLogin={true} />;
};
