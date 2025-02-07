import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  return (
    <div className="container my-4">
      <header className="mb-4">
        <h1 className="text-center">Welcome to About Page</h1>
      </header>

      <section className="mb-4">
        <h2 className="mb-3">Welcome to React</h2>
        <p>
          React is a popular JavaScript library for building user interfaces, maintained by Facebook and a community of developers. It helps you create fast and dynamic web applications using components.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="mb-3">Our Mission</h2>
        <p>
          At [Your Website Name], our mission is simple: to provide an intuitive and user-friendly platform that empowers developers to create amazing web applications with ease.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="mb-3">Our Story</h2>
        <p>
          [Your Website Name] was founded in [Year] with the vision to create tools and resources that help developers and businesses thrive. Over the years, we’ve continuously evolved to meet the needs of our growing community.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="mb-3">What We Offer</h2>
        <p>
          We offer a variety of resources, tools, and support for developers, including tutorials, guides, and code samples. Whether you are just starting out or are a seasoned professional, we have something for everyone.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="mb-3">Meet the Team</h2>
        <p>
          Our team is composed of passionate developers, designers, and educators who are dedicated to making your experience better. We work together to build high-quality resources and content for our community.
        </p>
        <ul className="list-unstyled">
          <li>John Doe – CEO</li>
          <li>Jane Smith – Lead Developer</li>
          <li>Michael Brown – Designer</li>
        </ul>
      </section>

      <footer className="mt-4">
        <h2 className="mb-3">Contact Us</h2>
        <p>
          Feel free to reach out if you have any questions or would like to know more about what we do.
        </p>
        <ul className="list-unstyled">
          <li>
            Email: <a href="mailto:info@yourwebsite.com">info@yourwebsite.com</a>
          </li>
          <li>Phone: 123-456-7890</li>
          <li>
            Social: <a href="https://twitter.com/yourwebsite">Twitter</a> |{' '}
            <a href="https://facebook.com/yourwebsite">Facebook</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default About;
