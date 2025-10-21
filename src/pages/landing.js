import React, { useState, useCallback } from "react";
import {
  MessageSquareText,
  Send,
  ListOrdered,
  Loader2,
  Zap,
  Shield,
  Eye,
} from "lucide-react";

import "../assets/css/landing.css";

// Komponen Notifikasi Kustom (Pengganti alert())
const Notification = ({ message, type, onClose }) => {
  if (!message) return null;

  // Semua styling (className) telah dihapus
  return (
    <div role="alert">
      <div>
        <span>{message}</span>
        <button onClick={onClose}>&times;</button>
      </div>
    </div>
  );
};

// Komponen Utama Aplikasi
function App() {
  // State Aplikasi (Data disimpan hanya di memori)
  const [aduan, setAduan] = useState("");
  const [dataAduan, setDataAduan] = useState([
    // Data Awal Mockup untuk Demonstrasi
    {
      id: 1,
      text: "Jalan utama di komplek kami sudah berlubang parah selama 2 bulan terakhir.",
      date: "10/20/2025, 10:30:00 AM",
    },
    {
      id: 2,
      text: "Lampu penerangan jalan mati di sektor C sejak seminggu yang lalu.",
      date: "10/19/2025, 05:45:00 PM",
    },
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({
    message: "",
    type: "info",
  });

  // UserId statis/dummy karena tidak ada otentikasi
  const dummyUserId = "statik-mode-tanpa-database";

  // State untuk Notifikasi
  const showNotification = useCallback((message, type) => {
    setNotification({ message, type });
    // Sembunyikan notifikasi setelah 4 detik
    setTimeout(() => setNotification({ message: "", type: "info" }), 4000);
  }, []);

  // Logika Pengiriman Aduan (Hanya update state lokal)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (aduan.trim() === "") {
      showNotification("Silakan tulis aduan Anda terlebih dahulu.", "error");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulasi penundaan pengiriman (seperti koneksi ke server)
      setTimeout(() => {
        const newAduan = {
          id: Date.now(), // ID unik berbasis timestamp
          text: aduan,
          date: new Date().toLocaleString(), // Waktu pengiriman
        };

        // Tambahkan aduan baru ke awal array (terbaru di atas)
        setDataAduan((prevAduan) => [newAduan, ...prevAduan]);

        setAduan("");
        showNotification("Aduan berhasil dikirim (disimpan lokal)!", "success");
        setIsSubmitting(false);
      }, 500); // Penundaan 0.5 detik
    } catch (error) {
      console.error("Error adding document: ", error);
      showNotification("Gagal mengirim aduan.", "error");
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Notification
        message={notification.message}
        type={notification.type}
        onClose={() => setNotification({ message: "", type: "info" })}
      />

      {/* Header / Navbar */}
      <header>
        <div>
          <h1>E-Aduan Masyarakat</h1>
          <nav>
            <a href="#home">Beranda</a>
            <a href="#aduan">Kirim Aduan</a>
            <a href="#list">Lihat Aduan</a>
          </nav>
          <div>
            Status Mode: <span>STATIS</span>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home">
          <div>
            <div>
              <h2>
                Suara Anda, <span>Langkah Awal Perubahan</span>
              </h2>
              <p>
                Laporkan keluhan, aspirasi, atau saran Anda untuk membangun
                lingkungan yang lebih baik. Kami berkomitmen pada transparansi
                dan tindak lanjut.
              </p>
              <a href="#aduan">
                <Send /> Buat Aduan Sekarang
              </a>
            </div>
            <div>
              {/* Ilustrasi Placeholder */}
              <div>
                <Zap />
                <span>Platform Cepat & Terpercaya</span>
              </div>
            </div>
          </div>
        </section>

        {/* Fitur Utama Section */}
        <section>
          <div>
            <h2>Keunggulan Layanan Kami</h2>
            <div>
              <div>
                <Shield />
                <h3>Anonimitas Terjamin</h3>
                <p>
                  Identitas pelapor dilindungi sepenuhnya. Fokus kami adalah
                  pada penyelesaian masalah, bukan identitas Anda.
                </p>
              </div>
              <div>
                <Eye />
                <h3>Transparansi Proses</h3>
                <p>
                  Lacak status aduan Anda dari dikirim, diproses, hingga selesai
                  dalam waktu nyata (real-time).
                </p>
              </div>
              <div>
                <Zap />
                <h3>Tindak Lanjut Cepat</h3>
                <p>
                  Kami menjamin respons dan penanganan masalah secara efisien
                  oleh tim terkait.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Form Aduan */}
        <section id="aduan">
          <div>
            <h2>Kirim Aduan Anda</h2>
            <p>Sampaikan laporan Anda dengan jelas, detail, dan sopan.</p>

            <form onSubmit={handleSubmit}>
              <div>
                <textarea
                  id="aduan-text"
                  placeholder="Tulis aduan Anda di sini (contoh: 'Ada tumpukan sampah di Jalan Mawar sejak 3 hari lalu...')"
                  value={aduan}
                  onChange={(e) => setAduan(e.target.value)}
                  rows="6"
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 /> Mengirim...
                  </>
                ) : (
                  <>
                    <Send /> Kirim Aduan
                  </>
                )}
              </button>
            </form>
          </div>
        </section>

        {/* Daftar Aduan */}
        <section id="list">
          <div>
            <div>
              <ListOrdered />
              <h2>Daftar Aduan Terkini ({dataAduan.length})</h2>
            </div>

            {dataAduan.length === 0 ? (
              <div>
                <MessageSquareText />
                <p>Belum ada aduan yang terkirim.</p>
                <p>Jadilah yang pertama untuk membuat laporan!</p>
              </div>
            ) : (
              <div>
                {dataAduan.map((item) => (
                  <div key={item.id}>
                    <p>{item.text}</p>
                    <div>
                      Dikirim: {item.date}
                      <span>Status: Pending</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div>
          <p>
            © 2025 E-Aduan Masyarakat. Dibangun dengan Komitmen Transparansi.
          </p>
          <p>Mode: Statis, Data Tidak Disimpan Permanen</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
