// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import Home from './pages/Home';
import { setCSSVariables } from './theme/theme'; // Adjust the import path as needed

setCSSVariables(); // Set CSS variables when the app loads

function App() {
    return (
        <Router>
            <RoutesWithNavbar />
        </Router>
    );
}

// Helper component to use hooks for conditional rendering
function RoutesWithNavbar() {
    const location = useLocation(); // Get the current location
    const navigate = useNavigate(); // Hook for navigation

    // Redirect from splash screen to home after 3 seconds
    useEffect(() => {
        if (location.pathname === "/") {
            setTimeout(() => {
                navigate('/home');
            }, 3000); // Adjust delay as needed
        }
    }, [location, navigate]);

    return (
        <div>
            <Routes>
                <Route path="/" element={<SplashScreen />} />
                <Route path="/home" element={<Home />} />
                {/* Define more routes as needed */}
            </Routes>
        </div>
    );
}

export default App;
