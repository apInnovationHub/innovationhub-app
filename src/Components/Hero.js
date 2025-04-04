import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero">
      <h1>
        Driving Innovation,
        <br />
        Shaping the Future
      </h1>
      <p>
        At All Peoples Innovation Hub, we ideate, solve real-world problems,
       <br/> and bring to market solutions that tackle today’s challenges.
      </p>
      <Link href="/contact">
        <button>Let’s Talk</button>
      </Link>
    </section>
  );
}