// src/components/About.js
import React from 'react';
import { image } from '../data/user';  // Named import of image

const About = () => {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I'm a passionate web developer with a love for learning and building creative solutions.</p>
      <img src={image} alt="I made this" />
    </div>
  );
};

export default About;
