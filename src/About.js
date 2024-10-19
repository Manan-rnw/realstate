import React from 'react'
import Footer from './Footer'
import './About.css'
import Navbar from './Navbar'

export default function About() {
  return (
    <>
    <div className='about-container'>
      {/* <Navbar/> */}
      <div className="about-us-container">
        <h1>About Us</h1>

        <section className="about-section">
          <h2>Our Company</h2>
          <p>
            Welcome to <strong>DreamHomes Real Estate</strong>, your trusted partner in buying, selling, and renting properties. With years of experience in the real estate market, we are committed to delivering the highest quality services to our clients. Our team of dedicated professionals works tirelessly to help individuals and families find their dream homes and investment properties.
          </p>
        </section>

        <section className="mission-vision">
          <div className="mission">
            <h2>Our Mission</h2>
            <p>
              Our mission is to create lasting relationships with our clients by delivering outstanding real estate solutions that meet their individual needs. We are driven by integrity, professionalism, and excellence in everything we do, striving to provide seamless real estate transactions with the highest level of customer satisfaction.
            </p>
          </div>
          <div className="vision">
            <h2>Our Vision</h2>
            <p>
              To be the most trusted and leading real estate company, providing unmatched service and expertise in the industry. We aim to transform the real estate experience by embracing innovation and adapting to the ever-changing market, ensuring that our clients achieve their property goals with ease and confidence.
            </p>
          </div>
        </section>

        <section className="values-section">
          <h2>Our Core Values</h2>
          <ul>
            <li><strong>Integrity:</strong> We are transparent and honest in all our dealings, ensuring trust with our clients.</li>
            <li><strong>Excellence:</strong> We strive for excellence in everything we do, from customer service to real estate negotiations.</li>
            <li><strong>Commitment:</strong> We are dedicated to finding the best real estate solutions for our clients, going above and beyond their expectations.</li>
            <li><strong>Innovation:</strong> We embrace new technologies and trends to offer cutting-edge services to our clients.</li>
            <li><strong>Customer Satisfaction:</strong> Our clients are our priority, and their satisfaction is the measure of our success.</li>
          </ul>
        </section>

        <section className="contact-info">
          <h2>Contact Us</h2>
          <p>
            Have questions or want to know more? Feel free to get in touch with us!
          </p>
          <p><strong>Email:</strong> contact@dreamhomesrealestate.com</p>
          <p><strong>Phone:</strong> +123-456-7890</p>
          <p><strong>Location:</strong> 123 Dream Street, Your City, Country</p>
        </section>
      </div>

    </div>
      <Footer />
    </>
  )
}
