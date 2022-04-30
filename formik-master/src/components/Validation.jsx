import * as yup from 'yup';

const Validation = yup.object().shape({
    email: yup.string().email("Geçerli bir email girin.").required("Zorunlu alan"),
    password: yup.string().min(5, "Parolanız en az 5 karakter olmalı.").required("Zorunlu alan"),
    passwordConfirm: yup.string().oneOf([yup.ref("password")], "Parolalar uyuşmuyor.").required("Zorunlu alan")
});

export default Validation