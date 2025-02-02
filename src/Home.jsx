import "./Home.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroVideo from "./assets/hero-carousel/hero-video.mp4";
import HomeImg1 from "./assets/property-4.jpg";
import HomeImg2 from './assets/about-company-1.jpg';
import HomeImg3 from './assets/floor-plan.jpg';

function Home() {
  useEffect(() => {
      AOS.init();
    }, [])
  return (
    <div className="home-page mt-16 md:mt-20">

      {/* Hero Section */}

      <section className="hero relative">
        <video autoPlay muted loop className="w-100" id="myVideo">
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hero-content">
          <div>
            <p className="text-white text-xl">Welcome to MKWise Homes</p>
            <h2 className="text-white uppercase font-bold text-xl md:text-5xl py-6 sm:py-8">Find your next home</h2>
            <Link to="/about">
              <button className="theme-btn bg-primary-600 border-primary-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300 hover:bg-white hover:text-primary-600 border-2">
                <span className="txt">About Us</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
      

      {/* About Section */}

      <section className="our-story py-16" data-aos="fade-up" data-aos-delay="100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-lg text-gray-700">
                MKWise Homes was founded on the belief that everyone deserves a place to call home. With a focus on customer satisfaction and a passion for property, we&apos;ve been helping individuals and families find their dream homes.
                <br />
                <br />
                With years of experience in the real estate market, MKWise Homes has established a strong reputation for providing exceptional service and tailored solutions. Our team of dedicated property experts possesses in-depth knowledge of the local market, ensuring that we can guide you towards the perfect property match.
                <br />
                <br />
                We understand that buying or selling a property can be a significant decision. That&apos;s why we&apos;re committed to providing personalised support and guidance every step of the way.
                <br />
                <br />
                Based in Milton Keynes and Greater London, we have an intimate understanding of these dynamic property markets. Our local expertise allows us to provide valuable insights and guidance, whether you&apos;re looking to buy, sell, or invest in property in these areas.
                <br />
                <br />
                Whether you&apos;re a first-time buyer, seasoned investor, or looking to relocate, we&apos;re here to help you find the perfect property and make your transition smooth and stress-free.
                <br />
                <br />
                At MKWise Homes, we&apos;re more than just a property solutions provider. We&apos;re your partners in finding the perfect place to build your future.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src={HomeImg1} alt="About Us img" className="w-full rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-us py-16" data-aos="fade-up" data-aos-delay="200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <img src={HomeImg2} alt="About Us img" className="w-full rounded-lg shadow-md" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
              <h3 className="text-2xl font-semibold mb-6">
                Your Property Journey, Simplified
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                From property search and selection to mortgage advice and legal
                assistance, we&apos;re with you every step of the way.
              </p>

              <h3 className="text-2xl font-semibold mb-6">
                Why Choose MKWise Homes?
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                We&apos;re passionate about helping you find the perfect property that
                meets your needs and aspirations. Our team is dedicated to
                providing exceptional service, expert guidance, and a seamless
                experience.
              </p>

              <h3 className="text-2xl font-semibold mb-6">
                Our Commitment to You
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                We believe in building long-lasting relationships with our
                clients, based on trust, transparency, and mutual respect. Your
                satisfaction is our top priority.
              </p>

              <h3 className="text-2xl font-semibold mb-6">
                How We Help You Find Your Dream Home
              </h3>
              <p className="text-lg text-gray-700 mb-4">We understand that searching for a new home can be overwhelming. That&apos;s why we offer a comprehensive suite of services to guide you through every step of the process.</p>
              <p className="text-lg mb-6">From property search and viewings to mortgage advice and legal assistance, we&apos;re your one-stop shop for all your property needs.</p>

            </div>
          </div>
        </div>
      </section>

      {/* Property Requirements Section */}
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
                    <img src={HomeImg3} alt="About Us img" className="w-full rounded-lg shadow-md" />
                  </div>
                </div>
              </div>
            </section>

      {/* Call to Action Section */}
      <section className="cta py-16">
        <div className="container mx-auto px-6">
          <div className="bg-primary-600 text-white p-8 rounded-lg text-center">
            <p className="text-xl mb-4">
              Ready to find your dream home? We&apos;re here to help!
            </p>
            <p className="mb-6">Contact us today for a free consultation:</p>
            <Link to="/contact">
              <button className="bg-white text-primary-600 font-bold py-2 px-4 rounded hover:bg-secondary-600 hover:text-white transition-colors duration-300">
                GET IN TOUCH
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;