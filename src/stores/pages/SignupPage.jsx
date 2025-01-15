import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserCredentials } from "../../redux/userSlice";

const SignupPage = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      // Dispatch credentials to Redux store
      dispatch(setUserCredentials({ email, password }));
      alert("Sign-up successful!");
    } else {
      alert("Passwords do not match!");
    }
  };
  return (
    <div class="container">
      <div class="signup-container">
        <h3 class="text-center mb-4">Create Account</h3>
        <form onSubmit={handleSignUp}>
          <div class="mb-3">
            <label for="fullName" class="form-label">
              Full Name
            </label>
            <input
              type="text"
              class="form-control"
              id="fullName"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div class="mb-3">
            <label for="confirmPassword" class="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              class="form-control"
              id="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" class="btn btn-primary w-100">
            Sign Up
          </button>
          <div class="text-center mt-3">
            <p>
              Already have an account? <Link to="/signin">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
