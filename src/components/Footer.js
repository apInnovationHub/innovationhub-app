import { RiFacebookCircleFill, RiInstagramFill, RiLinkedinBoxFill, RiLinkedinFill, RiMailFill, RiPhoneFill, RiTiktokFill, RiTwitterXFill } from '@remixicon/react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">

      <div className="newsletter">
        <h3>Subscribe to Our Newsletter</h3>
        <div className="contact-info">
          <div className="contact-item">
            <RiMailFill widths={32} />
            <p>allpeoplesfinancelimited@outlook.com</p>
          </div>
          <div className="contact-item">
            <RiPhoneFill widths={32} />
            <p>+265 801 469 9985</p>
          </div>
        </div>
      </div>

      {
        <div className="footer-content">
          <div className="social-media">
            <h3>Social Media</h3>
            <div className="social-links">
              <a href="https://web.facebook.com/profile.php?id=61575020368447" className="social-link" target="_blank" rel="noopener noreferrer">
                <RiFacebookCircleFill widths={32} color='white'/>
              </a>
              <a href="https://x.com/allpeoples_IH" className="social-link" target="_blank" rel="noopener noreferrer">
                <RiTwitterXFill widths={32} color='white'/>
              </a>
              <a href="https://www.instagram.com/allpeoplesinnovationhub" className="social-link" target="_blank" rel="noopener noreferrer">
                <RiInstagramFill widths={32} color='white'/>
              </a>
              <a href="https://www.tiktok.com/@allpeoples_innovationhub" className="social-link" target="_blank" rel="noopener noreferrer">
                <RiTiktokFill widths={32} color='white'/>
              </a>
              <a href="https://www.linkedin.com/in/all-peoples-innovation-hub-06696a358?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="social-link" target="_blank" rel="noopener noreferrer">
                <RiLinkedinBoxFill widths={32} color='white'/>
              </a>
            </div>
          </div>
          <div className="quick-links">
            <h3>Quick Link</h3>
            <div className="links">
              <a href="/" target="_blank" rel="noopener noreferrer">Home</a>
              <a href="/about" target="_blank" rel="noopener noreferrer">About Us</a>
              <a href="/projects" target="_blank" rel="noopener noreferrer">Projects</a>
              <a href="/services" target="_blank" rel="noopener noreferrer">Services</a>
            </div>
          </div>
          <div className="location">
            <h3>Location</h3>
            <p>Mall of Africa,<br /> Suite 23 Ginnery corner,<br /> Blantyre, Malawi</p>
          </div>
        </div>}
      <p className="copyright">
        © 2025 All Peoples Innovation Hub. All Rights Reserved <br />
      </p>
    </footer>
  );
}
