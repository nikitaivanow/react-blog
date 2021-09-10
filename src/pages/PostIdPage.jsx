import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import PostService from '../API/PostService';
import Loader from '../Components/UI/loader/Loader';
import { useFetching } from '../hooks/useFetching';

const PostIdPage = () => {
  const params = useParams()
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  const [fetchPostById, isLoading, error] = useFetching(async() => {
    const response = await PostService.getById(params.id)
    setPost(response.data)
  })

  const [fetchComments, isComLoading, comError] = useFetching(async() => {
    const response = await PostService.getCommentsByPostId(params.id)
    setComments(response.data)
  })

  useEffect(() => {
    fetchPostById(params.id)
    fetchComments(params.id)
  }, [])

  return ( 
    <div>
      <h1>You opened page with id  {params.id}</h1>
      {isLoading
        ? <Loader/>
        : <div>{post.id}. {post.title}</div>
      }
      <h1>
        Comments
      </h1>
      {isComLoading
        ? <Loader/>
        : <div>
            {comments.map(comm => 
              <div style={{marginTop: '15px'}} key={comm.id}>
                 <h5>{comm.email}</h5>
                 <div>{comm.body}</div>
              </div>
            )}
        </div>
      }
    </div>
   );
}
 
export default PostIdPage;