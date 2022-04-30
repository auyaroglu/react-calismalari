import './App.css';
import User from '././components/User';

const friends = [
    {
        id: 1,
        name: "Ayşe",
    },
    {
        id: 2,
        name: "Özhan",
    },
    {
        id: 3,
        name: "Caner",
    },
    {
        id: 4,
        name: "Bora",
    },
]

function App() {
    return (
        <>
            <User
                name="Arda"
                surname="Uyaroğlu"
                isLoggedIn={true}
                age={31}
                friends={friends}
                address={{
                    title: "Kadıköy/Istanbul",
                    zip: 34000,
                }}
            />
        </>
    );
}

export default App;
