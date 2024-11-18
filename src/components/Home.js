// src/components/Home.js
import React from 'react';
import { username, city } from '../data/user'; // Import variables from user.js

const Home = () => {
  return (
    <div id="home" data-testid="home"> {/* Added data-testid for testing */}
      <h1 style={{ color: 'firebrick' }}>
        Your Name is a Web Developer from {city}
      </h1>
    </div>
  );
};

export default Home;
