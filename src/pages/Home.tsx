import React from "react";

const Home: React.FC = () => (
  <section className="home-content">
    <img src="./assets/lasagna.png" className="homeimage"/>
    <div className="flex">
    <div className="container-home">
    <img className="mae-img" src="../../assets/mae-img.png"/>
    <h2>Meet Your Chef</h2>
    <p className="home-text">
    Inspired by the rich flavors of her home, Amazonas, Brazil, Vanessa has had a passion for cooking since childhood, learning from her mother in the kitchen. At 13, she moved to South Florida, where she broadened her culinary knowledge, exploring the diverse recipes of the region. For years, Vanessa has dreamed of owning a catering business, and over the past five years, she has worked tirelessly to make that dream a reality. Now, settled in Deltona, we are turning that vision into life.
    </p>
    </div>
    </div>
  </section>
);

export default Home;
