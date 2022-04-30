import { useState, useEffect } from "react"

const Counter = () => {
    const [number, setNumber] = useState(0)

    useEffect(() => {
        console.log("Number State Güncellendi");
    }, [number]);

    useEffect(() => {
        console.log("component mount edildi");

        const interval = setInterval(() => {
            setNumber((n) => n + 1)
        }, 1000)

        return () => clearInterval(interval);
    }, []);

  return (
    <div>
        <h1>{number}</h1>
        <button onClick={() => setNumber(number + 1)}>Click</button>

    </div>
  )
}

export default Counter