import { createContext, useState, useEffect, useContext } from "react"

const ThemeContext = createContext();

// children çağırılan komponentte <component>bu arada yazılan içeriği verir</component>

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme])

    const values = {
        theme,
        setTheme
    }

    return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
}

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };