import React from "react"
import { useFormik } from 'formik';

const Basics = () => {
    const { handleSubmit, handleChange, values } = useFormik({
        initialValues: {
            firstName: 'Arda',
            lastName: 'Uyaroğlu',
            email: 'test@test.com',
            gender: 'male',
            hobies: [],
            country: 'turkey'
        },
        onSubmit: values => {
            console.log(values);
        },
    });

    return(
        <>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" value={values.firstName} onChange={handleChange} />
                <br />
                <br />

                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" value={values.lastName} onChange={handleChange} />
                <br />
                <br />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={values.email} onChange={handleChange} />
                <br />
                <br />

                <label htmlFor="male">Male</label>
                <input type="radio" id="male" name="gender" value="male" onChange={handleChange} checked={values.gender === "male"} />
                <label htmlFor="female">Female</label>
                <input type="radio" id="female" name="gender" value="female" onChange={handleChange} checked={values.gender === "female"} />

                <br />
                <br />

                <label style={{ display: "block" }}>
                    <input type="checkbox" name="hobies" value="Football" onChange={handleChange} />
                    Football
                </label>
                <label style={{ display: "block" }}>
                    <input type="checkbox" name="hobies" value="Cinema" onChange={handleChange} />
                    Cinema
                </label>
                <label style={{ display: "block" }}>
                    <input type="checkbox" name="hobies" value="Photography" onChange={handleChange} />
                    Photography
                </label>

                <br />
                <br />

                <select name="country" onChange={handleChange} value={values.country}>
                    <option value="turkey">Turkey</option>
                    <option value="england">England</option>
                    <option value="usa">USA</option>
                </select>

                <br />
                <br />

                <button type="submit">Submit</button>

                <br /><br />

                {
                    JSON.stringify(values)
                }
            </form>
        </>
    )
}

export default Basics