import {useEffect, useState} from 'react'
import axios from "axios"
import WatchPostsModule from "./WatchPostsModule.module.css"

const WatchPosts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchApi = async () => {
      const responce = await axios.get("https://dummyjson.com/posts")
      setPosts(responce.data.posts)
    }
    fetchApi()
  }, [])

  return (
    <>
      <h1>WatchPosts</h1>
      {posts.map((item) => (
        <div key={item.id} className={WatchPostsModule.PostBlock}>
          <h2>{item.title}</h2>
          <span>{item.body}</span>
        </div>
      ))}
    </>
    
  )
}

export default WatchPosts