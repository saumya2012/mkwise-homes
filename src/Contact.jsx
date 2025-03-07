import './contact.css';
import Breadcrumbs from "./Breadcrumbs";
import ContactForm from './ContactForm';

function Contact() {
  return (
    <div className="contact-page mx-auto mt-20 text-primary-600">

      <section className="hero">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-gray-700 text-center">Have questions or want to learn more about our services?  You can reach us by phone, email, or by filling out the contact form below. Our team is ready to assist you.</p>
          </div>
        </div>
      </section>

      <Breadcrumbs pageTitle="Contact" />

      <section className="container mx-auto py-16">
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
              <a href="mailto:contact@mkwisehomes.co.uk" className="text-white cursor-pointer">contact@mkwisehomes.co.uk</a>
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
      </section>

      <ContactForm />

      <section className="container mx-auto map-container py-16">
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
      </section>
    </div>
  );
}

export default Contact;