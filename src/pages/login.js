import React, { useState } from "react";
import { Shield, User, Lock, AlertCircle, Eye, EyeOff } from "lucide-react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Simulasi login - ganti dengan loginWithRealtimeUsers di kode asli
    setTimeout(() => {
      if (username === "demo" && password === "demo123") {
        alert("✅ Login berhasil!");
        setLoading(false);
      } else {
        setError("Username atau password salah");
        setLoading(false);
      }
    }, 1500);
  };

  return (
    <div style={styles.loginPage}>
      <div style={styles.bgCircle1}></div>
      <div style={styles.bgCircle2}></div>
      
      <div style={styles.loginContainer}>
        <div style={styles.logoSection}>
          <div style={styles.logoCircle}>
            <Shield size={40} color="#1b4cfb" strokeWidth={2.5} />
          </div>
          <h2 style={styles.title}>Masuk ke Akun Anda</h2>
          <p style={styles.subtitle}>
            Selamat datang kembali di E-Aduan Masyarakat Indonesia
          </p>
        </div>

        <div style={styles.formContainer}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Username</label>
            <div style={styles.inputWrapper}>
              <User size={20} color="#6b7280" style={styles.inputIcon} />
              <input
                type="text"
                placeholder="Masukkan username Anda"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={styles.input}
                onFocus={(e) => e.target.style.borderColor = "#1b4cfb"}
                onBlur={(e) => e.target.style.borderColor = "rgba(211, 217, 243, 0.8)"}
              />
            </div>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <div style={styles.inputWrapper}>
              <Lock size={20} color="#6b7280" style={styles.inputIcon} />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Masukkan password Anda"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
                onFocus={(e) => e.target.style.borderColor = "#1b4cfb"}
                onBlur={(e) => e.target.style.borderColor = "rgba(211, 217, 243, 0.8)"}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={styles.eyeButton}
                onMouseEnter={(e) => e.target.style.opacity = "1"}
                onMouseLeave={(e) => e.target.style.opacity = "0.7"}
              >
                {showPassword ? (
                  <EyeOff size={20} color="#6b7280" />
                ) : (
                  <Eye size={20} color="#6b7280" />
                )}
              </button>
            </div>
          </div>

          <button
            onClick={handleLogin}
            disabled={loading}
            style={{
              ...styles.loginBtn,
              ...(loading ? styles.loginBtnDisabled : {}),
            }}
            onMouseEnter={(e) => {
              if (!loading) {
                e.target.style.background = "linear-gradient(135deg, #0036d3, #5a3dff)";
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 10px 30px rgba(27, 76, 251, 0.4)";
              }
            }}
            onMouseLeave={(e) => {
              if (!loading) {
                e.target.style.background = "linear-gradient(135deg, #1b4cfb, #6a5bff)";
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 6px 20px rgba(27, 76, 251, 0.3)";
              }
            }}
          >
            {loading ? (
              <span style={styles.loadingText}>
                <span style={styles.spinner}></span>
                Memeriksa...
              </span>
            ) : (
              "Masuk"
            )}
          </button>

          {error && (
            <div style={styles.errorBox}>
              <AlertCircle size={18} color="#e53935" />
              <span style={styles.errorText}>{error}</span>
            </div>
          )}

          <div style={styles.extraLinks}>
            <a 
              href="#" 
              style={styles.forgotLink}
              onMouseEnter={(e) => e.target.style.textDecoration = "underline"}
              onMouseLeave={(e) => e.target.style.textDecoration = "none"}
            >
              Lupa password?
            </a>
          </div>
        </div>

        <div style={styles.footer}>
          <p style={styles.footerText}>
            Belum punya akun?{" "}
            <a 
              href="#" 
              style={styles.registerLink}
              onMouseEnter={(e) => e.target.style.textDecoration = "underline"}
              onMouseLeave={(e) => e.target.style.textDecoration = "none"}
            >
              Daftar sekarang
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  loginPage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "radial-gradient(circle at top left, #dfe8ff, #e8f0ff 30%, #cdd9ff 100%)",
    fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    padding: "20px",
    position: "relative",
    overflow: "hidden",
  },
  bgCircle1: {
    position: "absolute",
    top: "-200px",
    left: "-200px",
    width: "600px",
    height: "600px",
    background: "radial-gradient(circle, rgba(27, 76, 251, 0.2), transparent 70%)",
    filter: "blur(80px)",
    pointerEvents: "none",
  },
  bgCircle2: {
    position: "absolute",
    bottom: "-150px",
    right: "-150px",
    width: "500px",
    height: "500px",
    background: "radial-gradient(circle, rgba(166, 77, 255, 0.15), transparent 70%)",
    filter: "blur(90px)",
    pointerEvents: "none",
  },
  loginContainer: {
    position: "relative",
    background: "rgba(255, 255, 255, 0.4)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    borderRadius: "25px",
    border: "1px solid rgba(255, 255, 255, 0.5)",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
    padding: "45px 40px",
    width: "100%",
    maxWidth: "440px",
    zIndex: 2,
    animation: "fadeInUp 0.8s ease forwards",
  },
  logoSection: {
    textAlign: "center",
    marginBottom: "35px",
  },
  logoCircle: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, rgba(27, 76, 251, 0.1), rgba(106, 91, 255, 0.15))",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 20px",
    border: "2px solid rgba(27, 76, 251, 0.2)",
    boxShadow: "0 8px 24px rgba(27, 76, 251, 0.15)",
  },
  title: {
    color: "#1b4cfb",
    margin: "0 0 8px 0",
    fontSize: "1.85rem",
    fontWeight: "700",
    textShadow: "0 2px 4px rgba(27, 76, 251, 0.1)",
  },
  subtitle: {
    color: "#555",
    fontSize: "0.95rem",
    margin: 0,
    lineHeight: "1.5",
  },
  formContainer: {
    width: "100%",
  },
  inputGroup: {
    marginBottom: "22px",
    textAlign: "left",
  },
  label: {
    display: "block",
    fontWeight: "600",
    color: "#2e2e2e",
    marginBottom: "8px",
    fontSize: "0.95rem",
  },
  inputWrapper: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  inputIcon: {
    position: "absolute",
    left: "14px",
    pointerEvents: "none",
    zIndex: 1,
  },
  input: {
    width: "100%",
    padding: "13px 14px 13px 44px",
    borderRadius: "12px",
    border: "1.5px solid rgba(211, 217, 243, 0.8)",
    outline: "none",
    fontSize: "0.95rem",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    transition: "all 0.3s ease",
    fontFamily: "inherit",
    boxSizing: "border-box",
  },
  eyeButton: {
    position: "absolute",
    right: "12px",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "opacity 0.2s ease",
    opacity: 0.7,
  },
  loginBtn: {
    width: "100%",
    background: "linear-gradient(135deg, #1b4cfb, #6a5bff)",
    color: "#fff",
    border: "none",
    padding: "14px 0",
    borderRadius: "12px",
    fontWeight: "600",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 6px 20px rgba(27, 76, 251, 0.3)",
    marginTop: "10px",
  },
  loginBtnDisabled: {
    background: "#aab8f6",
    cursor: "not-allowed",
    boxShadow: "none",
  },
  loadingText: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
  },
  spinner: {
    width: "16px",
    height: "16px",
    border: "2px solid rgba(255, 255, 255, 0.3)",
    borderTop: "2px solid #fff",
    borderRadius: "50%",
    animation: "spin 0.8s linear infinite",
    display: "inline-block",
  },
  errorBox: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    backgroundColor: "rgba(229, 57, 53, 0.1)",
    border: "1px solid rgba(229, 57, 53, 0.3)",
    borderRadius: "10px",
    padding: "12px 14px",
    marginTop: "16px",
  },
  errorText: {
    color: "#e53935",
    fontSize: "0.9rem",
    fontWeight: "500",
  },
  extraLinks: {
    marginTop: "20px",
    textAlign: "center",
  },
  forgotLink: {
    color: "#1b4cfb",
    textDecoration: "none",
    fontSize: "0.9rem",
    fontWeight: "500",
    transition: "all 0.3s ease",
  },
  footer: {
    marginTop: "30px",
    paddingTop: "25px",
    borderTop: "1px solid rgba(211, 217, 243, 0.5)",
    textAlign: "center",
  },
  footerText: {
    color: "#666",
    fontSize: "0.9rem",
    margin: 0,
  },
  registerLink: {
    color: "#1b4cfb",
    fontWeight: "600",
    textDecoration: "none",
    transition: "all 0.3s ease",
  },
};

const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
document.head.appendChild(styleSheet);

export default Login;