import { useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  emailjs.init('4GbpJoL7iX6N-22pO');

  const handleSubmit = (event) => {
    event.preventDefault();

    const params = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    emailjs
      .send('service_ku05cd1', 'template_z24x29x', params)
      .then((response) => {
        console.log('SUCCESS!', response);
        setSuccessMessage('Email sent successfully!');
        setErrorMessage(''); // Clear any previous error
        // Reset the form
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      })
      .catch((error) => {
        console.log('FAILED...', error);
        setErrorMessage('Failed to send email. Please try again.');
        setSuccessMessage(''); // Clear any previous success message
      });
  };

  return (
    <section className="pb-16">
      <p className="text-primary-600 text-center text-xl mb-4 font-bold">
        Have queries? Contact Us
      </p>
      <div className="container mx-auto px-6 rounded-md shadow-md">
        {successMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline">{successMessage}</span>
          </div>
        )}
        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline">{errorMessage}</span>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Your Name</label>
            <input
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Your Email</label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">Subject</label>
            <input
              type="text"
              id="subject"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
            <textarea
              id="message"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-center pb-8">
            <button type="submit" className="bg-primary-600 hover:bg-secondary-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;