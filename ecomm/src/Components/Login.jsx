import React from "react";
import Header from "./Header";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/add");
    }
  }, []);

  async function login() {
    let items = { email, password };
    let result = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(items),
    });
    result = await result.json();
    if(JSON.stringify(result).indexOf("ERROR") > -1){
      alert(JSON.stringify(result))
    }
    else {
      localStorage.setItem("user-info",JSON.stringify(result))
      navigate("/add")
    }
  }

  return (
    <div>
      <Header />
      <h1>Login Page</h1>
      <div className="col-sm-6 offset-sm-3">
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
        />
        <br />
        <button onClick={login} className="btn btn-primary">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
