import React from "react";
import MenuCard from "../components/MenuCard";

const Menu: React.FC = () => (
  <section>
    <h2 className="project-heading">Projects</h2>
    <div className="card-container">
      <div className="project-card">
        <MenuCard
          title="Stuffed Mozarella Chicken "
          description="Seasoned chicken stuffed with mozarella and spinach with a side of baked potatoes and garlic parmesean asparagus. Served with a side of Nessa's signature sauce."
          imageUrl="./assets/stuffedchickenplate.png"
        />
      </div>
      <div className="project-card">
        <MenuCard
          title="Pepper Steak"
          description="Beef sauteed on a bed of rice, with bell peppers. "
          imageUrl="./assets/peppersteak.png"
        />
      </div>
      <div className="project-card">
        <MenuCard
          title="Glazed Chicken"
          description="Roasted garlic honey butter chicken served with rice and lentils. Can be swapped out for black or pinto beans. Optional side of beets. "
          imageUrl="./assets/garlicchicken.png"
        />
      </div>
      <div className="project-card">
        <MenuCard
          title="Chicken Fried Rice"
          description="Sauteed chicken with rice, beef sausages, eggs and vegetables. Also available in vegetarian-friendly forms without meat. "
          imageUrl="./assets/chickenfriedrice.png"
        />
      </div>
      <div className="project-card">
        <MenuCard
          title="Pesto Pasta"
          description="Spaghetti made with a basil mix. Served with steak. Also known as a Peruvian dish, Tallarines Verdes. "
          imageUrl="./assets/pestopasta.png"
        />
      </div>
      <div className="project-card">
        <MenuCard
          title="Beef Stew"
          description="Beef stew with vegetables, served with rice and pinto beans. Vegetables include potatoes, carrots, sweet potatoes, kale and cabbage. "
          imageUrl="./assets/stew.png"
        />
        </div>
        <div className='project-card'>
        <MenuCard
          title="Potato Salad"
          description="Seasoned potatoes, peas, corn, eggs mixed in mayonnaise."
          imageUrl="./assets/potatosalad.png"
        />
      </div>
      <div className='project-card'>
        <MenuCard
          title="Picanha"
          description="Brazilian cut of Steak. Served with any two choices of sides."
          imageUrl="./assets/steakcutting.png"
        />
      </div>
      <div className='project-card'>
        <MenuCard
          title="Mac'n Cheese"
          description="Elbow pasta with a homemade hand-grated mix of cheeses, baked to perfection."
          imageUrl="./assets/macncheese.png"
        />
      </div>
      <div className='project-card'>
        <MenuCard
          title="Lasagna"
          description="Homemade lasagna layered with mozarella and ground beef, as well as marinara sauce. Served with a side of garlic bread toasted."
          imageUrl="./assets/lasagna.png"
        />
      </div>
      <div className='project-card'>
        <MenuCard
          title="Chicken Strogonoff"
          description="Brazilian style strogonoff. Served with rice and potato sticks on the side. The sauce contains chicken and corn."
          imageUrl="./assets/strogonoff.png"
        />
      </div>
      <div className='project-card'>
        <MenuCard
          title="Potato Cake"
          description="Nessa's Escondidinho de carne. Mashed potato layered with beef, eggs and vegetables."
          imageUrl="./assets/potatocake.png"
        />
      </div>
      <div className='project-card'>
        <MenuCard
          title="Alfredo Pasta"
          description="Chicken Alfredo with Penne pasta. Includes broccoli. Also available in vegetarian-friendly option, without chicken."
          imageUrl="./assets/alfredo.png"
        />
      </div>
      <div className='project-card'>
        <MenuCard
          title="Deviled Eggs"
          description="Deviled Eggs, Nessa's style."
          imageUrl="./assets/eggs.png"
        />
      </div>
      <div className='project-card'>
        <MenuCard
          title="Banana Chocolate Chip Cupcakes"
          description="Delicious cupcakes with a brazilian chocolate glaze topping. "
          imageUrl="./assets/cupcakes.png"
        />
      </div>
    </div>
  </section>
);

export default Menu;
