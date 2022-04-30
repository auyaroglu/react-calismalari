import './App.css';

// Components
import Header from "./components/Header"

import { useState, useMemo } from "react"

// Header componenti React.memo ile sarılarak render edildiği için gönderilen property değişmediği sürece yeniden render edilmiyor. Number örneğide 5 den küçük olduğu sürece render edilmiyor.
// Ancak [] === [] ve {} === {} ifadeleri false döndüğü için dizi ve objelerde tekrar render edilir. Bunu çözmek için useMemo kullanılır.

function App() {
    const [number, setNumber] = useState(0);

    // Dependency array ine eklenen değer değiştiğinde useMemo ile rander işlemi yapılır.
    const data = useMemo(() => {
        return calculateObject()
    }, [])

    return (
        <div className="App">
            <Header number={number < 5 ? 0 : number} data={data} />

            <hr />

            <h1>{number}</h1>
            <button onClick={() => setNumber(number + 1)}>Click</button>
        </div>
    );
}

function calculateObject() {
    console.log("Calculating...")
    for(let i; i < 10000000000; i++) {}
    console.log("Calculating completed!")
    return { name: "Arda" }
}

export default App;
