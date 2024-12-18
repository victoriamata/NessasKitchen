import React from "react";
import MenuCard from "../components/MenuCard";

const Menu: React.FC = () => (
  <section>
    {/* Appetizers Section */}
    <div className="menu-section">
      <h2 className="menu-title1">Appetizers</h2>
      <div className="card-container">
        <div className="project-card">
          <MenuCard
            title="Potato Salad"
            description="Seasoned potatoes with various mixed vegetables."
            imageUrl="./assets/potatosalad.png"
          />
        </div>
        <div className="project-card">
          <MenuCard
            title="Deviled Eggs"
            description="Deviled Eggs, Nessa's style."
            imageUrl="./assets/eggs.png"
          />
        </div>
      </div>
    </div>

    {/* Entrees Section */}
    <div className="menu-section">
      <h2 className="menu-title">Entrees</h2>
      <div className="card-container">
        <div className="project-card">
          <MenuCard
            title="Stuffed Mozarella Chicken"
            description="Seasoned chicken stuffed with mozzarella and spinach with a side of baked potatoes and garlic parmesan asparagus. Served with a side of Nessa's signature sauce."
            imageUrl="./assets/stuffedchickenplate.png"
          />
        </div>
        <div className="project-card">
          <MenuCard
            title="Pepper Steak"
            description="Beef sautéed on a bed of rice, with bell peppers."
            imageUrl="./assets/peppersteak.png"
          />
        </div>
        <div className="project-card">
          <MenuCard
            title="Glazed Chicken"
            description="Roasted garlic honey butter chicken served with rice and lentils. Can be swapped out for black or pinto beans. Optional side of beets."
            imageUrl="./assets/garlicchicken.png"
          />
        </div>
        <div className="project-card">
          <MenuCard
            title="Chicken Fried Rice"
            description="Sautéed chicken with rice, beef sausages, eggs, and vegetables. Also available in vegetarian-friendly forms without meat."
            imageUrl="./assets/chickenfriedrice.png"
          />
        </div>
        <div className="project-card">
          <MenuCard
            title="Pesto Pasta"
            description="Spaghetti made with a basil mix. Served with steak. Also known as a Peruvian dish, Tallarines Verdes."
            imageUrl="./assets/pestopasta.png"
          />
        </div>
        <div className="project-card">
          <MenuCard
            title="Beef Stew"
            description="Beef stew with vegetables, served with rice and pinto beans. Vegetables include potatoes, carrots, sweet potatoes, kale, and cabbage."
            imageUrl="./assets/stew.png"
          />
        </div>
        <div className="project-card">
          <MenuCard
            title="Picanha"
            description="Brazilian cut of steak. Served with any two choices of sides."
            imageUrl="./assets/steakcutting.png"
          />
        </div>
        <div className="project-card">
          <MenuCard
            title="Mac'n Cheese"
            description="Elbow pasta with a homemade hand-grated mix of cheeses, baked to perfection."
            imageUrl="./assets/macncheese.png"
          />
        </div>
        <div className="project-card">
          <MenuCard
            title="Lasagna"
            description="Homemade lasagna layered with mozzarella and ground beef, as well as marinara sauce."
            imageUrl="./assets/lasagna.png"
          />
        </div>
        <div className="project-card">
          <MenuCard
            title="Chicken Strogonoff"
            description="Brazilian style stroganoff. Served with rice and potato sticks on the side. The sauce contains chicken and corn."
            imageUrl="./assets/strogonoff.png"
          />
        </div>
        <div className="project-card">
          <MenuCard
            title="Potato Cake"
            description="Nessa's Escondidinho de carne. Mashed potato layered with beef, eggs, and vegetables."
            imageUrl="./assets/potatocake.png"
          />
        </div>
        <div className="project-card">
          <MenuCard
            title="Alfredo Pasta"
            description="Chicken Alfredo with Penne pasta. Includes broccoli. Also available in a vegetarian-friendly option, without chicken."
            imageUrl="./assets/alfredo.png"
          />
        </div>
      </div>
    </div>

    {/* Desserts Section */}
    <div className="menu-section">
      <h2 className="menu-title">Desserts</h2>
      <div className="card-container">
        <div className="project-card">
          <MenuCard
            title="Banana Chocolate Chip Cupcakes"
            description="Delicious cupcakes with a Brazilian chocolate glaze topping."
            imageUrl="./assets/cupcakes.png"
          />
        </div>
        <div className="project-card">
          <MenuCard
            title="Latin Flan"
            description="Rich, silky caramel-topped baked custard."
            imageUrl="./assets/cupcakes.png"
          />
        </div>
      </div>
    </div>
    <div className="menu-section">
      <h2 className="menu-title">Sides</h2>
      <div className="card-container">
        <div className="menu-list">
          <ul>
            <li> White Rice</li>
            <li> Black Beans</li>
            <li> Pinto Beans</li>
            <li> Lentils</li>
            <li> Homemade Fries</li>
            <li> Roasted Potatoes</li>
            <li> Garlic Parmesean Asparagus</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Menu;
