#!/bin/bash
# Start Next.js development server
npm run dev


import React from "react";
import "./App.css";

function Hero() {
  return (
    <section className="hero-split" style={{ position: "relative" }}>
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
      <div className="hero-right" style={{ backgroundColor: "#0D2F3F" }}>
        <div className="mockup-wrapper">
          <img src="/assets/MocPC.png" alt="Monitor Mockup" className="monitor" />
          <img src="/assets/Homepage.png" alt="Homepage View" className="screen" />
          <img src="/assets/Mobilemode.png" alt="Mobile Mockup" className="mobile-mockup" />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="about">
      <h3>About Us</h3>
      <p>Bhalohotel offers premium rooms and services for your perfect stay.</p>
    </section>
  );
}

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

function Contact() {
  return (
    <section id="contact" className="contact">
      <h3>Contact</h3>
      <p>Email: info@bhalohotel.com</p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2026 Bhalohotel. All rights reserved.</p>
    </footer>
  );
}

function App() {
  return (
    <div className="landing-container bg-color-" style={{ position: 'relative' }}>
      <div className="dot-pattern"></div>
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
      <Hero />
      <About />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;






























Dot pattern background for marked area
.dot-pattern {
  /* background-color removed */
  position: absolute;
  width: 288px; /* 48px * 6 columns */
  height: 288px; /* 48px * 6 rows */
  border-radius: 0 0 0 24px; /* rounded top-right corner */
  overflow: hidden;
  top: 735px; /* moved even further down */
  left: 20px; /* moved slightly right */
  z-index: 10;
}

.dot-pattern::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(red 16%, transparent 17%);
  background-size: 48px 48px;
  opacity: 0.7;
}

body {
  margin: 0;
  font-family: 'Segoe UI', Arial, sans-serif;
  background: #f5f5f5;
}
.landing-container {
  max-width: 1200px;
  margin: 0 auto;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border-radius: 8px;
  overflow: hidden;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  background: #2d6a4f;
  color: #fff;
}
.header nav a {
  color: #fff;
  margin-left: 16px;
  text-decoration: none;
  font-weight: 500;
}
/* --- HERO SPLIT SECTION --- */
.hero-split {
  display: flex;
  flex-wrap: wrap;
  background: #0D2F3F;
  color: #fff;
  padding: 48px 24px 32px 24px;
  align-items: center;
  justify-content: space-between;
}
.hero-left {
  flex: 1 1 350px;
  min-width: 320px;
  max-width: 480px;
  margin-right: 32px;
}
.hero-left h2 {
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: 32px;
}
.highlight {
  color: #ffd600;
  font-weight: 700;
}
.product-box {
  background: #16323a;
  border-radius: 22px;
  padding: 32px 24px 24px 24px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  margin-bottom: 16px;
}
.brand {
  color: #ffd600;
  font-weight: 700;
  font-size: 2rem;
}
.brand2 {
  color: #38b2ac;
  font-weight: 700;
  font-size: 2rem;
}
.product-box p {
  margin: 16px 0 24px 0;
  color: #e0e0e0;
}
.hero-buttons {
  display: flex;
  gap: 16px;
  margin-bottom: 32px;
}
.browse-btn {
  background: #1F7F7B;
  color: #fff;
  border: none;
  padding: 20px 18px;
  border-radius: 8px;
  font-size: .9rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  width:180px;
}
.browse-btn:hover {
  background: #319795;
}
.admin-btn {
  background: #f1b40b;
  color: #000c11;
  border: none;
  padding: 20px 18px;
  border-radius: 8px;
  font-size: .9rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  width: 220;
  /* height: 70; */
}
.admin-btn:hover {
  background: #e6c337;
}
.buy-now {
  margin-top: 24px;
}
.buy-circle {
  display: inline-block;
  border: 2px solid #ffd600;
  border-radius: 50%;
  padding: 18px 32px;
  color: #ffd600;
  font-size: 1.3rem;
  font-weight: 700;
  position: relative;
  transition: background 0.2s, color 0.2s;
  cursor: pointer;
}
.buy-circle:hover {
  background: #ffd600;
  color: #16323a;
}
.arrow {
  font-size: 1.5rem;
  margin-left: 8px;
}
.hero-right {
  
  flex: 1 1 350px;
  min-width: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  background-color: #0D2F3F; 
  padding: 0;              
  margin: 0;                
}

/* Mobile mockup style for hero section */
.mobile-mockup {
  position: absolute;
  right: 0%;
  top: 180px;
  width: 140px;
  height: 320px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  border-radius: 24px;
  background: #fff;
  z-index: 10;
  border: 4px solid #fff;
}

.mockup-wrapper {
  position: relative;
  width: 580px;              
  margin: 0 auto;          
  background-color: #0D2F3F; 
  /* mix-blend-mode: multiply; */
  overflow: hidden;         
  border-radius: 40px;
  
 
}

.monitor {
   /* position: relative; */
   width: 100%;
   height: 580px;
   display: block;
   filter: brightness(1);
   border-radius: 40px;
   
   z-index: 1;
   background-color: #0D2F3F; 
  box-shadow: 0 0 96px 32px #0D2F3F, 0 0 48px 16px #16323a;
}

/* এই জায়গায় homepage ইমেজ মনিটরের স্ক্রিনের ভিতর যাবে */
.screen {
  position: absolute;
  top: 18.0%;            
  left: 0.0%;           
  width: 90%;          
  height: 56%;          
  object-fit: cover;
  border-radius: 16px;
  /* border:  6px solid #e9cccc; */
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.3); 
  opacity: 1;           
  z-index: 2;           
  filter: brightness(1.05);
} 









