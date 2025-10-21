import "./App.css";
import { useState } from "react";

function App() {
  const [aduan, setAduan] = useState("");
  const [dataAduan, setDataAduan] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (aduan.trim() === "")
      return alert("Silakan tulis aduan Anda terlebih dahulu.");
    setDataAduan([
      { text: aduan, date: new Date().toLocaleString() },
      ...dataAduan,
    ]);
    setAduan("");
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="navbar">
        <h1 className="logo">Aduan Masyarakat</h1>
        <nav>
          <a href="#home">Beranda</a>
          <a href="#aduan">Kirim Aduan</a>
          <a href="#list">Lihat Aduan</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h2>Suara Anda, Langkah Awal Perubahan</h2>
          <p>
            Laporkan keluhan, aspirasi, atau saran Anda untuk membangun
            lingkungan yang lebih baik.
          </p>
          <a href="#aduan" className="btn-primary">
            Buat Aduan Sekarang
          </a>
        </div>
      </section>

      {/* Form Aduan */}
      <section id="aduan" className="form-section">
        <h2>Kirim Aduan</h2>
        <p>Sampaikan laporan Anda dengan jelas dan sopan.</p>
        <form onSubmit={handleSubmit} className="form-aduan">
          <textarea
            placeholder="Tulis aduan Anda di sini..."
            value={aduan}
            onChange={(e) => setAduan(e.target.value)}
          ></textarea>
          <button type="submit" className="btn-primary">
            Kirim Aduan
          </button>
        </form>
      </section>

      {/* Daftar Aduan */}
      <section id="list" className="list-section">
        <h2>Daftar Aduan Terkini</h2>
        {dataAduan.length === 0 ? (
          <p className="no-data">Belum ada aduan yang dikirim.</p>
        ) : (
          <div className="aduan-list">
            {dataAduan.map((item, index) => (
              <div key={index} className="aduan-card">
                <p className="aduan-text">“{item.text}”</p>
                <p className="aduan-date">{item.date}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 E-Aduan | Semua hak dilindungi</p>
      </footer>
    </div>
  );
}

export default App;
