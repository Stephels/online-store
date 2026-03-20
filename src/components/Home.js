import React, { useState } from "react";

// Home page component for the online store
export default function Home() {
  // 'loggedIn' to track whether the user is logged in or not.
  // 'username' to hold the user's input for the username.
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  // Function to handle user login
  const handleLogin = () => {
    // Check if the username is not empty before logging in
    if (username.trim() !== "") {
      setLoggedIn(true); // Set the user as logged in
    } else {
      alert("Please enter a username to log in."); // Show an alert if username is empty
    }
  };

  // Function to handle user logout
  const handleLogout = () => {
    setLoggedIn(false); // Set the user as logged out
    setUsername(""); // Clear the username
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body text-center">
          <h1 className="card-title">Welcome to our Online Store!</h1>

          {loggedIn ? (
            <div>
              <h2>Hello, {username}! You are logged in.</h2>
              {/* Logout button */}
              <button className="btn btn-primary mt-3" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <div>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username:
                </label>
                <input
                  type="text"
                  id="username"
                  className="form-control"
                  value={username}
                  // Update 'username' state whenever the input changes
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              {/* Login button */}
              <button className="btn btn-primary" onClick={handleLogin}>
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
