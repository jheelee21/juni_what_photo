import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Logo() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <div className="logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
      <img src="/photo/logo.png" alt="Logo"/>
    </div>
  );
}

export default Logo;