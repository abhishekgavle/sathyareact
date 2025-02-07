import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission (e.g., sending data to an API or server)
    alert('Thank you for reaching out!');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="container my-4">
      <header className="mb-4">
        <h1 className="text-center">Welcome to the Contact Page</h1>
      </header>

      <section className="mb-5">
        <h2>Contact Information</h2>
        <p>If you have any questions, feel free to reach out to us via the contact form below or through the following methods:</p>
        <ul className="list-unstyled">
          <li>
            <strong>Email:</strong>{' '}
            <a href="mailto:info@yourwebsite.com">info@yourwebsite.com</a>
          </li>
          <li>
            <strong>Phone:</strong> 123-456-7890
          </li>
          <li>
            <strong>Address:</strong> 1234 Main St, City, Country
          </li>
          <li>
            <strong>Follow Us:</strong>{' '}
            <a href="https://twitter.com/yourwebsite" target="_blank" rel="noopener noreferrer">Twitter</a> |{' '}
            <a href="https://facebook.com/yourwebsite" target="_blank" rel="noopener noreferrer">Facebook</a>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="mb-4">Contact Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="form-control"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
