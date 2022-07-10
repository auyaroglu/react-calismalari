// Components
import Header from "./Header"
import Footer from "./Footer"
import { useAuth } from "./context"

export default function Home() {

    const { user } = useAuth()

    return (
        <>
            <Header />
            App
            {user && (
                <div style={{padding: "10px", border: "1px solid red"}}>
                    You can only see this place while you are logged in
                </div>
            )}
            <Footer />
        </>
    )
}