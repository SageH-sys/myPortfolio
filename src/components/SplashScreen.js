import React, { useEffect } from 'react';
import lottie from 'lottie-web';
import { useNavigate } from 'react-router-dom';

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

// When the animation completes, navigate and set the flag
        animation.addEventListener('complete', () => {
            setTimeout(() => {
                navigate('/home');
            }, 500); // Wait for 500ms before navigating
        });

        return () => animation.destroy();
    }, [navigate]);

    return <div id="Animation" style={{ width: '100%', height: '100vh' }}></div>;
};

export default SplashScreen;



