import './App.css';

// Components
import Header2 from "./components/Header2"

import { useState, useCallback } from "react"

// Header componenti React.memo ile sarılarak render edildiği için gönderilen property değişmediği sürece yeniden render edilmiyor. Number örneğide 5 den küçük olduğu sürece render edilmiyor.
// Ancak [] === [] ve {} === {} ifadeleri false döndüğü için dizi ve objelerde tekrar render edilir. Bunu çözmek için useMemo kullanılır.

function App() {
    const [number, setNumber] = useState(0);

    // Artırma işlemini yapan fonksiyon her defasında alt componenti render etmemesi için useCallback fonksiyonu kullanılır.
    const increment = useCallback(() => {
        setNumber((test) => test + 1);
    }, [])

    return (
        <div className="App">
            <Header2 increment={increment} />

            <hr />

            <h1>{number}</h1>
        </div>
    );
}

export default App;
