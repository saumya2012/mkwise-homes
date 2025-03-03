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
            <h2 className="text-white uppercase font-bold text-xl md:text-5xl py-6 sm:py-8">Landlords Required</h2>
            <Link to="/about">
              <button className="theme-btn bg-primary-600 border-primary-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300 hover:bg-white hover:text-primary-600 border-2">
                <span className="txt">About Us</span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="our-story py-16" data-aos="fade-up" data-aos-delay="100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-lg text-gray-700">
                MKWise Homes was founded with a mission to provide landlords with a hassle-free and secure property management experience. We understand the challenges of renting out properties, from tenant uncertainties to financial risks. That’s why we specialise in offering a guaranteed rent scheme, ensuring landlords receive a reliable, fixed income—regardless of tenant occupancy or payment status.
                <br />
                <br />
                With years of expertise in the property market, we have built a reputation for professionalism, integrity, and tailored solutions. Our strong partnerships with local authorities allow us to provide secure, long-term tenancies, giving landlords peace of mind while maximising their investments.
                <br />
                <br />
                Our Guaranteed Rent Scheme ensures that landlords get paid on time, every month, with no gaps—even during void periods. We take care of tenant sourcing, property management, and compliance, so you don’t have to worry about late payments, unexpected costs, or legal complexities. Whether you have a single property or a portfolio, our scheme guarantees financial stability while offering a completely hands-off experience.
                <br />
                <br />
                Based in Milton Keynes and Greater London, we have in-depth knowledge of these thriving property markets. Whether you own a single property or multiple investments, our goal is to simplify property management and eliminate the common stresses of letting.
                <br />
                <br />
                At MKWise Homes, we’re not just a property management company—we’re your trusted partner in securing financially stable and risk-free rental income.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src={HomeImg1} alt="About Us img" className="w-full rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </section>
      {/* end of about section */}

      {/* Comparison section */}
      <section className="comparison-table py-16" data-aos="fade-up" data-aos-delay="150">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary-600">Guaranteed Rent vs Traditional Rent</h2>
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-center">
                    <thead>
                    <tr className="bg-gray-200">
                      <th className="px-4 py-2 text-lg font-semibold"></th>
                      <th className="px-4 py-2 text-lg font-semibold">Traditional Let Only</th>
                      <th className="px-4 py-2 text-lg font-semibold">Traditional Let & Managed</th>
                      <th className="py-2 text-xl font-bold uppercase">
                        <span className="block">Guaranteed</span>
                        <span className="block">Rent</span>
                      </th>
                    </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="px-4 py-2 font-medium">Marketing Your Property</td>
                        <td>✓</td>
                        <td>✓</td>
                        <td>✓</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2 font-medium">Locating A Tenant</td>
                        <td></td>
                        <td>✓</td>
                        <td>✓</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2 font-medium">Regular Inspections Of Your Property</td>
                        <td></td>
                        <td></td>
                        <td>✓</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2 font-medium">Maintenance & Repair</td>
                        <td></td>
                        <td></td>
                        <td>✓</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2 font-medium">Income During Void Periods</td>
                        <td></td>
                        <td></td>
                        <td>✓</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2 font-medium">Rental Value PCM</td>
                        <td>£1,600</td>
                        <td>£1,600</td>
                        <td className="font-bold text-primary-600">£1,800</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2 font-medium">Rental Value Per Annum</td>
                        <td>£19,200</td>
                        <td>£19,200</td>
                        <td className="font-bold text-primary-600">£21,600</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2 font-medium">Typical Voids (One Month)</td>
                        <td>£1,600</td>
                        <td>£1,600</td>
                        <td>£0</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2 font-medium">Tenant Find Fee @ 10%</td>
                        <td>£1,920</td>
                        <td>£1,920</td>
                        <td className="font-bold text-primary-600">£0</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2 font-medium">Property Management Fee @ 12%</td>
                        <td></td>
                        <td>£960</td>
                        <td></td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2 font-medium">Net Income PCM</td>
                        <td>£1,306</td>
                        <td>£1,226</td>
                        <td className="font-bold text-primary-600">£1,800</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">Net Income PA</td>
                        <td>£15,680</td>
                        <td>£14,720</td>
                        <td className="font-bold text-primary-600">£21,600</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-center mb-4">* Based on a 2 or 3 bedroom with an advertised rate of £1,600pcm</p>
                </div>
              </div>
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
              <h3 className="text-2xl font-semibold mb-6">Your Property Journey, Simplified</h3>
              <p className="text-lg text-gray-700 mb-6">In addition to property management services, we provide complete solution to landlords. We provide 360 solution to landlords which starts with property sourcing -&gt; Mortgages -&gt; Conveyancing(Legal assistance) -&gt; Guaranteed rent -&gt; Accounting with the help of our group companies and partners.</p>

              <h3 className="text-2xl font-semibold mb-6">Why Choose MKWise Homes?</h3>
              <p className="text-lg text-gray-700 mb-6">At MKWise Homes, we&apos;re passionate about delivering exceptional property solutions, including our <span className="font-bold">guaranteed rent services</span>. Our dedicated team provides expert guidance, outstanding service, and a seamless experience, ensuring your property journey is smooth and stress-free.
              <br />
              <br />
              We believe in building long-lasting relationships with our clients, based on trust, transparency, and mutual respect. Your satisfaction is our top priority.</p>

              <h3 className="text-2xl font-semibold mb-6">How We Help you?</h3>
              <p className="text-lg text-gray-700 mb-6">
              We understand the pain of landlords and its management which involves different services starting from searching for a new home to the stage of renting it and management.That&apos;s why we offer a comprehensive suite of services to guide you through every step of the process.
              <br />
              <br />
              From property sourcing to mortgage advice, legal assistance, accounting, guaranteed rent to property management, we&apos;re your one-stop shop for all your property needs.</p>
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
                    <img src={HomeImg3} alt="About Us img" className="w-full rounded-lg shadow-md" />
                  </div>
                </div>
              </div>
            </section>

      {/* Call to Action Section */}
      <section className="cta py-16">
        <div className="container mx-auto px-6">
          <div className="bg-primary-600 text-white p-8 rounded-lg text-center">
            <p className="text-xl mb-4">Ready to rent with a complete peace of mind?</p>
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