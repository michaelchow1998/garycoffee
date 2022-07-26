import { useState, useEffect } from "react";
import readToken from "./api/token/readToken";

import LoginPage from "../components/LoginPage";
const Home = () => {
  const token = readToken();
  const [login, setLogin] = useState(false);
  useEffect(() => {
    if (token) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);

  return (
    <div>
      <LoginPage />
    </div>
  );
};

export default Home;
