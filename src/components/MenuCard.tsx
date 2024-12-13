import React from "react";

interface MenuCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const MenuCard: React.FC<MenuCardProps> = ({
  title,
  description,
  imageUrl,
}) => (
  <div className="menu-card">
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="menu-images">
      {/* Link to project (image) */}
      <a>
        <img src={imageUrl} alt={title} className="menu-item-image" />
      </a>
    </div>
  </div>
);

export default MenuCard;
