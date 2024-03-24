import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
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

    return (
        <div>
            {/* Only render Navbar if not on the splash screen */}
            {location.pathname !== "/" && <Navbar />}
            <Routes>
                <Route path="/" element={<SplashScreen />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                {/* Define more routes as needed */}
            </Routes>
        </div>
    );
}

export default App;
