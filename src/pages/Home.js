// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import './pages.css'; // Import the CSS file here
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import * as animationData from '../Thinking.json';

function Home() {
    // State to hold the company name
    const [company, setCompany] = useState('');
    const [showMessage, setShowMessage] = useState(false);

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData.default,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    // Use useEffect to add a delay
    useEffect(() => {
        if (company !== '') {
            const timer = setTimeout(() => {
                setShowMessage(true);
            }, 2000);
            return () => clearTimeout(timer);
        } else {
            setShowMessage(false);
        }
    }, [company]);

    return (
        <div className="container">
            <div className="content">
                <div className="text-content">
                    <h1 className="home-title">Heath Sage</h1>
                    {/* Add CTA button and route to projects page */}
                    <div className="home-description">
                        <h2>Full-Stack Developer</h2>
                        <p>Soon to be graduate, working at 
                            <input 
                                type="text" 
                                placeholder="Type your company" 
                                value={company} 
                                onChange={(e) => setCompany(e.target.value)} 
                                className="company-input"
                            />
                        </p>
                        <p className={`company-message ${showMessage ? 'show' : ''}`}>That's got a nice ring to it!</p>
                        <div className={`lottie-animation ${showMessage || company === '' ? 'hide' : ''}`}>
                            <Lottie options={defaultOptions} height={40} width={40} />
                        </div>
                    </div>
                    <Link to="/projects" className="projects-cta">View Projects</Link>
                </div>
                <div className="spline-content">
                    <spline-viewer url="https://prod.spline.design/GFWHKesjJ-YaMZKe/scene.splinecode" events-target="global" background="rgba(218,81,221,0)"></spline-viewer>
                </div>
            </div>
        </div>
    );
}

export default Home;
