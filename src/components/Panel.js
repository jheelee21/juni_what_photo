import React from 'react';
import { useNavigate } from 'react-router-dom';

function Panel({ photo, isActive, onClick }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    onClick();
    if (isActive) {
      navigate(`/gallery/${photo.id}`);
    }
  };

  return (
    <div
      className={`panel ${isActive ? 'active' : ''}`}
      style={{ backgroundImage: `url(${photo.src})` }}
      onClick={handleClick}
    >
      <h1>{photo.location}</h1>
      <h2>{photo.date}</h2>
    </div>
  );
}

export default Panel;

