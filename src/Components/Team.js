import Image from 'next/image';
export default function Team() {
    return (
      <section className="team">
        <div className="team-header">
          <h2>Meet the Innovators Driving <br/>  All Peoples Innovation Hub</h2>

        </div>
        <div className="team-members">
          <div className="member">
          <Image
              src="/images/Tadala.jpg"
              alt="Tadala Nchembe, Executive Assistant"
              className="member-image"
            />
            <h3>Tadala Nchembe</h3>
            <p>Executive Assistant</p>
          </div>
          <div className="member">
            <Image
              src="/images/Asante.jpg"
              alt="Asante, Chief Executive Officer"
              className="member-image"
            />
            <h3>Mr Santinal Brown</h3>
            <p>Chief Executive Officer</p>
          </div>
          <div className="member">
          <Image
               src="/images/Mr_Nchembe.jpg"
               alt="Mr_Nchembe, The Director"
               className="member-image"
             />
            <h3>Mr William Nchembe</h3>
            <p>The Managing Director</p>

          </div>
        </div>
      </section>
    );
  }
