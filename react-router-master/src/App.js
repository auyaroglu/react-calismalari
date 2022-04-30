import { Routes, Route, NavLink } from "react-router-dom";

// Pages
import Home from './components/Home'
import About from './components/About'
import Users from './components/Users'
import Error404 from './components/Error404'

import './App.css';

function App() {

    let activeLink = ({isActive}) => { return {textDecoration: isActive ? "underline" : ""} }
    let activeClass = ({isActive}) =>  isActive ? "active" : undefined 

    return (
        <div className="App">
            <h1>Welcome to React Router!</h1>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}
            >
                <NavLink to="/" style={activeLink} className={activeClass}>Home</NavLink> |{" "}
                <NavLink to="/about" style={activeLink} className={activeClass}>About</NavLink> |{" "}
                <NavLink to="/users" style={activeLink} className={activeClass}>Users</NavLink>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/users/*" element={<Users />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </div>
    );
}

export default App;
