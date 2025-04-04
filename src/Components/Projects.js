import Image from 'next/image';

export default function Projects() {
    return (
      <section className="projects">
        <h2>See Our Successful Projects</h2>
        <div className="project-images">
          <div className="project">
            <Image
              src="/images/eneticket.png"
              alt="Eneticket Project"
              className="project-image large"
            />
            <h3>
              <a href="https://eneticket.com/" target="_blank" rel="noopener noreferrer">
                <button className="project-button">Eneticket</button>
              </a>
            </h3>
          </div>

          <div className="project">
            <Image
              src="/images/fixchirp_snip.jpg"
              alt="Fixchirp Project"
              className="project-image"
            />
            <h3>Fixchirp</h3>
          </div>
        </div>
      </section>
    );
  }
