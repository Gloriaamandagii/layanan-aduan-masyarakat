import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Send,
  Info,
  Menu,
  X,
  User,
  Mail,
  MessageSquare,
  FileText,
  Search,
  Shield,
  TrendingUp,
  Lock,
  CheckCircle,
  Clock,
  Bot,
} from "lucide-react";

function Dashboard() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      type: "bot",
      text: "Halo! Saya Asisten E-Aduan. Ada yang bisa saya bantu?",
    },
  ]);
  const [chatInput, setChatInput] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChatSend = () => {
    if (chatInput.trim()) {
      setChatMessages([
        ...chatMessages,
        { type: "user", text: chatInput },
        {
          type: "bot",
          text: "Terima kasih atas pertanyaan Anda. Tim kami akan segera membantu!",
        },
      ]);
      setChatInput("");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("✅ Aduan Anda telah dikirim! Kami akan segera menindaklanjuti.");
  };

  return (
    <div style={styles.container}>
      {/* Navbar */}
      <nav
        style={{ ...styles.navbar, ...(scrolled ? styles.navbarScrolled : {}) }}
      >
        <div style={styles.navContent}>
          <div style={styles.logo}>
            <Shield size={28} color="#1b4cfb" strokeWidth={2.5} />
            <span style={styles.logoText}>E-Aduan Indonesia</span>
          </div>

          {/* Desktop Menu */}
          <ul style={styles.navLinks}>
            <li style={styles.navItem}>
              <a href="#home" style={styles.navLink}>
                <Home size={18} />
                Beranda
              </a>
            </li>
            <li style={styles.navItem}>
              <a href="#aduan" style={styles.navLink}>
                <Send size={18} />
                Kirim Aduan
              </a>
            </li>
            <li style={styles.navItem}>
              <a href="#info" style={styles.navLink}>
                <Info size={18} />
                Informasi
              </a>
            </li>
          </ul>

          {/* Auth Buttons */}
          <div style={styles.authButtons}>
            <Link to="/login" style={styles.loginBtn}>
              Masuk
            </Link>
            <Link to="/signup" style={styles.signupBtn}>
              Daftar
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            style={styles.mobileMenuBtn}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div style={styles.mobileMenu}>
            <a href="#home" style={styles.mobileMenuItem}>
              <Home size={18} /> Beranda
            </a>
            <a href="#aduan" style={styles.mobileMenuItem}>
              <Send size={18} /> Kirim Aduan
            </a>
            <a href="#info" style={styles.mobileMenuItem}>
              <Info size={18} /> Informasi
            </a>
            <div style={styles.mobileAuthBtns}>
              <Link to="/login" style={styles.mobileLoginBtn}>
                Masuk
              </Link>
              <Link to="/signup" style={styles.mobileSignupBtn}>
                Daftar
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <div style={styles.heroTextContainer}>
            <h1 style={styles.heroTitle}>
              Suara Anda, Langkah Awal{" "}
              <span style={styles.heroTitleAccent}>Perubahan</span>
            </h1>
            <p style={styles.heroSubtitle}>
              Laporkan keluhan, aspirasi, atau saran Anda untuk membangun
              lingkungan yang lebih baik bagi masyarakat Indonesia.
            </p>
            <a href="#aduan" style={styles.heroButton}>
              <Send size={20} />
              Buat Aduan Sekarang
            </a>

            {/* Stats Cards */}
            <div style={styles.statsContainer}>
              <div style={styles.statCard}>
                <FileText size={24} color="#1b4cfb" />
                <div>
                  <div style={styles.statNumber}>1,248+</div>
                  <div style={styles.statLabel}>Aduan Terkirim</div>
                </div>
              </div>
              <div style={styles.statCard}>
                <CheckCircle size={24} color="#10b981" />
                <div>
                  <div style={styles.statNumber}>987+</div>
                  <div style={styles.statLabel}>Telah Ditindaklanjuti</div>
                </div>
              </div>
              <div style={styles.statCard}>
                <TrendingUp size={24} color="#f59e0b" />
                <div>
                  <div style={styles.statNumber}>94%</div>
                  <div style={styles.statLabel}>Tingkat Respons</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Aduan */}
      <section id="aduan" style={styles.formSection}>
        <div style={styles.formContainer}>
          <div style={styles.formHeader}>
            <div style={styles.formIconCircle}>
              <Send size={32} color="#1b4cfb" strokeWidth={2.5} />
            </div>
            <h2 style={styles.formTitle}>Kirim Aduan</h2>
            <p style={styles.formSubtitle}>
              Lengkapi formulir di bawah ini dengan data yang benar dan lengkap.
            </p>
          </div>

          <div style={styles.formBox}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>
                <User size={18} style={styles.labelIcon} />
                Nama Lengkap
              </label>
              <input
                type="text"
                placeholder="Masukkan nama lengkap Anda"
                required
                style={styles.input}
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>
                <Mail size={18} style={styles.labelIcon} />
                Alamat Email
              </label>
              <input
                type="email"
                placeholder="nama@email.com"
                required
                style={styles.input}
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>
                <MessageSquare size={18} style={styles.labelIcon} />
                Kategori Aduan
              </label>
              <select required style={styles.select}>
                <option value="">Pilih Kategori Aduan</option>
                <option value="infrastruktur">🏗️ Infrastruktur</option>
                <option value="kebersihan">♻️ Kebersihan</option>
                <option value="pelayanan">🏛️ Pelayanan Publik</option>
                <option value="keamanan">🛡️ Keamanan & Ketertiban</option>
                <option value="lainnya">📋 Lainnya</option>
              </select>
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>
                <FileText size={18} style={styles.labelIcon} />
                Detail Aduan
              </label>
              <textarea
                placeholder="Tuliskan aduan Anda secara detail di sini..."
                required
                style={styles.textarea}
                rows="6"
              ></textarea>
            </div>

            <button
              type="submit"
              style={styles.submitButton}
              onClick={handleFormSubmit}
              onMouseEnter={(e) => {
                e.target.style.background =
                  "linear-gradient(135deg, #0036d3, #5a3dff)";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background =
                  "linear-gradient(135deg, #1b4cfb, #6a5bff)";
                e.target.style.transform = "translateY(0)";
              }}
            >
              <Send size={20} />
              Kirim Aduan Sekarang
            </button>
          </div>
        </div>
      </section>

      {/* Informasi Section */}
      <section id="info" style={styles.infoSection}>
        <div style={styles.infoHeader}>
          <h2 style={styles.infoTitle}>Informasi Umum</h2>
          <p style={styles.infoDesc}>
            E-Aduan Masyarakat Indonesia membantu masyarakat menyampaikan
            aspirasi dan pengaduan secara mudah, cepat, serta transparan.
          </p>
        </div>

        <div style={styles.infoGrid}>
          <div style={styles.infoCard}>
            <div style={styles.infoCardIcon}>
              <Search size={32} color="#1b4cfb" strokeWidth={2} />
            </div>
            <h3 style={styles.infoCardTitle}>Proses Pengaduan</h3>
            <p style={styles.infoCardText}>
              Setiap laporan yang dikirim akan diverifikasi dan diteruskan
              kepada instansi terkait sesuai kategori aduan.
            </p>
          </div>

          <div style={styles.infoCard}>
            <div style={styles.infoCardIcon}>
              <Clock size={32} color="#10b981" strokeWidth={2} />
            </div>
            <h3 style={styles.infoCardTitle}>Pemantauan Aduan</h3>
            <p style={styles.infoCardText}>
              Anda dapat memantau status aduan secara real-time untuk melihat
              perkembangan penanganan laporan Anda.
            </p>
          </div>

          <div style={styles.infoCard}>
            <div style={styles.infoCardIcon}>
              <Lock size={32} color="#f59e0b" strokeWidth={2} />
            </div>
            <h3 style={styles.infoCardTitle}>Keamanan Data</h3>
            <p style={styles.infoCardText}>
              Data pelapor dijaga kerahasiaannya dan digunakan hanya untuk
              keperluan verifikasi serta tindak lanjut laporan.
            </p>
          </div>
        </div>
      </section>

      {/* Chatbot */}
      <div style={styles.chatbotWrapper}>
        {isChatOpen && (
          <div style={styles.chatbotBox}>
            <div style={styles.chatbotHeader}>
              <div style={styles.chatbotHeaderContent}>
                <Bot size={20} color="#fff" />
                <span>Asisten E-Aduan</span>
              </div>
              <button
                style={styles.chatCloseBtn}
                onClick={() => setIsChatOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            <div style={styles.chatbotBody}>
              {chatMessages.map((msg, idx) => (
                <div
                  key={idx}
                  style={{
                    ...styles.chatMessage,
                    ...(msg.type === "user"
                      ? styles.chatMessageUser
                      : styles.chatMessageBot),
                  }}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            <div style={styles.chatbotInput}>
              <input
                type="text"
                placeholder="Tulis pesan..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleChatSend()}
                style={styles.chatInput}
              />
              <button onClick={handleChatSend} style={styles.chatSendBtn}>
                <Send size={18} />
              </button>
            </div>
          </div>
        )}

        {!isChatOpen && (
          <button
            style={styles.chatbotFab}
            onClick={() => setIsChatOpen(true)}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.1)";
              e.target.style.boxShadow = "0 12px 40px rgba(27, 76, 251, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 8px 30px rgba(27, 76, 251, 0.3)";
            }}
          >
            <Bot size={28} />
          </button>
        )}
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerLogo}>
            <Shield size={24} color="#1b4cfb" strokeWidth={2.5} />
            <span>E-Aduan Indonesia</span>
          </div>
          <p style={styles.footerText}>
            © 2025 E-Aduan Masyarakat Indonesia — Semua Hak Dilindungi
          </p>
        </div>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f8fafc",
    fontFamily:
      "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  // Navbar Styles
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(27, 76, 251, 0.1)",
    padding: "16px 0",
    zIndex: 1000,
    transition: "all 0.3s ease",
  },
  navbarScrolled: {
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
    padding: "12px 0",
  },
  navContent: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "1.2rem",
    fontWeight: "700",
    color: "#1b4cfb",
  },
  logoText: {
    display: "none",
  },
  navLinks: {
    display: "flex",
    listStyle: "none",
    gap: "30px",
    margin: 0,
    padding: 0,
  },
  navItem: {
    listStyle: "none",
  },
  navLink: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    textDecoration: "none",
    color: "#475569",
    fontWeight: "500",
    fontSize: "0.95rem",
    transition: "color 0.3s ease",
  },
  authButtons: {
    display: "flex",
    gap: "12px",
  },
  loginBtn: {
    padding: "8px 20px",
    borderRadius: "8px",
    textDecoration: "none",
    color: "#1b4cfb",
    fontWeight: "600",
    fontSize: "0.9rem",
    border: "2px solid #1b4cfb",
    transition: "all 0.3s ease",
  },
  signupBtn: {
    padding: "8px 20px",
    borderRadius: "8px",
    textDecoration: "none",
    color: "#fff",
    fontWeight: "600",
    fontSize: "0.9rem",
    background: "linear-gradient(135deg, #1b4cfb, #6a5bff)",
    transition: "all 0.3s ease",
  },
  mobileMenuBtn: {
    display: "none",
    background: "none",
    border: "none",
    color: "#1b4cfb",
    cursor: "pointer",
    padding: "8px",
  },
  mobileMenu: {
    display: "none",
  },
  // Hero Styles
  hero: {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    background:
      "radial-gradient(circle at top left, #dfe8ff, #e8f0ff 30%, #cdd9ff 100%)",
    paddingTop: "80px",
    overflow: "hidden",
  },
  heroOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "radial-gradient(circle at 30% 20%, rgba(27, 76, 251, 0.1), transparent 60%)",
    pointerEvents: "none",
  },
  heroContent: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "60px 20px",
    position: "relative",
    zIndex: 1,
  },
  heroTextContainer: {
    maxWidth: "700px",
  },
  heroTitle: {
    fontSize: "3.5rem",
    fontWeight: "800",
    color: "#0f172a",
    marginBottom: "20px",
    lineHeight: "1.2",
  },
  heroTitleAccent: {
    background: "linear-gradient(135deg, #1b4cfb, #6a5bff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  heroSubtitle: {
    fontSize: "1.15rem",
    color: "#475569",
    lineHeight: "1.7",
    marginBottom: "35px",
  },
  heroButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    padding: "16px 32px",
    fontSize: "1.05rem",
    fontWeight: "600",
    color: "#fff",
    background: "linear-gradient(135deg, #1b4cfb, #6a5bff)",
    borderRadius: "12px",
    textDecoration: "none",
    boxShadow: "0 8px 25px rgba(27, 76, 251, 0.3)",
    transition: "all 0.3s ease",
  },
  statsContainer: {
    display: "flex",
    gap: "20px",
    marginTop: "60px",
    flexWrap: "wrap",
  },
  statCard: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    padding: "20px 25px",
    background: "rgba(255, 255, 255, 0.7)",
    backdropFilter: "blur(10px)",
    borderRadius: "15px",
    border: "1px solid rgba(255, 255, 255, 0.5)",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
  },
  statNumber: {
    fontSize: "1.8rem",
    fontWeight: "700",
    color: "#0f172a",
  },
  statLabel: {
    fontSize: "0.85rem",
    color: "#64748b",
  },
  // Form Section
  formSection: {
    padding: "80px 20px",
    background: "#fff",
  },
  formContainer: {
    maxWidth: "700px",
    margin: "0 auto",
  },
  formHeader: {
    textAlign: "center",
    marginBottom: "40px",
  },
  formIconCircle: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    background:
      "linear-gradient(135deg, rgba(27, 76, 251, 0.1), rgba(106, 91, 255, 0.15))",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 20px",
    border: "2px solid rgba(27, 76, 251, 0.2)",
  },
  formTitle: {
    fontSize: "2.2rem",
    fontWeight: "700",
    color: "#1b4cfb",
    marginBottom: "12px",
  },
  formSubtitle: {
    fontSize: "1rem",
    color: "#64748b",
  },
  formBox: {
    background: "rgba(248, 250, 252, 0.8)",
    padding: "40px",
    borderRadius: "20px",
    border: "1px solid rgba(226, 232, 240, 0.8)",
  },
  inputGroup: {
    marginBottom: "24px",
  },
  label: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontWeight: "600",
    color: "#334155",
    marginBottom: "8px",
    fontSize: "0.95rem",
  },
  labelIcon: {
    color: "#64748b",
  },
  input: {
    width: "100%",
    padding: "14px 16px",
    fontSize: "0.95rem",
    border: "2px solid #e2e8f0",
    borderRadius: "10px",
    outline: "none",
    transition: "all 0.3s ease",
    fontFamily: "inherit",
    backgroundColor: "#fff",
    boxSizing: "border-box",
  },
  select: {
    width: "100%",
    padding: "14px 16px",
    fontSize: "0.95rem",
    border: "2px solid #e2e8f0",
    borderRadius: "10px",
    outline: "none",
    transition: "all 0.3s ease",
    fontFamily: "inherit",
    backgroundColor: "#fff",
    cursor: "pointer",
    boxSizing: "border-box",
  },
  textarea: {
    width: "100%",
    padding: "14px 16px",
    fontSize: "0.95rem",
    border: "2px solid #e2e8f0",
    borderRadius: "10px",
    outline: "none",
    transition: "all 0.3s ease",
    fontFamily: "inherit",
    backgroundColor: "#fff",
    resize: "vertical",
    boxSizing: "border-box",
  },
  submitButton: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    padding: "16px 0",
    fontSize: "1.05rem",
    fontWeight: "600",
    color: "#fff",
    background: "linear-gradient(135deg, #1b4cfb, #6a5bff)",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 6px 20px rgba(27, 76, 251, 0.3)",
  },
  // Info Section
  infoSection: {
    padding: "80px 20px",
    background: "#f8fafc",
  },
  infoHeader: {
    textAlign: "center",
    maxWidth: "700px",
    margin: "0 auto 50px",
  },
  infoTitle: {
    fontSize: "2.2rem",
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: "15px",
  },
  infoDesc: {
    fontSize: "1rem",
    color: "#64748b",
    lineHeight: "1.7",
  },
  infoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  infoCard: {
    background: "#fff",
    padding: "35px 30px",
    borderRadius: "20px",
    border: "1px solid #e2e8f0",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
    transition: "all 0.3s ease",
  },
  infoCardIcon: {
    width: "60px",
    height: "60px",
    borderRadius: "15px",
    background: "rgba(27, 76, 251, 0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
  },
  infoCardTitle: {
    fontSize: "1.3rem",
    fontWeight: "600",
    color: "#0f172a",
    marginBottom: "12px",
  },
  infoCardText: {
    fontSize: "0.95rem",
    color: "#64748b",
    lineHeight: "1.6",
  },
  // Chatbot
  chatbotWrapper: {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    zIndex: 1000,
  },
  chatbotFab: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #1b4cfb, #6a5bff)",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 8px 30px rgba(27, 76, 251, 0.3)",
    transition: "all 0.3s ease",
  },
  chatbotBox: {
    width: "350px",
    height: "500px",
    background: "#fff",
    borderRadius: "20px",
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.15)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  chatbotHeader: {
    padding: "20px",
    background: "linear-gradient(135deg, #1b4cfb, #6a5bff)",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  chatbotHeaderContent: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontWeight: "600",
  },
  chatCloseBtn: {
    background: "rgba(255, 255, 255, 0.2)",
    border: "none",
    color: "#fff",
    borderRadius: "50%",
    width: "32px",
    height: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  chatbotBody: {
    flex: 1,
    padding: "20px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  chatMessage: {
    padding: "12px 16px",
    borderRadius: "12px",
    maxWidth: "80%",
    fontSize: "0.9rem",
    lineHeight: "1.5",
  },
  chatMessageBot: {
    backgroundColor: "#f1f5f9",
    color: "#334155",
    alignSelf: "flex-start",
  },
  chatMessageUser: {
    backgroundColor: "#1b4cfb",
    color: "#fff",
    alignSelf: "flex-end",
  },
  chatbotInput: {
    padding: "15px",
    borderTop: "1px solid #e2e8f0",
    display: "flex",
    gap: "10px",
  },
  chatInput: {
    flex: 1,
    padding: "10px 14px",
    border: "1px solid #e2e8f0",
    borderRadius: "10px",
    outline: "none",
    fontSize: "0.9rem",
    fontFamily: "inherit",
  },
  chatSendBtn: {
    padding: "10px 16px",
    background: "linear-gradient(135deg, #1b4cfb, #6a5bff)",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  // Footer
  footer: {
    background: "#0f172a",
    padding: "40px 20px",
    color: "#fff",
  },
  footerContent: {
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "center",
  },
  footerLogo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    fontSize: "1.2rem",
    fontWeight: "700",
    marginBottom: "15px",
  },
  footerText: {
    fontSize: "0.9rem",
    color: "#94a3b8",
    margin: 0,
  },
};

