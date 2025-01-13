import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-us-page">
      <section className="hero">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-lg text-gray-700 text-center">
              MKWise Homes is a leading property solutions provider based in
              Milton Keynes and Greater London. We specialise in helping
              individuals and families find their dream homes, offering a
              comprehensive range of services to ensure a smooth and
              stress-free experience.
            </p>
          </div>
        </div>
      </section>

      <section className="our-story py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Our Expertise</h2>
              <p className="text-lg text-gray-700">
                With years of experience in the real estate market, MKWise Homes
                has established a strong reputation for providing exceptional
                service and tailored solutions. Our team of dedicated property
                experts possesses in-depth knowledge of the local market,
                ensuring that we can guide you towards the perfect property
                match.
                <br />
                <br />
                We understand that buying or selling a property can be a
                significant decision. That&apos;s why we&apos;re committed to providing
                personalised support and guidance every step of the way.
              </p>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Our Values
              </h2>
              <ul className="list-none p-0">
                <li className="mb-4 flex items-center">
                  <i className="fas fa-check-circle text-secondary-600 mr-3"></i>
                  <span>Customer Focus</span>
                </li>
                <li className="mb-4 flex items-center">
                  <i className="fas fa-check-circle text-secondary-600 mr-3"></i>
                  <span>Integrity</span>
                </li>
                <li className="mb-4 flex items-center">
                  <i className="fas fa-check-circle text-secondary-600 mr-3"></i>
                  <span>Expertise</span>
                </li>
                <li className="mb-4 flex items-center">
                  <i className="fas fa-check-circle text-secondary-600 mr-3"></i>
                  <span>Reliability</span>
                </li>
                <li className="mb-4 flex items-center">
                  <i className="fas fa-check-circle text-secondary-600 mr-3"></i>
                  <span>Innovation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cta py-16">
        <div className="container mx-auto px-4">
          <div className="bg-primary-600 text-white p-8 rounded-lg text-center">
            <p className="text-xl mb-4">
              Ready to find your dream home? We&apos;re here to help!
            </p>
            <p className="mb-6">Contact us today for a free consultation:</p>
            <Link to="/contact">
              <button className="bg-white text-primary-600 hover:bg-secondary-600 hover:text-white font-bold py-2 px-4 rounded">
                GET IN TOUCH
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;