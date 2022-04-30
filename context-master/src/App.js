import './App.css';

// Components
import Container from "./components/Container";

// Contexts
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';

function App() {
    return (
        <ThemeProvider>
            <UserProvider>
                <Container />
            </UserProvider>
        </ThemeProvider>
    );
}

export default App;
