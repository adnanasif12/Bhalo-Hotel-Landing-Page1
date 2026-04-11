"use client";
// import React, { useState } from "react";
import "./globals.css";



// import "./DashboardDemo.css";

// import "./App.css";


function Hero() {
  return (
    <section id="hero" className="hero-section">
    <p className="hero-title"><span className="brand3">Best</span> software in the market for booking and managing resorts and events!!!</p>  
  
    <div className="hero-split" style={{ position: "relative" }}>
      {/* Centered Payment Methods Card overlaying both sides */}
      <div className="payment-methods-overlay">
        <InfoCard title="Payment Methods" description="">
          <div className="payment-methods-flex">
            <img src="/assets/paypal.png" alt="PayPal" className="payment-methods-img" />
            <img src="/assets/sslcommerz.png" alt="SSLCommerz" className="payment-methods-img" />
            <img src="/assets/stripe.png" alt="Stripe" className="payment-methods-img" />
          </div>
        </InfoCard>
        {/* Dashboard Demo Section below InfoCard */}

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
              <span className="buy-text">Buy Now</span> <span className="arrow">→</span>
            </span>
          </div>
        </div>
      </div>
      <div
        className="hero-right"
        style={{ backgroundColor: "#0D2F3F", position: "relative" }}
      >
        <div className="mockup-wrapper">
          <div className="mockimage" style={{ position: 'relative' }}>
            <div className="monitor"></div>
            


            <img
              src="/assets/Homepage.png"
              alt="Homepage View"
              className="screen"
            />

            <div className="monitor-stand">
               <div className="stand-red-curve"></div>
            </div>
          </div>
           
          {/* Mobile mockup image, positioned right */}
          <img
            src="/assets/Mobilemode.png"
            alt="Mobile Mockup"
            className="mobile-mockup"
          />
        </div>
      </div>
    </div>
    </section>
  );
}