/* --- Responsive Styles --- */
@media (max-width: 900px) {
  .landing-container {
    max-width: 100%;
    border-radius: 40px;
  }
  .hero-split {
    flex-direction: column;
    padding: 32px 8px 16px 8px;
  }
  .hero-left, .hero-right {
    margin: 0;
    max-width: 100%;
    min-width: 0;
  }
  .product-box {
    padding: 24px 12px 16px 12px;
  }
}
@media (max-width: 600px) {
  .header {
    flex-direction: column;
    padding: 16px 8px;
    text-align: center;
  }
  .hero-split {
    padding: 16px 2px 8px 2px;
  }
  .product-box {
    padding: 16px 4px 8px 4px;
    text-align: center;
  }
  .product-box h3,
  .product-box p {
    text-align: center;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  .buy-now {
    display: flex;
    justify-content: center;
    margin-top: 2px;
    
  }
  .hero-buttons {
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
  .browse-btn, .admin-btn {
    width: 80%;
    max-width: 260px;
    min-width: 160px;
    text-align: center;
    margin: 0 auto;
    display: block;
  }
  .buy-circle {
    padding: 12px 18px;
    font-size: 1rem;
     
  }
}
.about, .features, .contact {
  padding: 32px 24px;
}
.features ul {
  list-style: none;
  padding: 0;
}
.features li {
  background: #e9ecef;
  margin-bottom: 8px;
  padding: 8px 16px;
  border-radius: 4px;
}
.footer {
  padding: 16px;
  text-align: center;
  background: #2d6a4f;
  color: #fff;
}











{/* Centered Payment Methods Card overlaying both sides */}
      <div style={{ position: 'absolute', left: '50%', top: '100%', transform: 'translate(-50%, -50%)', width: '100%', maxWidth: '90%', zIndex: 30 }}>
        <InfoCard title="Payment Methods" description="">
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '12px 0' }}>
            <img src="/assets/paypal.png" alt="PayPal" style={{ height: '32px', objectFit: 'contain', padding: '0px 30px' }} />
            <img src="/assets/sslcommerz.png" alt="SSLCommerz" style={{ height: '32px', objectFit: 'contain', padding: '0px 30px' }} />
            <img src="/assets/stripe.png" alt="Stripe" style={{ height: '32px', objectFit: 'contain', padding: '0px 30px' }} />
          </div>
        </InfoCard>