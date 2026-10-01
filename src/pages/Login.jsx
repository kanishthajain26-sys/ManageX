import { useState } from "react";

import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(event) {
    event.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");

    navigate("/dashboard");
  }

  return (
    <div className="login-page">
      <form className="login-box" onSubmit={handleLogin}>
        <h1>Welcome Back</h1>

        <p>Login to your dashboard</p>

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(event) =>
            setEmail(event.target.value)
          }
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(event) =>
            setPassword(event.target.value)
          }
        />

        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;