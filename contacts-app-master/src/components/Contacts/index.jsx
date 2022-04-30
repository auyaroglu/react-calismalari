import { useState, useEffect } from 'react'

import "./styles.scss"

import List from './List';
import Form from './Form';

function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullname: "Arda",
            phone_number: "3212018"
        },
        {
            fullname: "Ahmet",
            phone_number: "3123123"
        },
        {
            fullname: "Ayşe",
            phone_number: "34325445"
        },
        {
            fullname: "Veli",
            phone_number: "45457456"
        },
    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts])

    return (
        <div id="container">    
            <h1>Contacts</h1>     
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts}/>
        </div>
    )
}

export default Contacts