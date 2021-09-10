import React, { useEffect, useRef, useState } from "react"
import PostFilter from "../Components/PostFilter"
import Postform from "../Components/PostForm."
import PostList from "../Components/PostList"
import MyButton from "../Components/UI/button/MyButton"
import MyModal from "../Components/UI/modal/MyModal"
import { usePost } from "../hooks/usePost"
import { usePagination } from "../hooks/usePagination"
import "../style/App.css"
import PostService from "../API/PostService"
import Loader from "../Components/UI/loader/Loader"
import { useFetching } from "../hooks/useFetching"
import { getPageCount } from "../utils/pages"
import Paginator from "../Components/Paginator"
import { useObserver } from "../hooks/useObserver"
import MySelect from "../Components/UI/select/MySelect"


function Post() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPost = usePost(posts, filter.sort, filter.query)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const lastElements = useRef()

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page)
    setPosts([...posts, ...response.data])
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })

  const result = usePagination(totalPages)

  useObserver(lastElements, page<totalPages, isPostsLoading, ()=> {
    setPage(page + 1)
  })

  useEffect(() => {
    fetchPosts()
  }, [page,limit])


  const createPost = newPost => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (p) => {
    setPage(p)
    fetchPosts(limit, p)
  }


  return (
    <div className="App">
      <MyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
        Create post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <Postform create={createPost} />
      </MyModal>

      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <MySelect
        value={limit}
        onChange={value=> setLimit(value)}
        defaultValue="quantity of a elements"
        options={[ 
          {value:5, name:'5'},
          {value:5, name:'5'},
          {value:-1, name:'Show all'}
        ]}
      />
      {isPostsLoading &&

        <Loader />
      }
      <PostList
        posts={sortedAndSearchedPost}
        title="List of posts"
        remove={removePost}
      />
      <div ref={lastElements}></div>


      <Paginator result={result} page={page} changePage={changePage} />


    </div>
  )
}

export default Post