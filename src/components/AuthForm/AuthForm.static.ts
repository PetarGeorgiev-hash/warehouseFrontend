export interface IAuthForm {
  auth: string;
  isLogin: boolean;
}

export const EmailValidator = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
