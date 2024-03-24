// src/pages/Home.js
import React from 'react';
import './pages.css'; // Import the CSS file here
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="container">
            <h1 className="home-title">Welcome to Heath Sage's Portfolio</h1>
            {/* Add CTA button and route to projects page */}
            <Link to="/projects" className="projects-cta">View Projects</Link>

        </div>

    );
}

export default Home;
