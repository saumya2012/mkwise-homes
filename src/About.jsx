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
            <p className="text-lg text-primary-600 text-center">MKWise Homes is a trusted provider of property solutions, offering seamless and tailored housing services across Milton Keynes and Greater London. Whether you&apos;re a landlord seeking hassle-free property management, an investor looking to maximize returns, or a tenant searching for the perfect home, we are here to simplify the process.</p>
          </div>
        </div>
      </section>

      <Breadcrumbs pageTitle="About" />

      <section className="mission py-16" data-aos="fade-up" data-aos-delay="100">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-4 text-center uppercase">Our Mission</h2>
          <p className="text-2xl text-secondary-600 text-center font-bold">
            To provide innovative, stress-free property solutions by leveraging our expertise and local market knowledge. We strive to create value for landlords, investors, and tenants by delivering reliable services, expert advice, and comprehensive property management solutions.
          </p>
        </div>
      </section>

      <section className="our-expertise py-16" data-aos="fade-up" data-aos-delay="100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Our Expertise</h2>
              <p className="text-lg text-gray-700">At MKWise Homes, we specialise in providing landlords with a seamless and stress-free property management experience. With extensive expertise in the rental market and strong collaborations with local authorities, we ensure a secure and consistent rental income—regardless of tenant defaults or vacancies—through our guaranteed rent scheme.</p>
              <br />
              <br />
              <p className="text-lg text-gray-700">Our mission is to simplify the letting process, offering landlords complete peace of mind while maximising their property investments without the usual risks and challenges.</p>
              <br />
              <br />
              <p className="text-lg text-gray-700">We pride ourselves on our flexible and adaptive approach, making informed decisions tailored to each situation. Guided by our core values of professionalism, reliability, and integrity, we are committed to delivering quality service and building long-term relationships with our clients.</p>
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
              <h2 className="text-3xl font-bold mb-4">Our Expertise</h2>
              <p className="text-lg text-gray-700 mb-4">With years of experience in the real estate industry, our dedicated team has built a strong reputation for delivering high-quality property solutions. We specialise in:</p>

              <div className="icon-box mb-6 flex items-center flex-wrap">
                <div className="icon mr-4 text-2xl">
                  <i className="fas fa-check-circle text-secondary-600"></i>
                </div>
                <h4 className="font-bold text-lg mb-2">
                Guaranteed Rent Services
                </h4>
                <p className="text-gray-700">Enjoy peace of mind with fixed rental income, regardless of occupancy status.</p>
              </div>

              <div className="icon-box mb-6 flex items-center flex-wrap">
                <div className="icon mr-4 text-2xl">
                  <i className="fas fa-check-circle text-secondary-600"></i>
                </div>
                <h4 className="font-bold text-lg mb-2">
                Property Management
                </h4>
                <p className="text-gray-700">We handle everything from tenant sourcing to maintenance, ensuring your property is well-managed.</p>
              </div>

              <div className="icon-box mb-6 flex items-center flex-wrap">
                <div className="icon mr-4 text-2xl">
                  <i className="fas fa-check-circle text-secondary-600"></i>
                </div>
                <h4 className="font-bold text-lg mb-2">
                Corporate Lets & Serviced Accommodation
                </h4>
                <p className="text-gray-700">Providing housing solutions for professionals, contractors, and businesses.</p>
              </div>

              <div className="icon-box mb-6 flex items-center flex-wrap">
                <div className="icon mr-4 text-2xl">
                  <i className="fas fa-check-circle text-secondary-600"></i>
                </div>
                <h4 className="font-bold text-lg mb-2">
                Investment Opportunities
                </h4>
                <p className="text-gray-700">Helping investors grow their portfolios with strategic property acquisitions.</p>
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
                    <span>Milton Keynes</span>
                  </li>
                <li className="mb-4 flex items-center">
                  <i className="fas fa-check-circle text-secondary-600 mr-3"></i>
                  <span>Bedford</span>
                </li>
                <li className="mb-4 flex items-center">
                    <i className="fas fa-check-circle text-secondary-600 mr-3"></i>
                    <span>Northampton</span>
                  </li>
                <li className="mb-4 flex items-center">
                  <i className="fas fa-check-circle text-secondary-600 mr-3"></i>
                  <span>West London</span>
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