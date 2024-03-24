import React, { useEffect } from 'react';
import lottie from 'lottie-web';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const SplashScreen = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const animation = lottie.loadAnimation({
            container: document.querySelector('#Animation'),
            renderer: 'svg',
            loop: false,
            autoplay: true,
            path: process.env.PUBLIC_URL + '/assets/svg/Animation.json' // Update this path
        });

        // When the animation completes, navigate
        animation.addEventListener('complete', () => {
            setTimeout(() => {
                navigate('/home');
            }, 500); // Wait for 500ms before navigating
        });

        return () => animation.destroy();
    }, [navigate]);

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh', // Use full viewport height to center vertically
            width: '100vw' // Use full viewport width
        }}>
            <div id="Animation" style={{ width: '70%', height: '70%' }}></div>
        </div>
    );
};

export default SplashScreen;
