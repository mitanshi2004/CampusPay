import React, { useState } from "react";  
import { useNavigate } from "react-router-dom"; // 
import "../css/home.css"; 


export const Homeo = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // close sidebar after click
  };

  return (
    <div className="home">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">CampusPay</div>

        {/* Desktop Links */}
        <ul className="nav-links desktop-only">
          <li><a href="#" className="inactive">Home</a></li>
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="https://www.linkedin.com/in/mitanshi-jain555">Contact Us</a></li>
        </ul>

        {/* Menu Button for Mobile */}
        <div className="menu-btn mobile-only" onClick={() => setMenuOpen(true)}>
          ☰
        </div>

        <button className="btn btn-primary desktop-only" onClick={() => navigate("/signup")}>Get Started</button>
      </nav>

      {/* Sidebar Menu */}
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>×</button>
        <a href="#" onClick={() => scrollToSection("home")}>Home</a>
        <a href="#about-us" onClick={() => scrollToSection("about-us")}>About Us</a>
        <a href="#services" onClick={() => scrollToSection("services")}>Services</a>
        <a href="https://www.linkedin.com/in/mitanshi-jain555">Contact Us</a>
        <button className="btn btn-primary" onClick={() => { setMenuOpen(false); navigate("/signup"); }}>Get Started</button>
      </div>

      {/* Overlay when sidebar is open */}
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1><span className="highlight">Easiest</span> Payment Method Ever</h1>
          <p className="ppp"><b>Skip the bank. Skip the wait</b></p>
          <p className="pp">Pay for mess, printing, events, and everything else on campus-fast, easy, and right from your phone with CampusPay.</p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => navigate("/signup")}>Start Today</button>
            <button className="btn btn-outline"><a href="https://www.linkedin.com/in/mitanshi-jain555">Contact Us</a></button>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://i.postimg.cc/HxC6L04M/Best-Bill-Pay-App-For-Iphone-Innopay.jpg" alt="Payment App" />
        </div>
      </section>

     {/* Features Section (About Us) */}
      <section id="about-us" className="features">
        <div className="feature">
          <img src="https://i.postimg.cc/yYyqFdrc/cec43974-5cfd-4265-9f0f-51d874bc4e55.jpg" alt="CampusPay App" />
          <div className="feature-text">
            <h2>Why CampusPay?</h2>
            <ul>
              <li>
                <strong>Skip the Mess Queue:</strong> Don’t like today’s mess food? 
                Grab a bite on-campus have another mess and pay instantly with CampusPay.
              </li>
              <li>
                <strong>Quick Event Payments:</strong> Joining a workshop or college fest? 
                Book your spot in seconds—no cash, no hassle.
              </li>
              <li>
                <strong>Printing Made Easy:</strong> Need last-minute notes or project printouts? 
                Pay directly at the print shop without carrying change.
              </li>
              <li>
                <strong>One App for All:</strong> Mess, printing, events, or other campus payments—
                all in one place, right in your pocket.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Promo Section */}
      <section id="services" className="promo">
        <div className="promo-text">
          <h2>All Your Campus Payments, in One Place</h2>
          <p>
            With <b>CampusPay</b>, every student gets instant access to essential
            campus services — no more cash, no more queues.
          </p>
          <ul>
            <li>🍽 Pay for your mess (Mess 1, Mess 2, etc.)</li>
            <li>🎟 Book and pay for college events</li>
            <li>🖨 Print documents instantly</li>
            <li>📊 View dashboard & transaction history</li>
            <li>💳 Check and top-up your balance</li>
            <li>📞 Quick access to campus contacts</li>
          </ul>
          <br />
          <button className="btn btn-primary" onClick={() => navigate("/signup")}>Dive in</button>
        </div>
        <div className="promo-image">
          <img src="https://i.postimg.cc/YSzKxSSJ/Yellow-mailbox-icon-with-document-floating-arrow-upload-file-email-digital-marketing-concept-cartoon.jpg" alt="Campus Services" />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 CampusPay. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="https://www.linkedin.com/in/mitanshi-jain555">Contact Us</a>
        </div>
      </footer>
    </div>
  );
};