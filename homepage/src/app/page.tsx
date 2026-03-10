import React from "react";
import "./globals.css";
// import "./DashboardDemo.css";

// import "./App.css";

function Hero() {
  return (
    <section className="hero-split" style={{ position: "relative" }}>
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


// ---------- Dashboard Demo Section ----------
function DashboardDemo() {
  return (
    <section id="dashboard-demo" className="dashboard-demo-section">
      <div className="dashboard-demo-container">
        {/* Left Side - Dashboard Preview Image */}
        <div className="dashboard-demo-image">
          <img
            src="/assets/Admin.png"
            alt="Dashboard Preview"
          />
        </div>

        {/* Right Side - Feature Information */}
        <div className="dashboard-demo-info">
          <div className="demo-info-item">
            <div className="demo-icon-box">📊</div>
            <p>
              Book, manage and automate your vacation rental or resort
              system easily from one dashboard.
            </p>
          </div>

          <div className="demo-info-item">
            <div className="demo-icon-box">🏨</div>
            <p>Hotel and event management integrated in one simple interface.</p>
          </div>

          <div className="demo-info-item">
            <div className="demo-icon-box">🌍</div>
            <p>
              Access your full inventory anywhere with responsive dashboard
              view.
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
        <div className="feature-card navy">Compatible with any device</div>
        <div className="feature-card yellow">Convenient Search & Filter system</div>
        <div className="feature-card teal">Sign up with Facebook & Google</div>
        <div className="feature-card teal-light">Details page with all informations</div>
        <div className="feature-card navy">Effortless payment gateway</div>
        <div className="feature-card yellow">Clean & Simple Admin panel</div>
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



// ---------- Full Admin Dashboard Demo Section (Each frame contains 2 images) ----------
// import "./FullAdminDashboardDemo.css";

function FullAdminDemo() {
  return (
    <section className="full-admin-dashboard-demo-section"> 
      <div className="dashboard-title" >
        <div className="admin-desh-demo">
            <div className="demo-image-box">🏨</div>
            <p>Hotel and event management integrated in one simple interface.</p>
          </div>

          <div className="admin-desh-demo">
            <div className="demo-image-box">🌍</div>
            <p>
              Access your full inventory anywhere with responsive dashboard
              view.
            </p>
          </div>
      </div>
    </section>
  );
 
  
}



// /* ---------- Contact Section ---------- */
// function Contact() {
//   return (
//     <section id="contact" className="contact">
//       <h3>Contact</h3>
//       <p>Email: info@bhalohotel.com</p>
//     </section>
//   );
// }

// /* ---------- Footer Section ---------- */
// function Footer() {
//   return (
//     <footer className="footer">
//       <p>&copy; 2026 Bhalohotel. All rights reserved.</p>
//     </footer>
//   );
// }

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
      <FullAdminDemo />
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
function InfoCard({ title = "Card Title", description = "This is a simple card description.", children }: InfoCardProps) {
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



