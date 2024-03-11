import React from 'react';
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <h2>Related Links </h2>
        <a href ="/">Home</a>
	      <a href ="/about">About</a>
	      <a href ="/products/:productId">Product</a>

      </div>
      </div>
     
  );
};

export default Sidebar;
