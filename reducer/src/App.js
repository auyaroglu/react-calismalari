import './App.css';

import { useReducer } from "react"
import todoReducer from "./reducers/todoReducer"

function App() {

    const [state, dispatch] = useReducer(todoReducer, {
        todos: [],
        todo: ''
    }) 

    const submitHandle = e => {
        e.preventDefault()
        dispatch({
            type: "ADD_TODO",
            todo: state.todo
        })
    }

    const onChange = e => {
        dispatch({
            type: "SET_TODO",
            value: e.target.value
        })
    }

    return (
        <div className="App">
            <h1>Todo App</h1>
            <form onSubmit={submitHandle}>
                <input type="text" value={state.todo} onChange={onChange} />
                <button disabled={!state.todo} type="submit">Add</button>
            </form>
            <ul>
                {state.todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
