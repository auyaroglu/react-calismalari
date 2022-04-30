import { useEffect, useState } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import axios from 'axios'

import User from './User'

function Users() {
    const [loading, setLoading] = useState(true)
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setUsers(res.data))
            .finally(() => setLoading(false))
    })

    let activeLink = ({isActive}) => { return {textDecoration: isActive ? "underline" : ""} }
    let activeClass = ({isActive}) =>  isActive ? "active" : undefined

    return (
        <div>
            <h1>Users</h1>
            {loading ? 
                <div>Loading...</div>
                :
                <>
                    <ul>
                        {users.map(user => {
                            return (
                                <li key={user.id}>
                                    <NavLink style={activeLink} className={activeClass} to={`${user.id}`}>{user.name}</NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </>
            }

            <Routes>
                <Route path=":id" element={<User />} />
            </Routes>
        </div>
    )
}


export default Users
