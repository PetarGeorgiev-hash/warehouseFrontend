import { FormEvent } from "react";

export interface IAuthForm {
  name: string;
  auth: "login" | "signup";
  isLogin: boolean;
}

export interface IAuthSubmit {
  event: FormEvent;
  authType: "login" | "signup";
}

export const EmailValidator = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
