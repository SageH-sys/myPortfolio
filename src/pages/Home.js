// src/pages/Home.js
import React from 'react';
import './pages.css'; // Import the CSS file here

function Home() {
    return (
        <div className="container">
            <h1 className="home-title">Welcome to Heath Sage's Portfolio</h1>
            {/* Add CTA button*/}
            <a href="/projects" className="projects-cta">View Projects</a>
        </div>

    );
}

export default Home;
