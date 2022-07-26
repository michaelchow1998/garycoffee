import jwt_decode from "jwt-decode";
const readToken = (): any => {
  const access_token = localStorage.getItem("access_token");
  if (access_token != null) {
    try {
      const decoded_access_token = jwt_decode(access_token);
      console.log(decoded_access_token);

      return decoded_access_token;
    } catch (e) {
      return null;
    }
  }
};

export default readToken;
