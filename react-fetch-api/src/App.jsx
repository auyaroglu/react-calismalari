import { useEffect } from "react"

import { PostService, UserService } from "./services"

function App() {

    useEffect(() => {
        UserService.getUsers().then(res => console.log(res))

        PostService.getPosts().then(res => console.log(res))
        PostService.getPostDetail(1).then(res => console.log(res))
        PostService.newPost({
            userId: 3,
            title: "test",
            body: "test"
        }).then(res => console.log(res))
    }, [])

    return (
        <>

        </>
    );
}

export default App;
