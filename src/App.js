import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/landing";
import "./index.css";

// Note: make sure to install react-router-dom in your project:
// npm install react-router-dom

function App() {
  return (
    <BrowserRouter>
      <header className="header">
        <div className="header-container">
          <div className="logo">Layanan Aduan</div>
          <nav className="nav">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* Keep login route placeholder — implement in src/pages/login.js */}
          <Route
            path="/login"
            element={
              <div style={{ padding: "2rem" }}>
                Login page not implemented yet.
              </div>
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
