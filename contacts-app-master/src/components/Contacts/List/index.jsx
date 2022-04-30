import { useState } from 'react'

function List({ contacts }) {
    const [filterText, setFilterText] = useState("")

    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) => 
            item[key].toString().toLocaleLowerCase().includes(filterText.toLocaleLowerCase())
        )
    })

    return (
        <div>
            <input
                type="text"
                placeholder="Filter Contact"
                value={filterText}
                onChange={(e) => { setFilterText(e.target.value) }} 
            />

            <ul className='list'>
                {filtered.map((contact, i) => (
                    <li key={i}>
                        <span>{contact.fullname}</span>
                        <span>{contact.phone_number}</span>
                    </li>
                ))}
            </ul>

            <p>
                {filtered.length} contacts found
            </p>
        </div>
    )
}

export default List