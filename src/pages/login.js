import React, { useState } from "react";
import "../assets/css/login.css";
import { FaUser, FaLock, FaBuilding, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function LoginForm({ onLogin }) {
  const navigate = useNavigate();

  const [role, setRole] = useState("ADMIN");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // simulasi login
    setTimeout(() => {
      setLoading(false);
      if (username === "admin" && password === "123") {
        alert("Login berhasil!");
        if (onLogin) onLogin();
        navigate("/dashboard"); // ✅ langsung pindah ke dashboard
      } else {
        setError("Username atau password salah!");
      }
    }, 1000);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Dashboard Kelurahan Peleloan</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FaBuilding className="input-icon" />
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="ADMIN">ADMIN</option>
              <option value="LURAH">LURAH</option>
              <option value="PETUGAS">PETUGAS</option>
            </select>
          </div>

          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="text"
              placeholder="USERNAME"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="PASSWORD"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="toggle-password"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {error && <p className="error-text">{error}</p>}

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Loading..." : "LOGIN"}
          </button>

          {/* ✅ PERBAIKAN BAGIAN WARNING */}
          <div className="forgot">
            <button
              type="button"
              className="forgot-link"
              onClick={() => alert("Fitur lupa password belum aktif.")}
            >
              Forgot password?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
