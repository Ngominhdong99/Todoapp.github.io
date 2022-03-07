import { useState, createContext } from "react";

const ThemeContext = createContext({theme: 'dark-mode', icon: 'fas fa-moon', toggleTheme: () => null});

function ThemeProvider( {children} ) {
    const instance = 1;
    const [theme, setTheme] = useState('dark-mode');
    const [icon, setIcon] = useState('fas fa-moon');
    const toggleTheme = () => {
        setTheme(theme === 'dark-mode' ? 'light-mode' : 'dark-mode')
        setIcon(icon ==='fas fa-moon' ? 'far fa-sun' : 'fas fa-moon')
    }
    const value = {
        theme,
        icon,
        toggleTheme
    }
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider}

