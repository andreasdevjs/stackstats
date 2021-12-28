import React from 'react';
import './DrawerToggleButton.css';

const DrawerToggleButton = () => {
  return (
    <button className="menubutton" onClick={()=> console.log('menu')}>
      <div className="menubutton__line"></div>
      <div className="menubutton__line"></div>
      <div className="menubutton__line"></div>
    </button>
  );
}

export default DrawerToggleButton;