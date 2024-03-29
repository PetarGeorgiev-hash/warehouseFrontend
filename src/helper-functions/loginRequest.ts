import { baseUrl } from "../assets/routs";

interface ILoginFormObject {
  email: string;
  password: string;
  authType: "login" | "signup";
}

export const loginRequest = async (formObj: ILoginFormObject) => {
  const { email, password } = formObj;
  try {
    const response = await fetch(baseUrl + "auth/" + formObj.authType, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("auth fail");
    }
    const result = await response.json();
    return result;
  } catch (e) {
    console.log(e);
  }
};
