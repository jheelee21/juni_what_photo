import React, { useState, useEffect } from 'react';
import Logo from './components/Logo';
import HomePage from './components/HomePage';
import './App.css';

function App({}) {
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
    <HomePage />
  );
}

export default App;

