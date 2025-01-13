import "./Home.css";
import { Link } from "react-router-dom";
import heroImage from "./assets/hero-image.png";
import storyImage from "./assets/home-bg.png";

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero relative">
        <img
          src={heroImage}
          alt="MKWise Homes"
          className="w-full h-96 object-cover"
        />
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold mt-32 mb-4 text-white">
              Welcome to MKWise Homes
            </h1>
            <p className="text-lg text-white text-center">
              Your trusted partner in finding the perfect property in Milton
              Keynes and Greater London.
            </p>
            <div className="mt-6">
              <Link to="/contact">
                {/* Link to contact page */}
                <button className="bg-primary-600 hover:bg-secondary-600 text-white font-bold py-2 px-4 rounded">
                  Get In Touch
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Guaranteed Rent Section */}
      <section className="guaranteed-rent py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-4">
              Find Your Dream Home with Ease
            </h2>
            <p className="text-lg text-gray-700 text-center mb-8">
              We make the process simple, transparent, and stress-free.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <ul className="list-none p-0">
                  <li className="mb-4 flex items-center">
                    <i className="fas fa-check-circle text-secondary-600 mr-3"></i>
                    <span>Expert Advice</span>
                  </li>
                  <li className="mb-4 flex items-center">
                    <i className="fas fa-check-circle text-secondary-600 mr-3"></i>
                    <span>Tailored Solutions</span>
                  </li>
                  <li className="mb-4 flex items-center">
                    <i className="fas fa-check-circle text-secondary-600 mr-3"></i>
                    <span>Wide Range of Properties</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="list-none p-0">
                  <li className="mb-4 flex items-center">
                    <i className="fas fa-check-circle text-secondary-600 mr-3"></i>
                    <span>Dedicated Support</span>
                  </li>
                  <li className="mb-4 flex items-center">
                    <i className="fas fa-check-circle text-secondary-600 mr-3"></i>
                    <span>Local Expertise</span>
                  </li>
                  <li className="mb-4 flex items-center">
                    <i className="fas fa-check-circle text-secondary-600 mr-3"></i>
                    <span>Smooth Transactions</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="list-none p-0">
                  <li className="mb-4 flex items-center">
                    <i className="fas fa-check-circle text-secondary-600 mr-3"></i>
                    <span>Personalized Service</span>
                  </li>
                  <li className="mb-4 flex items-center">
                    <i className="fas fa-check-circle text-secondary-600 mr-3"></i>
                    <span>Trusted Advisors</span>
                  </li>
                  <li className="mb-4 flex items-center">
                    <i className="fas fa-check-circle text-secondary-600 mr-3"></i>
                    <span>Your Dream Home Awaits</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="what-we-offer py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
            <h3 className="text-2xl font-semibold mb-6">
              Your Property Journey, Simplified
            </h3>
            <p className="text-lg text-gray-700 text-center mb-6">
              From property search and selection to mortgage advice and legal
              assistance, we&apos;re with you every step of the way.
            </p>

            <h3 className="text-2xl font-semibold mb-6">
              Why Choose MKWise Homes?
            </h3>
            <p className="text-lg text-gray-700 text-center mb-6">
              We&apos;re passionate about helping you find the perfect property that
              meets your needs and aspirations. Our team is dedicated to
              providing exceptional service, expert guidance, and a seamless
              experience.
            </p>

            <h3 className="text-2xl font-semibold mb-6">
              Our Commitment to You
            </h3>
            <p className="text-lg text-gray-700 text-center mb-6">
              We believe in building long-lasting relationships with our
              clients, based on trust, transparency, and mutual respect. Your
              satisfaction is our top priority.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-lg text-gray-700">
                MKWise Homes was founded on the belief that everyone deserves a
                place to call home. With a focus on customer satisfaction and a
                passion for property, we&apos;ve been helping individuals and
                families find their dream homes.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src={storyImage}
                alt="Our Story"
                className="w-full rounded-lg shadow-md"
              />
            </div>
          </div>
          <div className="mt-8">
            <p className="text-lg text-gray-700">
              Our journey began in Milton Keynes, and we&apos;ve since expanded our
              services to Greater London. We&apos;re proud to be a trusted name in
              the real estate industry, known for our commitment to excellence
              and personalized service.
              <br />
              <br />
              At MKWise Homes, we&apos;re more than just a property solutions
              provider. We&apos;re your partners in finding the perfect place to
              build your future.
            </p>
          </div>
        </div>
      </section>

      {/* How We Help You Find Your Dream Home Section */}
      <section className="guaranteed-rents-explained py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-4">
              How We Help You Find Your Dream Home
            </h2>
            <p className="text-lg text-gray-700 text-center mb-6">
              We understand that searching for a new home can be overwhelming.
              That&apos;s why we offer a comprehensive suite of services to guide
              you through every step of the process.
            </p>
            <p className="text-lg text-gray-700 text-center">
              From property search and viewings to mortgage advice and legal
              assistance, we&apos;re your one-stop shop for all your property needs.
            </p>
          </div>
        </div>
      </section>

      {/* Property Requirements Section */}
      <section className="property-requirements py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-4">Areas We Cover</h2>
            <p className="text-lg text-gray-700 text-center mb-8">
              We are currently seeking 1-5 bedroom properties in the following
              areas:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 3-column grid on desktop */}
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
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
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

export default Home;