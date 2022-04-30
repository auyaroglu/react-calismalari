import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function User() {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState({})
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => setUser(res.data))
            .finally(() => setLoading(false))
    }, [id])
    return (
        <div>
            {loading ?
                <div>Loading...</div>
                :
                <>
                    <ul>
                        <li>User ID: {user.id}</li>
                        <li>Name Surname: {user.name}</li>
                        <li>Username: {user.username}</li>
                        <li>Email: {user.email}</li>
                    </ul>
                    <Link to={`/users/${parseInt(id) + 1}`}>Next User</Link>
                </>
            }
        </div>
    )
}

export default User