import React, { useState } from "react";
import { KeyRound, ArrowLeft, CheckCircle, AlertCircle, Send, Phone } from "lucide-react";

function ForgotPassword() {
  const [nomorHp, setNomorHp] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Validasi nomor HP sederhana (dimulai dengan 0, total 9-16 digit)
    const phoneRegex = /^0\d{8,15}$/;
    if (!phoneRegex.test(nomorHp)) {
      setError("Format nomor HP tidak valid! Contoh: 08123456789");
      setLoading(false);
      return;
    }

    // Simulasi pengiriman kode reset via SMS
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      // Di kode asli, panggil fungsi untuk mengirim SMS/OTP
    }, 2000);
  };

  const handleBackToLogin = () => {
    // arahkan ke halaman login
    window.location.href = "/login";
  };

  return (
    <div style={styles.forgotPasswordPage}>
      <div style={styles.bgCircle1}></div>
      <div style={styles.bgCircle2}></div>
      
      <div style={styles.forgotPasswordContainer}>
        {!success ? (
          <>
            {/* Header Section */}
            <div style={styles.logoSection}>
              <div style={styles.logoCircle}>
                <KeyRound size={38} color="#1b4cfb" strokeWidth={2.5} />
              </div>
              <h2 style={styles.title}>Lupa Password?</h2>
              <p style={styles.subtitle}>
                Jangan khawatir! Masukkan nomor HP Anda dan kami akan mengirimkan instruksi atau kode untuk mereset password Anda.
              </p>
            </div>

            {/* Form Section */}
            <div style={styles.formContainer}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Nomor HP</label>
                <div style={styles.inputWrapper}>
                  <Phone size={20} color="#6b7280" style={styles.inputIcon} />
                  <input
                    type="tel"
                    placeholder="0812xxxxxxx"
                    value={nomorHp}
                    onChange={(e) => setNomorHp(e.target.value)}
                    required
                    style={styles.input}
                    onFocus={(e) => e.target.style.borderColor = "#1b4cfb"}
                    onBlur={(e) => e.target.style.borderColor = "rgba(211, 217, 243, 0.8)"}
                  />
                </div>
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
                disabled={loading || !nomorHp}
                style={{
                  ...styles.submitBtn,
                  ...(loading || !nomorHp ? styles.submitBtnDisabled : {}),
                }}
                onMouseEnter={(e) => {
                  if (!loading && nomorHp) {
                    e.target.style.background = "linear-gradient(135deg, #0036d3, #5a3dff)";
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow = "0 10px 30px rgba(27, 76, 251, 0.4)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!loading && nomorHp) {
                    e.target.style.background = "linear-gradient(135deg, #1b4cfb, #6a5bff)";
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "0 6px 20px rgba(27, 76, 251, 0.3)";
                  }
                }}
              >
                {loading ? (
                  <span style={styles.loadingText}>
                    <span style={styles.spinner}></span>
                    Mengirim...
                  </span>
                ) : (
                  <span style={styles.buttonContent}>
                    <Send size={18} />
                    Kirim Kode Reset via Whatsapp
                  </span>
                )}
              </button>

              {/* Info Box */}
              <div style={styles.infoBox}>
                <p style={styles.infoText}>
                  � Kode reset akan dikirim ke nomor HP Anda melalui Whatsapp. Kode berlaku sementara.
                </p>
              </div>
            </div>

            {/* Back to Login */}
            <div style={styles.footer}>
              <button
                onClick={handleBackToLogin}
                style={styles.backButton}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "rgba(27, 76, 251, 0.08)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                }}
              >
                <ArrowLeft size={18} />
                Kembali ke Login
              </button>
            </div>
          </>
        ) : (
          // Success State
            <div style={styles.successContainer}>
            <div style={styles.successCircle}>
              <CheckCircle size={60} color="#10b981" strokeWidth={2} />
            </div>
            <h2 style={styles.successTitle}>Pesan Terkirim!</h2>
            <p style={styles.successText}>
              Kami telah mengirimkan kode reset ke:
            </p>
            <p style={styles.contactHighlight}>{nomorHp}</p>
            <p style={styles.successInstruction}>
              Silakan cek WhatsApp di nomor tersebut. Gunakan kode untuk mereset password Anda.
            </p>

            <div style={styles.successActions}>
              <button
                onClick={handleBackToLogin}
                style={styles.backToLoginBtn}
                onMouseEnter={(e) => {
                  e.target.style.background = "linear-gradient(135deg, #0036d3, #5a3dff)";
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 10px 30px rgba(27, 76, 251, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "linear-gradient(135deg, #1b4cfb, #6a5bff)";
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 6px 20px rgba(27, 76, 251, 0.3)";
                }}
              >
                Kembali ke Login
              </button>

              <button
                onClick={() => {
                  setSuccess(false);
                  setNomorHp("");
                }}
                style={styles.resendBtn}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "rgba(27, 76, 251, 0.08)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                }}
              >
                Kirim Ulang SMS
              </button>
            </div>

            <div style={styles.supportBox}>
              <p style={styles.supportText}>
                Tidak menerima pesan? Pastikan nomor HP Anda benar!!!
                <button
                  type="button"
                  style={{
                    ...styles.supportLink,
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    font: "inherit",
                  }}
                >
                  dukungan kami
                </button>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  forgotPasswordPage: {
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
  forgotPasswordContainer: {
    position: "relative",
    background: "rgba(255, 255, 255, 0.4)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    borderRadius: "25px",
    border: "1px solid rgba(255, 255, 255, 0.5)",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
    padding: "45px 40px",
    width: "100%",
    maxWidth: "480px",
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
    margin: "0 0 12px 0",
    fontSize: "1.85rem",
    fontWeight: "700",
    textShadow: "0 2px 4px rgba(27, 76, 251, 0.1)",
  },
  subtitle: {
    color: "#555",
    fontSize: "0.95rem",
    margin: 0,
    lineHeight: "1.6",
    maxWidth: "400px",
    marginLeft: "auto",
    marginRight: "auto",
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
  errorBox: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    backgroundColor: "rgba(229, 57, 53, 0.1)",
    border: "1px solid rgba(229, 57, 53, 0.3)",
    borderRadius: "10px",
    padding: "12px 14px",
    marginBottom: "16px",
  },
  errorText: {
    color: "#e53935",
    fontSize: "0.9rem",
    fontWeight: "500",
  },
  submitBtn: {
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
  submitBtnDisabled: {
    background: "#aab8f6",
    cursor: "not-allowed",
    boxShadow: "none",
  },
  buttonContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
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
  infoBox: {
    marginTop: "20px",
    padding: "14px",
    backgroundColor: "rgba(59, 130, 246, 0.08)",
    border: "1px solid rgba(59, 130, 246, 0.2)",
    borderRadius: "10px",
  },
  infoText: {
    color: "#3b82f6",
    fontSize: "0.85rem",
    margin: 0,
    lineHeight: "1.5",
  },
  footer: {
    marginTop: "30px",
    paddingTop: "25px",
    borderTop: "1px solid rgba(211, 217, 243, 0.5)",
    textAlign: "center",
  },
  backButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    background: "transparent",
    border: "none",
    color: "#1b4cfb",
    fontWeight: "600",
    fontSize: "0.95rem",
    cursor: "pointer",
    padding: "10px 20px",
    borderRadius: "10px",
    transition: "all 0.3s ease",
    margin: "0 auto",
    fontFamily: "inherit",
  },
  // Success State Styles
  successContainer: {
    textAlign: "center",
    animation: "fadeInUp 0.8s ease forwards",
  },
  successCircle: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.15))",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 25px",
    border: "2px solid rgba(16, 185, 129, 0.3)",
    boxShadow: "0 8px 24px rgba(16, 185, 129, 0.2)",
  },
  successTitle: {
    color: "#10b981",
    margin: "0 0 15px 0",
    fontSize: "1.9rem",
    fontWeight: "700",
  },
  successText: {
    color: "#555",
    fontSize: "0.95rem",
    margin: "0 0 8px 0",
  },
  contactHighlight: {
    color: "#1b4cfb",
    fontSize: "1.05rem",
    fontWeight: "600",
    margin: "0 0 20px 0",
  },
  successInstruction: {
    color: "#666",
    fontSize: "0.9rem",
    lineHeight: "1.6",
    margin: "0 0 30px 0",
    maxWidth: "380px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  successActions: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginBottom: "25px",
  },
  backToLoginBtn: {
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
  },
  resendBtn: {
    width: "100%",
    background: "transparent",
    color: "#1b4cfb",
    border: "2px solid rgba(27, 76, 251, 0.3)",
    padding: "12px 0",
    borderRadius: "12px",
    fontWeight: "600",
    fontSize: "0.95rem",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  supportBox: {
    paddingTop: "20px",
    borderTop: "1px solid rgba(211, 217, 243, 0.5)",
  },
  supportText: {
    color: "#666",
    fontSize: "0.85rem",
    margin: 0,
  },
  supportLink: {
    color: "#1b4cfb",
    fontWeight: "600",
    textDecoration: "none",
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

export default ForgotPassword;