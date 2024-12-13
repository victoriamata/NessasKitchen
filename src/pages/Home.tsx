import React from "react";
import { MdOutlineWavingHand } from "react-icons/md";

const Home: React.FC = () => (
  <section className="aboutme-content">
    <img className="mae-img" src="./assets/portfolioimg.png" />
    <h2>
      Welcome to Nessa's Kitchen{" "}
      <MdOutlineWavingHand style={{ fontSize: "39px" }} />{" "}
    </h2>
    <p className="aboutme-p">
      I was born and raised in South Florida, until I moved with my family to
      Knoxville, Tennessee at 16 years old. After living there for 5 years, I
      moved to the Orlando, Florida area along with my husband and family. I
      have experience in healthcare and banking, but ever since I learned what
      Software Development was two years ago, I have had a passion for learning
      more about it, and one day becoming a Software Engineer. I learned about
      HTML and CSS independently, but I wanted to learn more through a
      structured course. I enrolled myself in the University of Central
      Florida's coding bootcamp, in which I will graduate in December from. I
      look forward to growing in this career path, and expressing creativity
      through projects.{" "}
    </p>
  </section>
);

export default Home;
