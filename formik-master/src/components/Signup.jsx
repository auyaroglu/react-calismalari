import React from "react"
import { useFormik } from 'formik';
import validationSchema from "./Validation"
// import Validation from "./Validation"


// error mesajlarını gösterebilmek için handleBlur ve touched dahil edilir. İlgili inputların onBlur özelliğine handleBlue değeri gönderilir. Sonrasında touched.(input name) ile gerekli kontrol yapıldıktan sonra error.(input name) şle hata mesajı bastırılır
export function Signup() {
    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordConfirm: '',
        },
        onSubmit: values => {
            console.log(values);
        },
        validationSchema,
        // validationSchema: Validation, // Yukarıdaki validationSchema ile aynı işi yapar.
    });
    return (
        <>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur}/>

                { errors.email && touched.email && <p className="error">{errors.email}</p> }

                <br />
                <br />

                <label>Password</label>
                <input type="password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />

                { errors.password && touched.password && <p className="error">{errors.password}</p> }

                <br />
                <br />

                <label>Confirm Password</label>
                <input type="password" name="passwordConfirm" value={values.passwordConfirm} onChange={handleChange} onBlur={handleBlur} />

                { errors.passwordConfirm && touched.passwordConfirm && <p className="error">{errors.passwordConfirm}</p> }

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

// export default Signup