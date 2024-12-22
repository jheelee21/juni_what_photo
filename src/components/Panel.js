import React from 'react';

function Panel({ photo, isActive, onClick }) {
  return (
    <div
      className={`panel ${isActive ? 'active' : ''}`}
      style={{ backgroundImage: `url(${photo.src})` }}
      onClick={onClick}
    >
      <h1>{photo.location}</h1>
      <h2>{photo.date}</h2>
    </div>
  );
}

export default Panel;

