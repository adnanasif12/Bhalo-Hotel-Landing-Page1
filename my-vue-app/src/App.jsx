import React from "react";
import newImage from "./assets/Homepage.png";
import mockupImage from "./assets/MocPC.png";
import mobileMockup from "./assets/Mobilemode.png";

import "./App.css";


function Hero() {
  return (
    <section className="hero-split">
      <div className="hero-left">
        <div className="product-box">
          <h3>
            <span className="brand">Gusto</span>{" "}
            <span className="brand2">Bookings</span>
          </h3>
          <p>
            Your ultimate booking solution for single/multiple resort and event booking/management system in the market
          </p>
          <div className="hero-buttons">
            <button className="browse-btn">Browse Website</button>
            <button className="admin-btn">Browse Admin Panel</button>
          </div>
          <div className="buy-now">
            <span className="buy-circle">
              Buy Now <span className="arrow">→</span>
            </span>
          </div>
        </div>
      </div>

      <div
        className="hero-right"
        style={{ backgroundColor: "#0D2F3F" }}
      >
        <div className="mockup-wrapper">
          <img
            src={mockupImage}           
            alt="Monitor Mockup"
            className="monitor"
          />
          <img
            src={newImage}                        
            alt="Homepage View"
            className="screen"
          />
          {/* Mobile mockup image, positioned right */}
          <img
            src={mobileMockup}
            alt="Mobile Mockup"
            className="mobile-mockup"
          />
          
        </div>
      </div>
    </section>
  );
}










/* ---------- About Section ---------- */
function About() {
  return (
    <section id="about" className="about">
      <h3>About Us</h3>
      <p>Bhalohotel offers premium rooms and services for your perfect stay.</p>
    </section>
  );
}

/* ---------- Features Section ---------- */
function Features() {
  return (
    <section id="features" className="features">
      <h3>Features</h3>
      <ul>
        <li>Luxury Rooms</li>
        <li>24/7 Service</li>
        <li>Free Wi-Fi</li>
      </ul>
    </section>
  );
}

/* ---------- Contact Section ---------- */
function Contact() {
  return (
    <section id="contact" className="contact">
      <h3>Contact</h3>
      <p>Email: info@bhalohotel.com</p>
    </section>
  );
}

/* ---------- Footer Section ---------- */
function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2026 Bhalohotel. All rights reserved.</p>
    </footer>
  );
}

/* ---------- Main App ---------- */
function App() {
  return (
    <div className="landing-container bg-color-">
      {/* Top text parts */}
      <div style={{ padding: '24px', textAlign: 'center', fontSize: '2rem', color: '#0D2F3F', fontWeight: 'bold' }}>
        Ami Bhalo hotel
      </div>

      <div style={{
        background: '#0D2F3F',
        color: '#FFFFFF',
        padding: '32px 0',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '1.2rem',

      }}>
        <span style={{ color: "#FFC62D" }}>Best&nbsp;</span>
        software in the market for booking and managing resorts and events!!!
      </div>

      {/* Component sections */}
      {/* <Header /> */}
      <Hero />
      <About />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;