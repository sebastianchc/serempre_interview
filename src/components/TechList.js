import React from 'react';

const TechList = ({ tech }) => {
  return (
    <div className="tech_container">
      <div className="tech_img">
        <img src={tech.images.x1} alt="Teacnical Details" />
      </div>
      <p>{tech.name}</p>
    </div>
  );
};

export default TechList;
