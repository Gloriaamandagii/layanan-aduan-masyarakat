import React, { useState } from "react";
import "../assets/css/signup.css";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Password dan konfirmasi tidak cocok!");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Pendaftaran berhasil! Silakan login.");
      navigate("/"); // kembali ke halaman login
    }, 1000);
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Buat Akun Baru</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="nama"
              placeholder="Nama Lengkap"
              value={formData.nama}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Konfirmasi Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          {error && <p className="error-text">{error}</p>}

          <button type="submit" className="signup-btn" disabled={loading}>
            {loading ? "Mendaftar..." : "SIGN UP"}
          </button>

          <div className="login-link">
            <p>
              Sudah punya akun?{" "}
              <span onClick={() => navigate("/")} className="link">
                Login di sini
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
