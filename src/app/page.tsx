import React from "react";
// import "./App.css";

function Hero() {
  return (
    <section className="hero-split" style={{ position: "relative" }}>
      {/* Centered Payment Methods Card overlaying both sides */}
      <div style={{ position: 'absolute', left: '50%', top: '100%', transform: 'translate(-50%, -50%)', width: '100%', maxWidth: '90%', zIndex: 30 }}>
        <InfoCard title="Payment Methods" description="">
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '16px 0' }}>
            <img src="/assets/paypal.png" alt="PayPal" style={{ height: '32px', objectFit: 'contain' }} />
            <img src="/assets/sslcommerz.png" alt="SSLCommerz" style={{ height: '32px', objectFit: 'contain' }} />
            <img src="/assets/stripe.png" alt="Stripe" style={{ height: '32px', objectFit: 'contain' }} />
          </div>
        </InfoCard>
      </div>
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
        style={{ backgroundColor: "#0D2F3F", position: "relative" }}
      >
        <div className="mockup-wrapper">
          <img
            src="/assets/MocPC.png"
            alt="Monitor Mockup"
            className="monitor"
          />
          <img
            src="/assets/Homepage.png"
            alt="Homepage View"
            className="screen"
          />
          {/* Mobile mockup image, positioned right */}
          <img
            src="/assets/Mobilemode.png"
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
    <div className="landing-container bg-color- relative-container">
      {/* Top text parts */}
      <div className="main-title">Ami Bhalo hotel</div>
      <div className="main-subtitle">
        <span className="main-subtitle-highlight">Best&nbsp;</span>
        software in the market for booking and managing resorts and events!!!
      </div>
      {/* Hero section with dot-pattern background visually aligned */}
      <div className="hero-dot-wrapper">
        <div className="dot-pattern dot-custom-pos"></div>
        <Hero />
      </div>
      {/* InfoCard for About Bhalohotel moved to Hero section above */}
      <About />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}



// Simple Card Component
      function InfoCard({title = "Card Title", description = "This is a simple card description.", children}) {
       return (
        <div className="info-card">
          <h3 className="info-card-title">{title}</h3>
          <div className="info-card-underline"></div>
          <p className="info-card-desc">{description}</p>
          {children}
        </div>
        );
      }


export default App;



