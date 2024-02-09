import { useState } from "react";
import { EmailValidator } from "./AuthForm.static";

export const useAuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmial] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  // const onSubmit = () => {
  //     if (isValidEmail && isValidPassword) {

  //     }
  // }

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const emailString = event.target.value;
    console.log(isValidEmail);

    if (EmailValidator.test(emailString)) setIsValidEmial(true);
    else setIsValidEmial(false);

    setEmail(emailString);
  };

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const passwordString = event.target.value;

    if (passwordString.trim().length > 3) setIsValidPassword(true);
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
  };
};
