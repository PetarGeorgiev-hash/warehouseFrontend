import { NavLink } from "react-router-dom";
import {
  FormWrapper,
  FormComponent,
  FormLabel,
  FormInput,
  FormButton,
  FormP,
} from "../../styles/FormComponent.styles";
import { IAuthForm } from "./AuthForm.static";
import { routes } from "../../assets/routs";
import { useAuthForm } from "./AuthForm.logic";

export const AuthForm = (props: IAuthForm) => {
  const {
    email,
    isValidEmail,
    onEmailChange,
    password,
    isValidPassword,
    onPasswordChange,
    onSubmit,
  } = useAuthForm();

  const authType = props.auth;

  return (
    <FormWrapper>
      <FormComponent onSubmit={(event) => onSubmit({ event, authType })}>
        <FormLabel>Email</FormLabel>
        <FormInput
          name="email"
          type="text"
          placeholder={"example@gmail.com"}
          onChange={onEmailChange}
          className={isValidEmail ? "" : "invalid"}
          value={email}
        />
        {!isValidEmail && <FormP>not correct email</FormP>}
        <FormLabel>Password</FormLabel>
        <FormInput
          className={isValidPassword ? "" : "invalid"}
          name="password"
          type="password"
          onChange={onPasswordChange}
          value={password}
        />
        {!isValidPassword && (
          <FormP>password must be more that 2 characters long</FormP>
        )}
        <FormButton>{props.name}</FormButton>
        {props.isLogin && (
          <label style={{ color: "black" }}>
            If you are a new User{" "}
            <NavLink to={routes.register}>Register</NavLink>
          </label>
        )}
      </FormComponent>
    </FormWrapper>
  );
};
