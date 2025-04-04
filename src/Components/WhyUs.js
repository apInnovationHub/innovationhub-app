import Image from 'next/image';

export default function WhyUs() {
    return (
      <section className="why-us">
        <h2>Why All Peoples Innovation Hub</h2>
        <div className="cards">
          <div className="card">
            <Image
              src="/images/product-prototyping-icon.png"
              alt="Product Prototyping Icon"
              className="icon"
            />
            <h3>Product Prototyping</h3>
            <p>
              With access to state-of-the-art tools and resources, we assist in
              creating prototypes that bring ideas to life.
            </p>
          </div>
          <div className="card">
            <Image
              src="/images/partnership-development-icon.png"
              alt="Partnership Development Icon"
              className="icon"
            />
            <h3>Partnership Development</h3>
            <p>
              We connect innovators with investors, industry experts, and
              potential collaborators.
            </p>
          </div>
          <div className="card">
            <Image
              src="/images/marketing-branding-icon.png"
              alt="Marketing & Branding Icon"
              className="icon"
            />
            <h3>Marketing & Branding</h3>
            <p>
              From crafting compelling brand stories to executing marketing
              campaigns.
            </p>
          </div>
        </div>
      </section>
    );
  }
