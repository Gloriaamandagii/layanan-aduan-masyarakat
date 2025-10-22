import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./pages/login";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
import Reset from "./pages/resetpassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resetpassword" element={<Reset />} />
      </Routes>
    </Router>
  );
}

export default App;
