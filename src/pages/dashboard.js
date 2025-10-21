import React from "react";
import "../assets/css/dashboard.css";
import { FaUser, FaCommentDots, FaCheckCircle } from "react-icons/fa";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h2>Layanan Aduan Masyarakat Peleloan</h2>
        <div className="user-info">
          <FaUser className="user-icon" />
          <div>
            <p className="user-name">Gloria Mandagi</p>
            <span className="user-role">Admin</span>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li className="active">Dashboard</li>
          <li>Aduan</li>
        </ul>
      </nav>

      <main className="dashboard-content">
        <section className="stats-section">
          <div className="stat-card">
            <FaCommentDots className="stat-icon blue" />
            <div>
              <h4>Total Aduan</h4>
              <p>39</p>
            </div>
          </div>

          <div className="stat-card">
            <FaCommentDots className="stat-icon yellow" />
            <div>
              <h4>Aduan Baru</h4>
              <p>12</p>
            </div>
          </div>

          <div className="stat-card">
            <FaCheckCircle className="stat-icon green" />
            <div>
              <h4>Aduan Selesai</h4>
              <p>27</p>
            </div>
          </div>
        </section>

        <section className="summary-section">
          <h3>Ringkasan Aktivitas</h3>
          <div className="summary-card">
            <p>
              Dalam seminggu terakhir terdapat <strong>12 aduan baru</strong>{" "}
              yang masuk dan <strong>27 aduan selesai</strong> diproses. Sistem
              AI membantu dalam klasifikasi otomatis dan pelacakan progres
              laporan.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
