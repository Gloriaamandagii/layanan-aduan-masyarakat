import React, { useState } from "react";
import "../assets/css/login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login:", { username, password });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Masuk ke Akun Anda</h2>
        <p className="subtitle">
          Selamat datang kembali di E-Aduan Masyarakat Indonesia
        </p>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="Masukkan username Anda"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Masukkan password Anda"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Masuk
          </button>

          <div className="extra-links">
            <a href="/forgot-password" className="forgot-link">
              Lupa password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
