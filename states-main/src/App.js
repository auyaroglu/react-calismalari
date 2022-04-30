import { useState } from 'react';


function App() {
    const [name, setName] = useState('Arda');
    const [age, setAge] = useState(31);
    const [friends, setFriends] = useState(['Ahmet', 'Mehmet', 'Ayşe']);
    const [address, setAddress] = useState({title: "Istanbul", zip: "34000"});

    return (
        <div className="App">
            <h1>Merhaba {name}!</h1>
            <h2>{age}</h2>
            <button onClick={() => setName("Ahmet")}>Change Name</button>
            <button onClick={() => setAge(25)}>Change Age</button>

            <hr />
            <br /><br />
            <h2>Friends</h2>
            {
                friends.map((friend, index) => <div key={index}>{friend}</div>)
            }
            <br />
            <button onClick={() => setFriends([...friends, "Veli"])}>Add new friend</button>

            <hr />
            <br /><br />
            <h2>Address</h2>
            <div>{address.title} {address.zip}</div>
            <br />
            <button onClick={() => setAddress({...address, title: "Ankara", zip: "06000"})}>
                Change the address
            </button>
        </div>
    )
}

export default App;