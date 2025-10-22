import React from "react";
import "../assets/css/dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">E-Aduan Masyarakat Indonesia</div>
        <ul className="nav-links">
          <li><a href="#home">Beranda</a></li>
          <li><a href="#aduan">Kirim Aduan</a></li>
          <li><a href="#info">Informasi</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1>Suara Anda, Langkah Awal Perubahan Indonesia</h1>
          <p>
            Sampaikan aspirasi, keluhan, dan saran Anda untuk kemajuan pelayanan publik 
            dan lingkungan masyarakat di seluruh Indonesia.
          </p>
          <a href="#aduan" className="cta-button">Kirim Aduan Sekarang</a>
        </div>
      </section>

      {/* Informasi Umum */}
      <section id="info" className="info-section">
        <h2>Informasi Umum</h2>
        <div className="info-cards">
          <div className="info-card">
            <h3>Transparansi Publik</h3>
            <p>
              Setiap aduan yang masuk akan diproses secara terbuka dan dapat dipantau oleh masyarakat.
            </p>
          </div>
          <div className="info-card">
            <h3>Respon Cepat</h3>
            <p>
              Aduan yang valid akan diteruskan ke instansi terkait agar segera mendapatkan penanganan.
            </p>
          </div>
          <div className="info-card">
            <h3>Kolaborasi Masyarakat</h3>
            <p>
              Bersama masyarakat, kita membangun Indonesia yang lebih baik melalui partisipasi aktif.
            </p>
          </div>
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
            <textarea placeholder="Tuliskan aduan Anda di sini..." required></textarea>
            <button type="submit" className="submit-button">Kirim Aduan Sekarang</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 E-Aduan Masyarakat Indonesia — Semua Hak Dilindungi</p>
      </footer>
    </div>
  );
}

export default Dashboard;