// ---------- Dashboard Demo Section ----------
function DashboardDemo() {
  return (
    <section id="dashboard-demo" className="dashboard-demo-section">
      <div className="dashboard-demo-container">

        {/* Left Side - Dashboard Preview Image */}
        <div className="dashboard-demo-left ">
          <div className="demo-desktop-preview section-underline">
          <div className="dashboard-demo-image">
            <img
              src="/assets/Admin.png"
              alt="Dashboard Preview"
            />
          </div>
        </div>
        </div>


        {/* Right Side - Feature Information */}
        <div className="dashboard-demo-info">
          <div className="demo-info-item">
            <div className="demo-icon-box">📊</div>
            <p>
              Book, Manage and automate your vacation rental business with Booking Manager Pro.
            </p>
          </div>

          <div className="demo-info-item">
            <div className="demo-icon-box">🏨</div>
            <p>Hotels and event booking in a single app!</p>
          </div>

          <div className="demo-info-item">
            <div className="demo-icon-box">🌍</div>
            <p>
              Best app in the market for single/ multiple resort.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}



// ---------- Feature Highlights Section ----------
function FeatureHighlights() {
  return (
    <section id="feature-highlights" className="feature-highlights-section">
      {/* Top Feature Cards */}
      <div className="feature-cards-grid">
        {[
          { text: "Compatible with any device", className: "navy" },
          { text: "Convenient Search & Filter system", className: "yellow" },
          { text: "Sign up with Facebook & Google", className: "teal" },
          { text: "Details page with all informations", className: "teal-light" },
          { text: "Effortless payment gateway", className: "navy" },
          { text: "Clean & Simple Admin panel", className: "yellow" },
        ].map((item, idx) => (
          <div key={idx} className={`feature-card ${item.className}`} style={{ position: "relative", height: "80px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <span style={{ position: "relative", zIndex: 1 }}>{item.text}</span>
            <div style={{ position: "relative", height: "28px", width: "100%", marginTop: "4px" }}>
              <div className="info-card-underline-red" style={{ position: "absolute", left: "50%", top: "-7px", width: "260px", transform: "translateX(-50%)" }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 40" preserveAspectRatio="none">
                  <path d="M5 25 Q80 5 160 20 Q240 35 315 15" strokeWidth="7" fill="none" strokeLinecap="round" opacity="0.9"/>
                  <path d="M10 30 Q95 15 165 25 Q250 40 310 22" strokeWidth="5.5" fill="none" strokeLinecap="round" opacity="0.8"/>
                  <path d="M8 20 Q85 10 150 22 Q235 32 300 18" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.7"/>
                </svg>
              </div>
              <div className="info-card-underline" style={{ position: "absolute", left: "50%", top: 0, width: "260px", transform: "translateX(-50%)" }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 40" preserveAspectRatio="none">
                  <path d="M5 25 Q80 5 160 20 Q240 35 315 15" stroke="#188a89" strokeWidth="7" fill="none" strokeLinecap="round" opacity="0.9"/>
                  <path d="M10 30 Q95 15 165 25 Q250 40 310 22" stroke="#188a89" strokeWidth="5.5" fill="none" strokeLinecap="round" opacity="0.8"/>
                  <path d="M8 20 Q85 10 150 22 Q235 32 300 18" stroke="#188a89" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.7"/>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Description + Device Images */}
      <div className="feature-bottom">
        <div className="feature-text">
          <h3>Compatible with any type of device</h3>
          <p>
            Your ultimate booking solution for single/multiple resort and event booking/management system in the market
          </p>

          <ul>
            <li>High Flexibility</li>
            <li>Organized Layers</li>
            <li>Fully Customizable</li>
            <li>Pixel Perfect Design</li>
            <li>Free Fonts</li>
          </ul>
        </div>

        <div className="feature-image">
          <img src="/assets/device-preview.png" alt="Device Preview" />
        </div>
      </div>
    </section>
  );
}







// ---------- Full Website Demo Section (Dynamic Images) ----------
interface FullWebsiteDemoProps {
  demoImages?: string[];
}

function FullWebsiteDemo({ demoImages }: FullWebsiteDemoProps) {
  // Default: সব ইমেজ একই থাকবে, যদি কোনো custom image list না পাওয়া যায়
  const images = demoImages && demoImages.length > 0
    ? demoImages
    : Array(9).fill("/assets/Homepage.png");

  return (
    <section id="full-website-demo" className="full-website-demo-section">
      <div className="demo-header">
        <h2>Full Website Demo</h2>
        <div className="demo-signature-underline">
          <svg width="260" height="38" viewBox="0 0 260 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 32 Q170 0 250 18" stroke="#FFC107" stroke-width="7" stroke-linecap="round" fill="none"/>
          </svg>
        </div>
        <p>
          Showcase all pages of your system in a modern responsive view.
          Hover to see live‑style effects and use different images for every page preview.
        </p>
      </div>

      <div className="demo-grid">
        {images.map((src, index) => (
          <div key={index} className="demo-card">
            <img src={src} alt={`Website Demo ${index + 1}`} />
            {index === 0 && (
              <button className="live-btn">Live Website ↗</button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
















// ---------- Full Website Demo Section (Dynamic Images) ----------
interface AdminFullWebsiteDemoProps {
  demoImages?: string[];
}

function AdminFullWebsiteDemo({ demoImages }: AdminFullWebsiteDemoProps) {
  // Default: সব ইমেজ একই থাকবে, যদি কোনো custom image list না পাওয়া যায়
  const images = demoImages && demoImages.length > 0
    ? demoImages
    : Array(4).fill("/assets/Admin.png");

  return (
    <section id="Admin-full-website-demo" className="Admin-full-website-demo-section">
      <div className="Admin-demo-header">
        <h2>Full Website Demo</h2>
        <div className="demo-signature-underline">
          <svg width="260" height="38" viewBox="0 0 260 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 32 Q170 0 250 18" stroke="#FFC107" stroke-width="7" stroke-linecap="round" fill="none"/>
          </svg>
        </div>
        <p>
          Showcase all pages of your system in a modern responsive view.
          Hover to see live‑style effects and use different images for every page preview.
        </p>
      </div>

      <div className="Admin-demo-grid">
        {images.map((src, index) => (
          <div key={index} className="Admin-demo-card">
            <img src={src} alt={`Website Demo ${index + 1}`} />
            {index === 0 && (
              <button className="Admin-live-btn">Live Website ↗</button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}









// /* ---------- FAQ Section ---------- */
function FAQSection() {
  const faqs = [
    {
      question: "Can recruiters search for candidates?",
      answer:
        "Yes! If job-seekers upload their CV and fill out their candidacy profile, they will be searchable by recruiters.",
    },
    {
      question: "What industries are supported by Infohub?",
      answer:
        "We support all industries find suitable tech talent.",
    },
    {
      question: "Why should I use Infohob for my recruiting needs?",
      answer:
        "Infohob is at the top of the job search industry in Nigeria. We find strength in connecting tech job seekers and recruiters.",
    },
    {
      question: "Why should I use Infohob for my recruiting needs?",
      answer:
        "Infohob is at the top of the job search industry in Nigeria. We find strength in connecting tech job seekers and recruiters.",
    },
    {
      question: "Why should I use Infohob for my recruiting needs?",
      answer:
        "Infohob is at the top of the job search industry in Nigeria. We find strength in connecting tech job seekers and recruiters.",
    },
  ];

  return (
    <section className="faq-section">
      <div className="faq-header">
            <h2 className="faq-title">
              Have any <span>Questions<span className="faq-title-accent">?</span></span>
            </h2>
          <div className="demo-signature-underline">
            <svg width="260" height="38" viewBox="0 0 260 38" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M30 32 Q170 0 250 18" stroke="#FFC107" stroke-width="7" stroke-linecap="round" fill="none"/>
            </svg>
          </div>
            <p className="faq-subtitle">
              Lorem ipsum dolor sit amet, consectetur sadipscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore.
            </p>
      </div>
      <div className="faq-container">
        <div className="faq-illustration-col">
          <div className="faq-illustration-wrapper">
            <img src="/assets/faq-illustration.png" alt="FAQ Illustration" className="faq-illustration-img" />
          </div>
        </div>
        <div className="faq-content-col">
          
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div key={idx} className="faq-item">
                <div className="faq-item-row">
                  <span className="faq-item-question">{faq.question}</span>
                  <span className="faq-item-divider">—</span>
                </div>
                <span className="faq-item-answer">{faq.answer}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}














// ---------- Full Website Demo Section (Dynamic Images) ----------
interface UniqueFeaturesProps {
  demoImages?: string[];
}

function UniqueFeatures({ demoImages }: UniqueFeaturesProps) {
  // Default: সব ইমেজ একই থাকবে, যদি কোনো custom image list না পাওয়া যায়
  const images = demoImages && demoImages.length > 0
    ? demoImages
    : Array(15).fill("/assets/MobileApp.png");
  return (
    <section id="unique-features" className="unique-features-section">
      <div className="unique-features-header">
        <h2>Our Unique Features</h2>
        <div className="demo-signature-underline">
            <svg width="260" height="38" viewBox="0 0 260 38" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M30 32 Q170 0 250 18" stroke="#FFC107" stroke-width="7" stroke-linecap="round" fill="none"/>
            </svg>
        </div>
        <p>
          Showcase all pages of your system in a modern responsive view.
          Hover to see live‑style effects and use different images for every page preview.
        </p>
      </div>

      <div className="unique-features-grid">
        {images.map((src, index) => (
          <div key={index} className="unique-features-card">
           <img src={src} alt={`Website Demo ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}












function FeatureDescription() {
  const features = [
    {
      title: "Hotel Management",
      description:
        "You may manage categories and subcategories, attributes, add-ons, and more in the Food area. Any restaurant can have things added to it. A food management tool will also be added to the Restaurant panel.",
    },
    {
      title: "Hotel Management",
      description:
        "You may manage categories and subcategories, attributes, add-ons, and more in the Food area. Any restaurant can have things added to it. A food management tool will also be added to the Restaurant panel.",
    },
    {
      title: "Hotel Management",
      description:
        "You may manage categories and subcategories, attributes, add-ons, and more in the Food area. Any restaurant can have things added to it. A food management tool will also be added to the Restaurant panel.",
    },
    {
      title: "Hotel Management",
      description:
        "You may manage categories and subcategories, attributes, add-ons, and more in the Food area. Any restaurant can have things added to it. A food management tool will also be added to the Restaurant panel.",
    },
    {
      title: "Hotel Management",
      description:
        "You may manage categories and subcategories, attributes, add-ons, and more in the Food area. Any restaurant can have things added to it. A food management tool will also be added to the Restaurant panel.",
    },
    {
      title: "Hotel Management",
      description:
        "You may manage categories and subcategories, attributes, add-ons, and more in the Food area. Any restaurant can have things added to it. A food management tool will also be added to the Restaurant panel.",
    },
  ];

  return (
    <section id="feature-description" className="feature-description-section">
      {/* Header */}
      <div className="feature-desc-header">
        <h2>
          Our Uniques <span>Feature</span>
        </h2>
        <div className="demo-signature-underline">
            <svg width="260" height="38" viewBox="0 0 260 38" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M30 32 Q170 0 250 18" stroke="#FFC107" stroke-width="7" stroke-linecap="round" fill="none"/>
            </svg>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur sadipscing elit, sed diam nonumy
          eirmod tempor invidunt ut labore et dolore.
        </p>
      </div>

      {/* Cards */}
      <div className="feature-desc-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-desc-card">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            {/* <div className="feature-underline"></div> */}
          </div>
        ))}
      </div>
    </section>
  );
}








function FinalSection() {
  return (
    <section id="final-section" className="final-section">
      <div className="final-text">
        <p className="final-thanks">Thanks For Watching</p>
        <h2>
          Do you like this <span>System?</span>
        </h2>
        <button className="buy-btn">Buy Now</button>
      </div>

      <div className="final-image">
        <img src="/assets/sunset-beach.png" alt="Beach Illustration" />
      </div>
    </section>
  );
}




























/* ---------- Main App ---------- */
function App() {
  return (
    <div className="landing-container bg-color- relative-container">

      {/* Hero section with dot-pattern background visually aligned */}
      <div className="hero-dot-wrapper">
        <div className="dot-pattern dot-custom-pos"></div>
        <Hero />
      </div>
      {/* InfoCard for About Bhalohotel moved to Hero section above */}
      <DashboardDemo />
      <FeatureHighlights />
      <FullWebsiteDemo />
      <AdminFullWebsiteDemo />
      <FAQSection />
      <UniqueFeatures />
      <FeatureDescription />
      <FinalSection/>
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}



// Simple Card Component
type InfoCardProps = {
  title?: string;
  description?: string;
  children?: React.ReactNode;
};
// function InfoCard({ title = "Card Title", description = "This is a simple card description.", children }: InfoCardProps) {
//   return (
//     <div className="info-card">
//       <h3 className="info-card-title">{title}</h3>
//       <div className="info-card-underline">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 40">
//           <path d="M10 30 Q 80 10, 160 20 Q 240 30, 310 15" stroke="#188a89" strokeWidth="7" fill="none" strokeLinecap="round"/>
//           <path d="M20 35 Q 100 25, 170 30 Q 250 35, 300 25" stroke="#188a89" strokeWidth="5" fill="none" strokeLinecap="round"/>
//           <path d="M15 25 Q 90 20, 150 25 Q 230 35, 305 20" stroke="#188a89" strokeWidth="4" fill="none" strokeLinecap="round"/>
//         </svg>
//       </div>
//       <p className="info-card-desc">{description}</p>
//       {children}
//     </div>
//   );
// }



function InfoCard({
  title = "Card Title",
  description = "This is a simple card description.",
  children
}: InfoCardProps) {
  return (
    <div className="info-card">
      <h3 className="info-card-title">{title}</h3>

      <div style={{ position: "relative", height: "28px" }}>
        <div className="info-card-underline-red" style={{ position: "absolute", left: "50%", top: "-7px", width: "260px", transform: "translateX(-50%)" }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 40" preserveAspectRatio="none">
            <path d="M5 25 Q80 5 160 20 Q240 35 315 15" strokeWidth="7" fill="none" strokeLinecap="round" opacity="0.9"/>
            <path d="M10 30 Q95 15 165 25 Q250 40 310 22" strokeWidth="5.5" fill="none" strokeLinecap="round" opacity="0.8"/>
            <path d="M8 20 Q85 10 150 22 Q235 32 300 18" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.7"/>
          </svg>
        </div>
        <div className="info-card-underline" style={{ position: "absolute", left: "50%", top: 0, width: "260px", transform: "translateX(-50%)" }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 40" preserveAspectRatio="none">
            <path d="M5 25 Q80 5 160 20 Q240 35 315 15" stroke="#188a89" strokeWidth="7" fill="none" strokeLinecap="round" opacity="0.9"/>
            <path d="M10 30 Q95 15 165 25 Q250 40 310 22" stroke="#188a89" strokeWidth="5.5" fill="none" strokeLinecap="round" opacity="0.8"/>
            <path d="M8 20 Q85 10 150 22 Q235 32 300 18" stroke="#188a89" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.7"/>
          </svg>
        </div>
      </div>

      <p className="info-card-desc">{description}</p>
      {children}
    </div>
  );
}









export default App;



