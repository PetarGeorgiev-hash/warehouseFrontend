export const isValidToken = (token: string) => {
  return isTokenExpired(token);
};

function isTokenExpired(token: string) {
  const decoded = decodeJwt(token);
  const currentTime = Math.floor(Date.now() / 1000); // Convert to seconds

  return decoded.exp < currentTime;
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
