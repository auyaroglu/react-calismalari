import './App.css';
import Users from './components/Users'
import UsersAxios from './components/UsersAxios'

function App() {
    return (
        <div className="App">
            {/* <Users /> */}
            <UsersAxios />
        </div>
    );
}

export default App;
