
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/upload">Upload File</Link></li>
        </ul>
      </nav>
    </header>
  )
};

export default Home;