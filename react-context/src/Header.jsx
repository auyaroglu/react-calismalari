import SwitchTheme from "./SwitchTheme";
import SwitchLanguage from "./SwitchLanguage";

import { useAuth } from "./context"

const Header = () => {

    const { user, dispatch } = useAuth()

    const login = () => {
        dispatch({
            type: "LOGIN",
            payload: {
                name: "Arda",
                id: 1
            }
        })
    }

    const logout = () => {
        dispatch({
            type: "LOGOUT"
        })
    }

    return (
        <header>
            HEADER <br />
            {user && <button onClick={logout}>Çıkış Yap</button> || <button onClick={login}>Giriş Yap</button>}
            <hr />
            <SwitchTheme /> <br />
            <SwitchLanguage />
        </header>
    )
}

export default Header;