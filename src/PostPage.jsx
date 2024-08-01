import React, { useContext } from 'react'
import {  useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import dataContext from './hooks/dataContext'

const PostPage = () => {
const {posts,handleDelete}=useContext(dataContext)
const { id }=useParams()
const post=posts.find((post)=> post.id==id)
return (
<>
<main className='postpage'>
  {post && 
  <>
  <h1>{post.title}</h1>
  <h2>{post.date}</h2>
  <p>{post.body}</p>
  <div className="btn">
  <Link to={`/edit/${post.id}`}><button id='editbtn'>Edit Post</button></Link>
  <button onClick={()=>
    handleDelete(id)} id="delbtn">
    Delete Post
  </button>
  </div>
  </>}
</main>
</>
)
}

export default PostPage