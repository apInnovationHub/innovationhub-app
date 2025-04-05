import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function About() {
  return (
    <main>
      <Header />
      {/* Hero Section */}
      <section className="about-hero">
        <h1>Get To Know Us</h1>
        <Link href="/contact">
          <button className="lets-talk-btn">Let’s Talk</button>
        </Link>
      </section>

      {/* Purpose and Story Section */}
      <section className="about-content">
        <div className="purpose">
          <h2>Our Purpose</h2>
          <p>
            At All Peoples Finance Limited, we empower and support start-ups across various industries by providing strategic investments and hands-on guidance. Our goal is to drive growth, foster innovation, and create lasting value for businesses and communities.
          </p>
        </div>
        <div className="story">
          <h2>Our Story</h2>
          <p>
            Founded in September 2023, All Peoples Finance Limited is a venture capital firm dedicated to helping start-ups succeed. Based in Suite 23, Hall of Africa at Ginnery Corner, Blantyre, we are at the center of Malawi’s thriving business hub. We work closely with entrepreneurs through every stage of their journey, turning ideas into thriving businesses.
          </p>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          {/* Row 1: 3 members */}
          <div className="team-member">
            <img src="/images/daniel-chima.jpg" alt="Daniel Chima" className="team-member-image" />
            <h3>Daniel R Chima</h3>
            <p>CyberSecurity Specialist</p>

          </div>
          <div className="team-member">
            <img src="/images/joana-botha.jpg" alt="Joanna Botha" className="team-member-image" />
            <h3>Joanna Botha</h3>
            <p>Business Development Director</p>
          </div>
          <div className="team-member">
            <img src="/images/chisomo-dambo.jpg" alt="Chisomo Dambo" className="team-member-image" />
            <h3>Chisomo Dambo</h3>
            <p>Software Engineering Director</p>
          </div>
          {/* Row 2: 2 members */}
          <div className="team-member">
            <img src="/images/lawrence-makhaya.jpg" alt="Lawrence Makhaya" className="team-member-image" />
            <h3>Lawrence Makhaya</h3>
            <p>UX/UI Designing Director</p>
          </div>
          <div className="team-member">
            <img src="/images/thandie-msiska.jpg" alt="Thandiwe Msiska" className="team-member-image" />
            <h3>Thandiwe Msiska</h3>
            <p>Projects Director</p>
          </div>
          {/* Row 3: 4 members */}
          <div className="team-member">
            <img src="/images/emmanuel-chifisi.jpg" alt="Emmanuel Chifisi" className="team-member-image" />
            <h3>Emmanuel Chifisi</h3>
            <p>Software Engineer</p>
          </div>
          <div className="team-member">
            <img src="/images/tenson-banda.jpg" alt="Tenson Banda" className="team-member-image" />
            <h3>Tenson Banda</h3>
            <p>UX/UI Designer</p>
          </div>
          <div className="team-member">
            <img src="/images/augustine-kawonga.jpg" alt="Augustine Kawonga" className="team-member-image" />
            <h3>Augustine Kawonga</h3>
            <p>Software Engineer</p>
          </div>
          <div className="team-member">
            <img src="/images/francine.jpg" alt="Francine Chavinda" className="team-member-image" />
            <h3>Francine Chavinda</h3>
            <p>Software Engineer</p>
          </div>
          <div className="team-member">
            <img src="/images/elapo-trigu.jpg" alt="Elapo Trigu" className="team-member-image" />
            <h3>Elapo Trigu</h3>
            <p>Software Engineer</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
