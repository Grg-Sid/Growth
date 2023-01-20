import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const nav = useNavigate();
  useEffect(() => {
    let loginKey = localStorage.getItem("loginKey");
    let registerKey = localStorage.getItem("registerKey");
    if (loginKey) {
      localStorage.removeItem("loginKey");
    }
    if (registerKey) {
      localStorage.removeItem("registerKey");
    }
  }, []);

  const login = () => {
    localStorage.setItem("loginKey", "true");
    nav("/login");
  };
  const register = () => {
    localStorage.setItem("registerKey", "true");
    nav("/register");
  };

  return (
    <div>
      Home
      <button onClick={login}>login</button>
      <button onClick={register}>Register</button>
    </div>
  );
};

export default Home;
