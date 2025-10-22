import React, { useState } from "react";
import { UserPlus, User, Mail, Lock, Eye, EyeOff, AlertCircle, CheckCircle, Phone } from "lucide-react";

function Signup() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    username: "",
    nomorHp: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "password") {
      calculatePasswordStrength(value);
    }
  };

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
    if (password.match(/[0-9]/)) strength++;
    if (password.match(/[^a-zA-Z0-9]/)) strength++;
    setPasswordStrength(strength);
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength === 0) return "#e5e7eb";
    if (passwordStrength === 1) return "#ef4444";
    if (passwordStrength === 2) return "#f59e0b";
    if (passwordStrength === 3) return "#3b82f6";
    return "#10b981";
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength === 0) return "";
    if (passwordStrength === 1) return "Lemah";
    if (passwordStrength === 2) return "Sedang";
    if (passwordStrength === 3) return "Kuat";
    return "Sangat Kuat";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Password dan konfirmasi tidak cocok!");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password minimal 6 karakter!");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("✅ Pendaftaran berhasil! Silakan login.");
      // navigate("/") - uncomment di kode asli
    }, 1500);
  };

  return (
    <div style={styles.signupPage}>
      <div style={styles.bgCircle1}></div>
      <div style={styles.bgCircle2}></div>
      
      <div style={styles.signupContainer}>
        <div style={styles.logoSection}>
          <div style={styles.logoCircle}>
            <UserPlus size={38} color="#1b4cfb" strokeWidth={2.5} />
          </div>
          <h2 style={styles.title}>Buat Akun Baru</h2>
          <p style={styles.subtitle}>
            Bergabunglah dengan E-Aduan Masyarakat Indonesia
          </p>
        </div>

        <div style={styles.formContainer}>
          {/* Nama Lengkap */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Nama Lengkap</label>
            <div style={styles.inputWrapper}>
              <User size={20} color="#6b7280" style={styles.inputIcon} />
              <input
                type="text"
                name="nama"
                placeholder="Masukkan nama lengkap Anda"
                value={formData.nama}
                onChange={handleChange}
                required
                style={styles.input}
                onFocus={(e) => e.target.style.borderColor = "#1b4cfb"}
                onBlur={(e) => e.target.style.borderColor = "rgba(211, 217, 243, 0.8)"}
              />
            </div>
          </div>

          {/* Email */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <div style={styles.inputWrapper}>
              <Mail size={20} color="#6b7280" style={styles.inputIcon} />
              <input
                type="email"
                name="email"
                placeholder="nama@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                style={styles.input}
                onFocus={(e) => e.target.style.borderColor = "#1b4cfb"}
                onBlur={(e) => e.target.style.borderColor = "rgba(211, 217, 243, 0.8)"}
              />
            </div>
          </div>


          {/* Nomor HP */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Nomor HP</label>
            <div style={styles.inputWrapper}>
              <Phone size={20} color="#6b7280" style={styles.inputIcon} />
              <input
                type="tel"
                name="nomorHp"
                placeholder="628xxxxxxx"
                value={formData.nomorHp}
                onChange={handleChange}
                required
                style={styles.input}
                onFocus={(e) => e.target.style.borderColor = "#1b4cfb"}
                onBlur={(e) => e.target.style.borderColor = "rgba(211, 217, 243, 0.8)"}
              />
            </div>
          </div>

          {/* Password */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <div style={styles.inputWrapper}>
              <Lock size={20} color="#6b7280" style={styles.inputIcon} />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Minimal 6 karakter"
                value={formData.password}
                onChange={handleChange}
                required
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
            {formData.password && (
              <div style={styles.passwordStrength}>
                <div style={styles.strengthBar}>
                  <div
                    style={{
                      ...styles.strengthFill,
                      width: `${(passwordStrength / 4) * 100}%`,
                      backgroundColor: getPasswordStrengthColor(),
                    }}
                  ></div>
                </div>
                {passwordStrength > 0 && (
                  <span style={{...styles.strengthText, color: getPasswordStrengthColor()}}>
                    {getPasswordStrengthText()}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Konfirmasi Password</label>
            <div style={styles.inputWrapper}>
              <Lock size={20} color="#6b7280" style={styles.inputIcon} />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Ketik ulang password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                style={styles.input}
                onFocus={(e) => e.target.style.borderColor = "#1b4cfb"}
                onBlur={(e) => e.target.style.borderColor = "rgba(211, 217, 243, 0.8)"}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                style={styles.eyeButton}
                onMouseEnter={(e) => e.target.style.opacity = "1"}
                onMouseLeave={(e) => e.target.style.opacity = "0.7"}
              >
                {showConfirmPassword ? (
                  <EyeOff size={20} color="#6b7280" />
                ) : (
                  <Eye size={20} color="#6b7280" />
                )}
              </button>
            </div>
            {formData.confirmPassword && formData.password === formData.confirmPassword && (
              <div style={styles.matchIndicator}>
                <CheckCircle size={16} color="#10b981" />
                <span style={{color: "#10b981", fontSize: "0.85rem", marginLeft: "6px"}}>
                  Password cocok
                </span>
              </div>
            )}
          </div>

          {/* Error Message */}
          {error && (
            <div style={styles.errorBox}>
              <AlertCircle size={18} color="#e53935" />
              <span style={styles.errorText}>{error}</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{
              ...styles.signupBtn,
              ...(loading ? styles.signupBtnDisabled : {}),
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
                Mendaftar...
              </span>
            ) : (
              "Daftar Sekarang"
            )}
          </button>
        </div>

        {/* Footer */}
        <div style={styles.footer}>
          <p style={styles.footerText}>
            Sudah punya akun?{" "}
            <button
              type="button"
              onClick={() => (window.location.href = "/login")}
              style={{
                ...styles.loginLink,
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
                font: "inherit",
              }}
              onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
              onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
            >
              Masuk di sini
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  signupPage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "radial-gradient(circle at top left, #dfe8ff, #e8f0ff 30%, #cdd9ff 100%)",
    fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    padding: "40px 20px",
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
  signupContainer: {
    position: "relative",
    background: "rgba(255, 255, 255, 0.4)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    borderRadius: "25px",
    border: "1px solid rgba(255, 255, 255, 0.5)",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
    padding: "40px 40px 35px",
    width: "100%",
    maxWidth: "480px",
    zIndex: 2,
    animation: "fadeInUp 0.8s ease forwards",
  },
  logoSection: {
    textAlign: "center",
    marginBottom: "32px",
  },
  logoCircle: {
    width: "75px",
    height: "75px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, rgba(27, 76, 251, 0.1), rgba(106, 91, 255, 0.15))",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 18px",
    border: "2px solid rgba(27, 76, 251, 0.2)",
    boxShadow: "0 8px 24px rgba(27, 76, 251, 0.15)",
  },
  title: {
    color: "#1b4cfb",
    margin: "0 0 8px 0",
    fontSize: "1.75rem",
    fontWeight: "700",
    textShadow: "0 2px 4px rgba(27, 76, 251, 0.1)",
  },
  subtitle: {
    color: "#555",
    fontSize: "0.9rem",
    margin: 0,
    lineHeight: "1.4",
  },
  formContainer: {
    width: "100%",
  },
  inputGroup: {
    marginBottom: "18px",
    textAlign: "left",
  },
  label: {
    display: "block",
    fontWeight: "600",
    color: "#2e2e2e",
    marginBottom: "7px",
    fontSize: "0.9rem",
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
    padding: "12px 14px 12px 44px",
    borderRadius: "12px",
    border: "1.5px solid rgba(211, 217, 243, 0.8)",
    outline: "none",
    fontSize: "0.92rem",
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
  passwordStrength: {
    marginTop: "8px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  strengthBar: {
    flex: 1,
    height: "4px",
    backgroundColor: "#e5e7eb",
    borderRadius: "2px",
    overflow: "hidden",
  },
  strengthFill: {
    height: "100%",
    transition: "all 0.3s ease",
    borderRadius: "2px",
  },
  strengthText: {
    fontSize: "0.8rem",
    fontWeight: "600",
    minWidth: "80px",
  },
  matchIndicator: {
    display: "flex",
    alignItems: "center",
    marginTop: "6px",
  },
  signupBtn: {
    width: "100%",
    background: "linear-gradient(135deg, #1b4cfb, #6a5bff)",
    color: "#fff",
    border: "none",
    padding: "13px 0",
    borderRadius: "12px",
    fontWeight: "600",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 6px 20px rgba(27, 76, 251, 0.3)",
    marginTop: "10px",
  },
  signupBtnDisabled: {
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
    marginBottom: "12px",
  },
  errorText: {
    color: "#e53935",
    fontSize: "0.88rem",
    fontWeight: "500",
  },
  footer: {
    marginTop: "25px",
    paddingTop: "22px",
    borderTop: "1px solid rgba(211, 217, 243, 0.5)",
    textAlign: "center",
  },
  footerText: {
    color: "#666",
    fontSize: "0.9rem",
    margin: 0,
  },
  loginLink: {
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

export default Signup;