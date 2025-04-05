import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Projects() {
  return (
    <main>
      <Header />
      {/* Hero Section */}
      <section className="projects-hero">
        <div className="hero-content">
          <h1>Project Management</h1>
          <p>
            Discover how we deliver exceptional results through innovative project management strategies, empowering startups to turn their ideas into reality.
          </p>
          <Link href="/contact">
            <button className="cta-button">Let’s Talk</button>
          </Link>
        </div>
      </section>

      {/* Approach Section */}
      <section className="approach-section">
        <h2>Our Approach to Project Management</h2>
        <p>
          At All Peoples Innovation Hub, we take a hands-on approach to project management, ensuring every startup we work with achieves its full potential. From ideation to execution, we provide strategic guidance, leveraging our expertise in product prototyping, partnership development, and marketing to drive success. Our collaborative process ensures that each project aligns with the startup’s vision while meeting market demands.
        </p>
      </section>

      <section className="projects-section">
      <h2>Our Success Stories</h2>
      <div className="projects-grid">
        {[
          {
            id: 1,
            img: "/images/eneticket.png",
            title: "Eneticket",
            description:
              "A seamless digital platform for event ticketing, Eneticket simplifies the process for organizers and attendees. We supported Eneticket through product prototyping and marketing strategies, helping them reach a wider audience and streamline operations.",
          },
          {
            id: 2,
            img: "/images/e-clinic.png",
            title: "E-clinic",
            description:
              "E-clinic revolutionizes healthcare access with an online platform for consultations and medical records. Our team provided partnership development and technical guidance to ensure a user-friendly experience and scalability.",
          },
          {
            id: 3,
            img: "/images/fixchirp.png",
            title: "Fixchirp",
            description:
              "Fixchirp connects users with local service providers for quick and reliable home solutions. We assisted with market research and branding, enabling Fixchirp to establish a strong presence in the local market.",
          },
        ].map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image-wrapper">
              <img src={project.img} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.id === 1 && ( // Only show the button for Eneticket (id: 1)
              <a href="https://eneticket.com/" target="_blank" rel="noopener noreferrer">
                <button className="see-more">See More</button>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>

      {/* Call to Action Section */}
      <section className="call-to-action">
        <h2>Ready to Start Your Project?</h2>
        <p>
          Let’s collaborate to bring your ideas to life. Contact us today to discuss how we can support your startup’s journey.
        </p>
        <Link href="/contact">
          <button className="cta-button">Get in Touch</button>
        </Link>
      </section>
      <Footer />
    </main>
  );
}
