import './contact.css';

function Contact() {
  return (
    <div className="contact-page container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-primary-600">Contact Us</h1>

      <h2 className="text-xl font-semibold mb-4 text-center text-primary-600">Get In Touch Today</h2>
      <h3 className="text-2xl font-semibold mb-8 text-center text-secondary-600">We&apos;re Here To Help!</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="contact-info bg-primary-600 text-white p-6 rounded-lg hover:bg-secondary-600 transition-colors duration-1000 ease-in-out shadow-2xl">
          <div className="flex items-center mb-4">
            <div className="icon" /> 
              <i className="fas fa-map-marker-alt"></i>
            <h2 className="text-lg font-semibold pl-2">Our Location</h2>
          </div>
          <p className="text-white">
            Suite 5, Margaret Powell House, 401-447 <br />
            Midsummer Boulevard, Milton Keynes, <br />
            Buckinghamshire, England, MK9 3BN
          </p>
        </div>
        <div className="contact-info bg-primary-600 text-white p-6 rounded-lg hover:bg-secondary-600 transition-colors duration-1000 ease-in-out shadow-2xl">
         <div className="flex items-center mb-4">
            <div className="icon" />
              <i className="fa-solid fa-envelope"></i>
            <h2 className="text-lg font-semibold pl-2">Send Us An Email</h2>
          </div>
          <p>
            <a href="mailto:contact@mkwisefinancial.com" className="text-white cursor-pointer">contact@mkwisefinancial.com</a>
          </p>
        </div>
        <div className="contact-info bg-primary-600 text-white p-6 rounded-lg hover:bg-secondary-600 transition-colors duration-1000 ease-in-out shadow-2xl">
          <div className="flex items-center mb-4">
            <div className="icon" />
              <i className="fa-solid fa-phone"></i>
            <h2 className="text-lg font-semibold pl-2">Give Us A Call</h2>
          </div>
          <p>
            <a href="tel:+44-7725839574" className="text-white cursor-pointer">+44-7725839574</a> <br />
            <a href="tel:+01908-732244" className="text-white cursor-pointer">+01908-732244</a>
          </p>
        </div>
      </div>

      <div className="map-container mt-20 mb-10">
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.337330989744!2d-0.7582984233759614!3d52.04152803458021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48770dbb2095f389%3A0x72568a712e111d57!2sMK%20Wise%20Financial!5e0!3m2!1sen!2suk!4v1702237395741!5m2!1sen!2suk"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;