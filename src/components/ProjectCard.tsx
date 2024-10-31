import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link }) => (
  <div className="project-card">
    <h3>{title}</h3>
    <p>{description}</p>
    <a href={link} target="_blank"><img src={imageUrl}/></a>
  </div>
);

export default ProjectCard;
