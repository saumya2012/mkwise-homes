import { useEffect } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutUsImg1 from './assets/about-company-2.jpg';
import AboutUsImg2 from './assets/floor-plan.jpg';
import AboutUsImg3 from './assets/services.jpg'

function About() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="about-us-page mt-20 text-primary-600">      

      <section className="hero" data-aos="fade">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-lg text-primary-600 text-center">
              MKWise Homes is a leading property solutions provider based in
              Milton Keynes and Greater London. We specialise in helping
              individuals and families find their dream homes, offering a
              comprehensive range of services to ensure a smooth and
              stress-free experience.
            </p>
          </div>
        </div>
      </section>

      <Breadcrumbs pageTitle="About" />

      <section className="mission py-16" data-aos="fade-up" data-aos-delay="100">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-4 text-center uppercase">Our Mission</h2>
          <p className="text-2xl text-secondary-600 text-center font-bold">
            To simplify the property search and transaction process, providing a seamless and stress-free experience for our clients while delivering tailored solutions and expert advice.
          </p>
        </div>
      </section>

      <section className="our-expertise py-16" data-aos="fade-up" data-aos-delay="100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Our Expertise</h2>
              <p className="text-lg text-gray-700">
                With years of experience in the real estate market, MKWise Homes has established a strong reputation for providing exceptional service and tailored solutions. Our team of dedicated property experts possesses in-depth knowledge of the local market, ensuring that we can guide you towards the perfect property match.
                <br />
                <br />
                We understand that buying or selling a property can be a significant decision. That&apos;s why we&apos;re committed to providing personalised support and guidance every step of the way.
                <br />
                <br />
                Based in Milton Keynes and Greater London, we have an intimate understanding of these dynamic property markets. Our local expertise allows us to provide valuable insights and guidance, whether you&apos;re looking to buy, sell, or invest in property in these areas.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src={AboutUsImg1} alt="About Us img" className="w-full rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-us py-16" data-aos="fade-up" data-aos-delay="200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
              <img src={AboutUsImg3} alt="About Us img" className="w-full rounded-lg shadow-md" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
              <p className="text-lg text-gray-700 mb-4">Choosing the right partner is crucial for finding your dream home. At MKWise Homes, we stand out for the following reasons:</p>
              <div className="icon-box mb-6 flex items-center flex-wrap">
                <div className="icon mr-4 text-2xl">
                  <i className="fas fa-check-circle text-secondary-600"></i>
                </div>
                <h4 className="font-bold text-lg mb-2">
                  Tailored Solutions
                </h4>
                <p className="text-gray-700">
                  We don&apos;t offer one-size-fits-all solutions. We&apos;ll work closely with you to understand your unique needs and provide customized solutions.
                </p>
              </div>
              <div className="icon-box mb-6 flex items-center flex-wrap">
                <div className="icon mr-4 text-2xl">
                  <i className="fas fa-chart-line text-secondary-600"></i>
                </div>
                <h4 className="font-bold text-lg mb-2">Local Expertise</h4>
                <p className="text-gray-700">
                  Our team of property experts possesses in-depth knowledge of the local market and a proven track record of helping clients find their dream homes.
                </p>
              </div>
              <div className="icon-box mb-6 flex items-center flex-wrap">
                <div className="icon mr-4 text-2xl">
                  <i className="fas fa-users text-secondary-600"></i>
                </div>
                <h4 className="font-bold text-lg mb-2">
                  Customer Focus
                </h4>
                <p className="text-gray-700">
                  Your satisfaction is our top priority. We strive to exceed your expectations and build long-lasting relationships with our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-areas py-16" data-aos="fade-up" data-aos-delay="300">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Areas We Cover</h2>
              <ul className="list-none p-0">
                <li className="mb-4 flex items-center">
                    <i className="fas fa-check-circle text-secondary-600 mr-3"></i>
                    <span>Central Milton Keynes</span>
                  </li>
                <li className="mb-4 flex items-center">
                  <i className="fas fa-check-circle text-secondary-600 mr-3"></i>
                  <span>Bletchley</span>
                </li>
                <li className="mb-4 flex items-center">
                    <i className="fas fa-check-circle text-secondary-600 mr-3"></i>
                    <span>Luton</span>
                  </li>
                <li className="mb-4 flex items-center">
                  <i className="fas fa-check-circle text-secondary-600 mr-3"></i>
                  <span>Wolverton</span>
                </li>
                <li className="mb-4 flex items-center">
                    <i className="fas fa-check-circle text-secondary-600 mr-3"></i>
                    <span>Stony Stratford</span>
                  </li>
                <li className="mb-4 flex items-center">
                  <i className="fas fa-check-circle text-secondary-600 mr-3"></i>
                  <span>Newport Pagnell</span>
                </li>
                <li className="mb-4 flex items-center">
                    <i className="fas fa-check-circle text-secondary-600 mr-3"></i>
                    <span>Olney</span>
                  </li>
                <li className="mb-4 flex items-center">
                  <i className="fas fa-check-circle text-secondary-600 mr-3"></i>
                  <span>Woburn Sands</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src={AboutUsImg2} alt="About Us img" className="w-full rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </section>

      <section className="cta py-16" data-aos="fade-up" data-aos-delay="300">
        <div className="container mx-auto px-6">
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