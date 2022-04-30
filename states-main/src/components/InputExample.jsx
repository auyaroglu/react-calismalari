import { useState } from 'react'

function InputExample() {
    const [formInput, setFormInput] = useState({name: "", surname: ""});

    const onChangeInput = (event) => {
        setFormInput({ ...formInput, [event.target.name]: event.target.value });
    }

    return (
        <div>
            Please enter a name <br />
            <input name="name" type="text" value={formInput.name} onChange={onChangeInput} />
            <br />
            {formInput.name}
            <br />
            <br />
            Please enter a surname <br />
            <input name="surname" type="text" value={formInput.surname} onChange={onChangeInput} />
            <br />
            {formInput.surname}
        </div>
    )
}

export default InputExample