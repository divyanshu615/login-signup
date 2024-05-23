import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempErrors = {};

    if (!username) {
      tempErrors.username = "Username is required";
    }

    if (!password) {
      tempErrors.password = "Password is required";
    }

    setErrors(tempErrors);

    if (Object.keys(tempErrors).length === 0) {
      // Handle login logic(was'nt mentioned in the assignment mail)
      console.log("Login successful");
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100">
      <div className="container-custom p-4 p-sm-5 rounded bg-light shadow">
        <div className="header-custom text-center mb-4">
          <h2>Login</h2>
          <p>Sign in to continue</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <InputField
              label="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              error={errors.username}
            />
          </div>
          <div className="mb-3">
            <InputField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={errors.password}
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-custom mt-3 w-25">
              Login
            </button>
          </div>
        </form>
        <p className="mt-3 text-center">
          Don't have an Account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
