// src/layouts/MainLayout.jsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <div>
      {/* <header>
        <nav>
          <h1>App Title</h1>
          <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </nav>
      </header> */}

      <main>
        <Outlet /> {/* Renders child route components */}
      </main>

      {/* <footer>
        <p>&copy; 2023 My App</p>
      </footer> */}
      <Footer />
    </div>
  );
};

export default MainLayout;
