import React, { useState } from "react";

export default function LoginForm() {
  // Step 1: Create state variables for username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Step 2: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (username === "admin" && password === "1234") {
      setMessage("✅ Login Successful!");
    } else {
      setMessage("❌ Invalid Credentials. Try again.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>React Login Form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
}

// Inline CSS styling
const styles = {
  container: {
    maxWidth: "350px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  heading: {
    color: "#333",
    marginBottom: "15px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    borderRadius: "5px",
  },
  message: {
    marginTop: "15px",
    fontWeight: "bold",
  },
};
