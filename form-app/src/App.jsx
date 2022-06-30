import { useState, useEffect } from "react"

function App() {

    const genders = [
        { key: "1", value: "Male" },
        { key: "2", value: "Female" }
    ]
    const categoryList = [
        { key: 1, value: "PHP" },
        { key: 2, value: "JavaScript" },
        { key: 3, value: "CSS" },
        { key: 4, value: "HTML" },
    ]
    const levels = [
        { key: "beginner", value: "Başlangıç" },
        { key: "jr_developer", value: "Jr. Developer" },
        { key: "sr_developer", value: "Sr. Developer" }
    ]
    const [name, setName] = useState("arda")
    const [description, setDescription] = useState("")
    const [gender, setGender] = useState("1")
    const [categories, setCategories] = useState([2, 4])
    const [rule, setRule] = useState(false)
    const [rules, setRules] = useState([
        { key: 1, value: "1. kuralı kabul ediyorum", checked: false },
        { key: 2, value: "2. kuralı kabul ediyorum", checked: false },
        { key: 3, value: "3. kuralı kabul ediyorum", checked: true },
    ])
    const [level, setLevel] = useState("jr_developer")
    const [avatar, setAvatar] = useState(false)
    const [image, setImage] = useState("")

    useEffect(() => {
        if (avatar) {
            const fileReader = new FileReader()
            fileReader.addEventListener("load", function () {
                setImage(this.result)
            })
            fileReader.readAsDataURL(avatar)
        }
    }, [avatar])

    const checkRule = (key, checked) => {
        setRules(rules => rules.map(rule => {
            if (key === rule.key) {
                rule.checked = checked
            }
            return rule
        }))
    }

    const submitHandle = () => {
        const formData = new FormData()
        formData.append("avatar", avatar)
        formData.append("name", name)
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: formData
        })
    }

    const selectedGender = genders.find(g => g.key === gender)
    const selectedLevel = levels.find(g => g.key === level)
    const selectedCategories = categories && categoryList.filter(c => categories.includes(c.key))
    const enabled = rules.every(rule => rule.checked)

    return (
        <div className="App">

            <button onClick={() => setName("Ella")}>Change Name</button><br />
            <input type="text" value={name} onChange={e => setName(e.target.value)} /><br />
            {name}

            <hr />
            <textarea value={description} onChange={e => setDescription(e.target.value)}></textarea><br />
            {description}

            <hr />
            <select value={gender} onChange={e => setGender(e.target.value)}>
                <option value="">Choose</option>
                {genders.map(item => {
                    return <option value={item.key} key={item.key}>{item.value}</option>
                })}
            </select><br />
            <pre>{JSON.stringify(selectedGender, null, 2)}</pre>

            <hr />
            <select value={categories} multiple={true} onChange={e => setCategories([...e.target.selectedOptions].map(option => +option.value))}>
                {categoryList.map(item => {
                    return <option value={item.key} key={item.key}>{item.value}</option>
                })}
            </select><br />
            <pre>{JSON.stringify(selectedCategories, null, 2)}</pre>

            <hr />
            <label>
                <input type="checkbox" checked={rule} onChange={e => setRules(e.target.checked)} />
                Kuralları kabul ediyorum.
            </label><br />
            <button disabled={!rule}>Continue</button>

            <hr />
            {rules.map(item => (
                <label key={item.key}>
                    <input type="checkbox" checked={item.checked} onChange={e => checkRule(item.key, e.target.checked)} />
                    {item.value}
                </label>
            ))}
            <br />
            <pre>{JSON.stringify(rules, "", 2)}</pre>
            <br />
            <button disabled={!enabled}>Continue</button>

            <hr />
            {levels.map(item => (
                <label key={item.key}>
                    <input type="radio" value={item.key} checked={item.key == level} onChange={e => setLevel(e.target.value)} />
                    {item.value}
                </label>
            ))}
            <br />
            {JSON.stringify(selectedLevel)}

            <hr />

            <label>
                <input type="file" onChange={e => setAvatar(e.target.files[0])} />
            </label>
            <button disabled={!avatar} onClick={submitHandle}>Upload Image</button>
            <br />
            {avatar && (
                <>
                    <h3>{avatar.name}</h3>
                    {Image && <img src={image}></img>}
                </>
            )}

        </div>
    );
}

export default App;
