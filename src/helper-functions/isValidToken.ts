export const isValidToken = (token: string) => {
  return isTokenExpired(token);
};

function isTokenExpired(token: string) {
  const decoded = decodeJwt(token);
  const currentTime = Math.floor(Date.now() / 1000);

  const obj = {
    isValid: decoded.exp > currentTime,
    expaireTime: decoded.exp - currentTime,
  };
  return obj;
}
function decodeJwt(token: string) {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
      .join("")
  );

  return JSON.parse(jsonPayload);
}