// Add responsive styles and animations
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
  
  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }
  
  /* Navbar link hover */
  a:hover {
    color: #1b4cfb !important;
  }
  
  /* Input focus states */
  input:focus,
  select:focus,
  textarea:focus {
    border-color: #1b4cfb !important;
    box-shadow: 0 0 0 3px rgba(27, 76, 251, 0.1) !important;
  }
  
  /* Info card hover */
  .info-card-hover:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1) !important;
  }
  
  /* Hero button hover */
  .hero-btn-hover:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(27, 76, 251, 0.4) !important;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    /* Show mobile menu button */
    .mobile-menu-btn {
      display: block !important;
    }
    
    /* Hide desktop nav links */
    .nav-links-desktop {
      display: none !important;
    }
    
    /* Hide desktop auth buttons */
    .auth-buttons-desktop {
      display: none !important;
    }
    
    /* Show mobile menu when open */
    .mobile-menu-open {
      display: flex !important;
      flex-direction: column;
      gap: 15px;
      padding: 20px;
      background: #fff;
      border-top: 1px solid rgba(27, 76, 251, 0.1);
    }
    
    /* Adjust hero title size */
    .hero-title-mobile {
      font-size: 2.2rem !important;
    }
    
    /* Stack stats vertically */
    .stats-container-mobile {
      flex-direction: column;
    }
    
    /* Full width stat cards */
    .stat-card-mobile {
      width: 100%;
    }
    
    /* Adjust form padding */
    .form-box-mobile {
      padding: 25px !important;
    }
    
    /* Logo text visible on mobile */
    .logo-text-mobile {
      display: inline !important;
    }
    
    /* Chatbot adjustment */
    .chatbot-box-mobile {
      width: calc(100vw - 40px) !important;
      max-width: 350px;
    }
  }
  
  @media (max-width: 480px) {
    .hero-title-mobile {
      font-size: 1.8rem !important;
    }
    
    .form-title-mobile {
      font-size: 1.6rem !important;
    }
    
    .info-title-mobile {
      font-size: 1.6rem !important;
    }
  }
  
  /* Animations */
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
  
  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }
  
  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 10px;
  }
  
  ::-webkit-scrollbar-track {
    background: #f1f5f9;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 5px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
  }
`;
document.head.appendChild(styleSheet);

export default Dashboard;
