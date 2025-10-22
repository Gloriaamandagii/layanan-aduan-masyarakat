import React, { useState } from "react";
import "../assets/css/dashboard.css";

function Dashboard() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="dashboard-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">E-Aduan Masyarakat Indonesia</div>
        <ul className="nav-links">
          <li>
            <a href="#home">Beranda</a>
          </li>
          <li>
            <a href="#aduan">Kirim Aduan</a>
          </li>
          <li>
            <a href="#info">Informasi</a>
          </li>
        </ul>
        <div className="auth-buttons">
          <a href="/login" className="login-btn">
            Masuk
          </a>
          <a href="/signup" className="signup-btn">
            Daftar
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1>Suara Anda, Langkah Awal Perubahan</h1>
          <p>
            Laporkan keluhan, aspirasi, atau saran Anda untuk membangun
            lingkungan yang lebih baik bagi masyarakat Indonesia.
          </p>
          <a href="#aduan" className="hero-button">
            Buat Aduan Sekarang
          </a>
        </div>
      </section>

      {/* Form Aduan */}
      <section id="aduan" className="form-section">
        <div className="form-container">
          <h2>Kirim Aduan</h2>
          <p>Lengkapi formulir di bawah ini dengan data yang benar.</p>
          <form>
            <input type="text" placeholder="Nama Lengkap" required />
            <input type="email" placeholder="Alamat Email" required />
            <select required>
              <option value="">Pilih Kategori Aduan</option>
              <option value="infrastruktur">Infrastruktur</option>
              <option value="kebersihan">Kebersihan</option>
              <option value="pelayanan">Pelayanan Publik</option>
              <option value="keamanan">Keamanan & Ketertiban</option>
              <option value="lainnya">Lainnya</option>
            </select>
            <textarea
              placeholder="Tuliskan aduan Anda di sini..."
              required
            ></textarea>
            <button type="submit" className="submit-button">
              Kirim Aduan Sekarang
            </button>
          </form>
        </div>
      </section>

      {/* Informasi Umum Section (dalam kotak-kotak) */}
      <section id="info" className="info-section">
        <h2>Informasi Umum</h2>
        <p className="info-desc">
          E-Aduan Masyarakat Indonesia membantu masyarakat menyampaikan aspirasi
          dan pengaduan secara mudah, cepat, serta transparan.
        </p>
        <div className="info-grid">
          <div className="info-card">
            <h3>🔎 Proses Pengaduan</h3>
            <p>
              Setiap laporan yang dikirim akan diverifikasi dan diteruskan
              kepada instansi terkait sesuai kategori aduan.
            </p>
          </div>
          <div className="info-card">
            <h3>📊 Pemantauan Aduan</h3>
            <p>
              Anda dapat memantau status aduan secara real-time untuk melihat
              perkembangan penanganan laporan Anda.
            </p>
          </div>
          <div className="info-card">
            <h3>🔒 Keamanan Data</h3>
            <p>
              Data pelapor dijaga kerahasiaannya dan digunakan hanya untuk
              keperluan verifikasi serta tindak lanjut laporan.
            </p>
          </div>
        </div>
      </section>

      {/* Chatbot Floating Button */}
      <div className="chatbot-wrapper">
        {isChatOpen && (
          <div className="chatbot-box">
            <div className="chatbot-header">
              <span>Asisten E-Aduan</span>
              <button
                className="close-btn"
                onClick={() => setIsChatOpen(false)}
              >
                ×
              </button>
            </div>
            <div className="chatbot-body">
              <p className="placeholder-text">
                💬 Chatbot AI siap membantu Anda memahami prosedur aduan.
              </p>
            </div>
            <div className="chatbot-input">
              <input type="text" placeholder="Tulis pesan..." />
              <button>Kirim</button>
            </div>
          </div>
        )}
        {!isChatOpen && (
          <button className="chatbot-fab" onClick={() => setIsChatOpen(true)}>
            💬
          </button>
        )}
      </div>

      {/* Footer */}
      <footer>
        <p>© 2025 E-Aduan Masyarakat Indonesia — Semua Hak Dilindungi</p>
      </footer>
    </div>
  );
}

export default Dashboard;
