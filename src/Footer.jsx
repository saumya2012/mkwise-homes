import './footer.css';
import logo from './assets/logo-xl.svg';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-around items-start">

        <div className="mb-6 md:mb-0 md:w-1/3">
          <img src={logo} alt="Your Logo" className=" mx-auto md:mx-0" />
          <p className="text-gray-700 text-base mt-4 text-center md:text-left"> 
            Providing tailored housing solutions with expertise, reliability, and a commitment to excellence.
          </p>
          <p className="text-gray-600 text-sm text-center md:text-left">
            Milton Keynes & Greater London
          </p>
        </div>

        <div className="mb-6 md:mb-0 md:w-1/4"> 
          <div className="flex items-center">
            <h3 className="text-lg font-bold text-center md:text-left text-primary-600">Quick Links</h3>
          </div>
          <ul className="list-none p-0">
            <li className="mb-2">
              <a href="/" className="text-primary-600 hover:text-secondary-600 font-semibold">Home</a>
            </li>
            <li className="mb-2">
              <a href="/about" className="text-primary-600 hover:text-secondary-600 font-semibold">About Us</a>
            </li>
            <li>
              <a href="/contact" className="text-primary-600 hover:text-secondary-600 font-semibold">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="md:w-1/4">
          <div className="flex items-center"> 
            <h3 className="text-lg font-bold text-center md:text-left">Contact Info</h3> 
          </div>
          <div className="flex flex-col items-start">
            <div className="flex items-start mb-2">
              <i className="fa-solid fa-phone mt-1 mr-2"></i> 
              <div> 
                <a href="tel:+44-7725839574" className="cursor-pointer">+44-7725839574</a><span> | </span>
                <a href="tel:+01908-732244" className="cursor-pointer">+01908-732244</a>
              </div>
            </div>
            <div className="flex items-center mb-2">
              <i className="fa-solid fa-envelope mr-2"></i> 
              <a href="mailto:info@asklettings.co.uk" className="cursor-pointer">contact@mkwisefinancial.com</a>
            </div>
            <p className="flex items-start">
              <i className="fas fa-map-marker-alt mr-2 mt-1"></i>
              <span className="">
                Suite 5, Margaret Powell House, 401-447 <br />
                Midsummer Boulevard, Milton Keynes, <br />
                Buckinghamshire, England, MK9 3BN
              </span>
            </p>
          </div>
        </div>          
        </div>
        <div className="text-center mt-6 text-gray-500 text-sm">
          &copy; Copyright {currentYear} MKWise Homes. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;