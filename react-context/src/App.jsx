import './App.css';

// components
import Home from "./Home"
// import Header from "./Header"
// import Footer from "./Footer"

// Context
import { SiteProvider, AuthProvider } from "./context"

function App() {
    return (
        <SiteProvider>
            <AuthProvider>
                <Home />
            </AuthProvider>
        </SiteProvider>
    );
}

export default App;
