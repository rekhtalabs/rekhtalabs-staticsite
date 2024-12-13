// ProjectCard.js
import React from 'react';
import './ProjectCard.css'; // Import specific CSS for the ProjectCard



function ProjectCard({ title, description, image }) {
    // Corrected approach: Use inline style for dynamic background image URLs
    const cardStyle = {
      backgroundImage: `url(${process.env.PUBLIC_URL + image})`,
      backgroundSize: 'cover', 
      backgroundPosition: 'center center', 
    };
  
    return (
      <div className="project-card" style={cardStyle}>
        <div className="project-title">
          {title}
        </div>
        <div className="project-description" dangerouslySetInnerHTML={{ __html: description }}></div>
      </div>
    );
  }
  

export default ProjectCard;