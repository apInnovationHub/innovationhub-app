import Header from 'src/components/Header';
import Hero from 'src/components/Hero';
import WhyUs from 'src/components/WhyUs';
import Team from 'src/components/Team';
import Projects from 'src/components/Projects';
import Footer from 'src/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <WhyUs />
      <Team />
      <Projects />
      <Footer />
    </main>
  );
}
