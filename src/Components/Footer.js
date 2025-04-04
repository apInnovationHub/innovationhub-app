export default function Footer() {
    return (
      <footer className="footer">
        {/* Newsletter Subscription Section */}
        <div className="newsletter">
          <h3>Subscribe to Our Newsletter</h3>
          <div className="contact-info">
            <div className="contact-item">
              <span className="icon">✉️</span>
              <p>allpeoplesfinancelimited@outlook.com</p>
            </div>
            <div className="contact-item">
              <span className="icon">📞</span>
              <p>+265 801 469 9985</p>
            </div>
          </div>
        </div>
  
        {/* Footer Content */}
        <div className="footer-content">
          <div className="social-media">
            <h3>Social Media</h3>
            <div className="social-links">
              <a href="#" className="social-link">
                <span className="icon">📘</span> Facebook
              </a>
              <a href="#" className="social-link">
                <span className="icon">📷</span> Instagram
              </a>
              <a href="#" className="social-link">
                <span className="icon">🎵</span> TikTok
              </a>
              <a href="#" className="social-link">
                <span className="icon">💼</span> LinkedIn
              </a>
            </div>
          </div>
          <div className="quick-links">
            <h3>Quick Link</h3>
            <div className="links">
              <a href="/">Home</a>
              <a href="/about">About Us</a>
              <a href="/projects">Projects</a>
              <a href="/services">Services</a>
            </div>
          </div>
          <div className="location">
            <h3>Location</h3>
            <p>Mall of Africa,<br/> Suite 23 Ginnery corner,<br/> Blantyre, Malawi</p>
          </div>
        </div>
  
        {/* Copyright Notice */}
        <p className="copyright">
          © 2025 All Peoples Innovation Hub. All Rights Reserved <br/>
          Rev~Dee
        </p>
      </footer>
    );
  }