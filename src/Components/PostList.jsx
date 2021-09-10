import React from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import PostItem from "./PostItem"


const PostList = ({posts, title, remove}) => {
    if(!posts.length){
        return <h1 style={{textAlign: "center"}}>Post is no found</h1>
    }
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>{title}</h1>
            <TransitionGroup>
            {posts.map((post, index) => (
                <CSSTransition
                    key={post.id}
                    timeout={500}
                    classNames="post"
                >
                    <PostItem remove={remove} post={post} number={index + 1}/>
                </CSSTransition>
            ))}

                
                
            </TransitionGroup>
        </div>
    )
}

export default PostList
