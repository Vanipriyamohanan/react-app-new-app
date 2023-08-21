import React from "react";
import Navbar from "../component/Navbar";
import Heroimga from "../component/Heroimga";
import Footer from "../component/Footer";

function Contact() {
  return (
    <div>
      <Navbar />
      <Heroimga heading="Contact Us" />
      <div className="contact">
        <h1>Plus 971 FZE</h1>
        <p>6WA G23 Dubai Airport Free Zone,</p>
        <p> P.O. Box 56901, Dubai,</p>
        <p>United Arab Emirates</p>
        <p>Landline:+971(0)454 865 77</p>
        <a href="mailto:sales@plus971healthstore.com">
          <div className="box--right">
            <p className="heading">Email: sales@plus971.ae</p>
          </div>
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
