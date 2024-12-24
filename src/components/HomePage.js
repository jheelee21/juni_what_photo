import React, { useState, useEffect } from 'react';
import Panel from './Panel';
import Logo from './Logo';

function HomePage() {
  const [photos, setPhotos] = useState([]);
  const [activePanel, setActivePanel] = useState(null);

  useEffect(() => {
    fetch('photos.json')
      .then(res => res.json())
      .then(data => setPhotos(data))
      .catch(error => console.error("Unable to fetch photos:", error));
  }, []);

  const handlePanelClick = (id) => {
    setActivePanel(id === activePanel ? null : id);
  };

  return (
    <div className="App">
        <div className="container">
            {photos.map(photo => (
                <Panel
                key={photo.id}
                photo={photo}
                isActive={photo.id === activePanel}
                onClick={() => handlePanelClick(photo.id)}
                />
            ))}
        </div>
      <Logo />
    </div>
  );
}

export default HomePage;