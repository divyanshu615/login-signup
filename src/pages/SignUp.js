import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import "bootstrap/dist/css/bootstrap.min.css";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    const re = /^\+?[1-9]\d{1,14}$/;
    return re.test(phone);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempErrors = {};

    if (!/^[A-Za-z]+$/.test(formData.name)) {
      tempErrors.name = "Name :: alphabets";
    }

    if (!/^[A-Za-z0-9!@#$%^&*]+$/.test(formData.username)) {
      tempErrors.username = "Username :: alphanumeric";
    }

    if (formData.password !== formData.confirmPassword) {
      tempErrors.confirmPassword = "Passwords do not match";
    }

    if (formData.password === formData.username) {
      tempErrors.password = "Password cannot be the same as username";
    }

    if (!validateEmail(formData.email)) {
      tempErrors.email = "Invalid email address";
    }

    if (!validatePhone(formData.phone)) {
      tempErrors.phone = "Invalid phone number";
    }

    setErrors(tempErrors);

    if (Object.keys(tempErrors).length === 0) {
      // Handle sign-up logic here(was'nt mentioned in the assignment mail)
      console.log("Sign-up successful");
      navigate("/");
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100">
      <div className="container-custom p-4 p-sm-5 rounded bg-light shadow">
        <div className="header-custom text-center mb-4">
          <h2>Create New Account</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-12 col-md-6 mb-3">
              <InputField
                label="Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
              />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <InputField
                label="Username"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                error={errors.username}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 mb-3">
              <InputField
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <InputField
                label="Phone No."
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 mb-3">
              <InputField
                label="New Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
              />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <InputField
                label="Confirm New Password"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                error={errors.confirmPassword}
              />
            </div>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-custom mt-3 w-25">
              Sign Up
            </button>
          </div>
        </form>
        <p className="mt-3 text-center">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
