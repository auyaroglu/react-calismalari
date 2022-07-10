import { get, post, postJSON } from "./request"

export const getPosts = () => get("posts")
export const getPostDetail = id => get(`posts/${id}`)
export const newPost = data => post("posts", data)
// export const newPost = data => postJSON("posts", data)