import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const SigninPage = () => {
  const user = useSelector((state) => state.user); // Get user data from Redux store

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const storedAuthState = localStorage.getItem("isAuthenticated");
    if (storedAuthState === "true") {
      setIsAuthenticated(true);
      navigate("/"); // Redirect to home if already authenticated
    }
  }, [navigate]);
  const handleSignIn = (e) => {
    e.preventDefault();
    // Validate email and password with the data from Redux
    if (email === user.email && password === user.password) {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true"); // Store auth state in localStorage
      navigate("/");
    } else {
      alert("Invalid email or password!");
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated"); // Remove auth state on logout
    setIsAuthenticated(false); // Reset authentication state
  };
  return (
    <div class="container">
      <div class="signin-container">
        <h3 class="text-center mb-4">Sign In</h3>
        <form onSubmit={handleSignIn}>
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
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Signin
          </button>

          <div class="text-center mt-3">
            <a href="#">Forgot password?</a> |{" "}
            <Link to="/signup">Create an account</Link>
          </div>
        </form>
        {isAuthenticated && (
          <div>
            <button
              onClick={handleLogout}
              className="btn btn-danger mt-3 w-100"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SigninPage;
