import React from "react";
import { CiFacebook } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";

const Home: React.FC = () => (
  <section className="home-content">
    <div className="social-media-section">
      <h2>Check Out Our Social Media</h2>
      <h3> Nessa's Kitchen Catering Service</h3>
      <p className = "price-text">Now offering holiday specials. Please contact for pricing ◡̈</p>
      <div className="social-icons">
        <a
          href="mailto:nessaskitchenofficial@gmail.com"
          target="_blank"
          className="social-icon"
          rel="noopener noreferrer"
        >
          <MdOutlineMailOutline size={40} />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61570623114733"
          target="_blank"
          className="social-icon"
          rel="noopener noreferrer"
        >
          <CiFacebook size={40} />
        </a>
        <a
          href="tel:+19546963001"
          target="_blank"
          className="social-icon"
          rel="noopener noreferrer"
        >
          <IoCallOutline size={40} />
        </a>
        <a
        href="https://www.instagram.com/_nessaskitchen_/"
        target="_blank"
        className="social-icon"
      >
       <FaInstagram size={40}/>
      </a>
      </div>
    </div>
    <img src="./assets/lasagna.png" className="homeimage" />
    <div className="flex">
      <div className="container-home">
        
        <img className="mae-img" src="./assets/mae-img.png" />
        <h2>Meet Your Chef</h2>
        <p className="home-text">
          Inspired by the rich flavors of her home, Amazonas, Brazil, Vanessa has had a passion
          for cooking since childhood, learning from her mother in the kitchen. At 13, she moved
          to South Florida, where she broadened her culinary knowledge, exploring the diverse
          recipes of the region. For years, Vanessa has dreamed of owning a catering business,
          and over the past five years, she has worked tirelessly to make that dream a reality.
          Now, settled in Deltona, we are turning that vision into life.
        </p>
      </div>
    </div>
  </section>
);

export default Home;
