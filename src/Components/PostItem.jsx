import React from "react"
import { useHistory } from "react-router-dom"
import MyButton from "./UI/button/MyButton"

const PostItem = ({post, number, remove}) => {
    const router = useHistory()
    console.log(router)
    return (
        <div className="post">
            <div className="post__content">
                <strong>{post.id}. {post.title}</strong>
                <div>{post.body}</div>
            </div>
            <div className="post__btns">
                <MyButton onClick={()=> router.push(`/posts/${post.id}`)}>Open</MyButton>
            </div>
            <div className="post__btns">
                <MyButton onClick={()=> remove(post)}>Delete</MyButton>
            </div>
        </div>
    )
}

export default PostItem
