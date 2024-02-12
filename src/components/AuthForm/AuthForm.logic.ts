import { useState } from "react";
import { EmailValidator, IAuthSubmit } from "./AuthForm.static";
import { loginRequest } from "../../helper-functions/loginRequest";
import { useNavigate } from "react-router-dom";
import { routes } from "../../assets/routs";

export const useAuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmial] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const navigate = useNavigate();

  const onSubmit = async ({ event, authType }: IAuthSubmit) => {
    event.preventDefault();
    if (isValidEmail && isValidPassword) {
      const { access_token } = await loginRequest({
        email: email,
        password: password,
        authType: authType,
      });
      if (access_token !== undefined) {
        localStorage.setItem("token", access_token);
        navigate(routes.home);
      }
    }
  };

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const emailString = event.target.value;

    if (EmailValidator.test(emailString)) setIsValidEmial(true);
    else setIsValidEmial(false);

    setEmail(emailString);
  };

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const passwordString = event.target.value;

    if (passwordString.trim().length > 2) setIsValidPassword(true);
    else setIsValidPassword(false);

    setPassword(passwordString);
  };

  return {
    email,
    isValidEmail,
    onEmailChange,
    password,
    isValidPassword,
    onPasswordChange,
    onSubmit,
  };
};
