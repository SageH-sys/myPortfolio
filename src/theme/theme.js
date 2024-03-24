const theme = {
    colors: {
        primary: '#c8adb8',
        secondary: '#545f40',
        accent: '#72a074',
        background: '#0f0a0c',
        text: '#f1eaec',
        // Add other colors as needed
    },
    // You can also define font sizes, margins, etc., here
};

// This could be in theme.js, App.js, or wherever makes sense for your project
export const setCSSVariables = () => {
    document.documentElement.style.setProperty('--background-color', theme.colors.background);
    document.documentElement.style.setProperty('--text-color', theme.colors.text);
    document.documentElement.style.setProperty('--primary-color', theme.colors.primary);
    document.documentElement.style.setProperty('--secondary-color', theme.colors.secondary);
    document.documentElement.style.setProperty('--accent-color', theme.colors.accent);
};


export default theme;
