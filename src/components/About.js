import React from "react";
import Navbar from "../component/Navbar";

import Footer from "../component/Footer";
import Heroimga from "../component/Heroimga";

function About() {
  return (
    <div>
      <Navbar />
      <Heroimga heading="About Us" />
      <div className="AboutUs">
        <p>
          Plus 971 FZE, intends to become the market leader in order to deliver
          an exceptional and efficient service to our buyers and suppliers. Our
          focus is to build a relationship so that the products we acquire on
          your behalf are most suited to your needs
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
