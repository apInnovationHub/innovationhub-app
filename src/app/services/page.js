import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Services() {
  return (
    <main>
      <Header />
      {/* Hero Section */}
      <section className="services-hero">
        <h1>Our Services</h1>
        <p className="quote">
          “It’s not just about your idea, <br />
          we know how to bring it to life”
        </p>
        <p>
          We operate in the intersection of technology, design, and business strategy enabling development of transformational products and services. Our services span from ideation and concept development to partnership development.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-content">
        <div className="main-services">
          <div className="service">
            <img src="/images/product-prototyping-icon.png" alt="Product Prototyping Icon" className="service-icon" />
            <h3>Product Prototyping</h3>
            <p>We assist start-ups in creating prototypes of their ideas, providing a tangible representation of the concept that brings ideas to life.</p>
          </div>
          <div className="service">
            <img src="/images/partnership-development-icon.png" alt="Partnership Development Icon" className="service-icon" />
            <h3>Partnership Development</h3>
            <p>We connect innovators, investors, industry experts, and potential collaborators to foster growth and innovation.</p>
          </div>
          <div className="service">
            <img src="/images/marketing-branding-icon.png" alt="Marketing and Branding Icon" className="service-icon" />
            <h3>Marketing and Branding</h3>
            <p>We craft compelling marketing strategies for businesses, creating campaigns that resonate with target audiences.</p>
          </div>
        </div>
        <div className="additional-services">
          <div className="additional-service">
            <img src="/images/ideation-icon.png" alt="Ideation Icon" className="additional-service-icon" />
            <h4>Ideation and Concept Development</h4>
            <p>We facilitate brainstorming sessions and design thinking workshops to help refine, validate, and develop innovative ideas.</p>
          </div>
          <div className="additional-service">
            <img src="/images/training-icon.png" alt="Training Icon" className="additional-service-icon" />
            <h4>Training and Capacity Building</h4>
            <p>Our workshops and mentorship programs equip individuals with the skills to think innovatively and execute their ideas effectively.</p>
          </div>
          <div className="additional-service">
            <img src="/images/market-research-icon.png" alt="Market Research Icon" className="additional-service-icon" />
            <h4>Market Research and Validation</h4>
            <p>We conduct in-depth market analysis to identify trends, customer needs, and competitive landscapes, ensuring ideas are both viable and impactful.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}