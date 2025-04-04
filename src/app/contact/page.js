"use client";

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Contact() {
  return (
    <main>
      <Header />
      {/* Hero Section with Background Image */}
      <section className="contact-hero"></section>

      {/* Content Section with White Background */}
      <section className="contact-content-section">
        <div className="contact-content">
          <h1>
            Get in touch with <br />
            All Peoples Innovation Hub
          </h1>
          <div className="contact-info">
            <p>
              Mall of Africa,
              Suite 23<br />
              Ginnery Corner,
              Blantyre<br />
              Malawi
            </p>
           
            <div className="contact-details">
              <div className="contact-item">
                <span className="icon">✉️</span>
                <p>allpeoplesfinancelimited@outlook.com</p>
              </div>
              <div className="contact-item">
                <span className="icon">📞</span>
                <p>+265 881 469 9985</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <h2>Leave us a message</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const fullName = formData.get('fullName');
                const email = formData.get('email');
                const message = formData.get('message');
                const mailtoLink = `mailto:allpeoplesfinancelimited@outlook.com?subject=Message from ${encodeURIComponent(fullName)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(email)}`;
                window.location.href = mailtoLink;
              }}
            >
              <label htmlFor="contactFullName">Full Name</label>
              <input id="fullNameInput" type="text" name="fullName" placeholder="Full Name" required />
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" placeholder="Email" required />
              <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
              <button type="submit">SUBMIT</button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}