import React from "react";
import { Link } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";

const FooterTabs: React.FC = () => {
  return (
    <nav className="footer">
      <a
        href="mailto:nessaskitchenofficial@gmail.com"
        target="_blank"
        className="footer-icon"
      >
       <MdOutlineMailOutline size={30}/>
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=61570623114733"
        target="_blank"
        className="footer-icon"
      >
       <CiFacebook size={30}/>
      </a>
      <a
        href="tel:+19546963001"
        target="_blank"
        className="footer-icon"
      >
       <IoCallOutline size={30}/>
      </a>
      <a
        href="https://www.instagram.com/_nessaskitchen_/"
        target="_blank"
        className="footer-icon"
      >
       <FaInstagram size={30}/>
      </a>
    </nav>
  );
};

export default FooterTabs;
