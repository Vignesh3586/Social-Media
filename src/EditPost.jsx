import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import dataContext from './hooks/dataContext'

const EditPost = () => {
const {posts,handleEdit,editTitle,setEditTitle,editBody,setEditBody}=useContext(dataContext)
const {id}=useParams()
const post=posts.find((post)=> (post.id==id))
useEffect(()=>{
    if(post){
    setEditBody(post.body)
    setEditTitle(post.title)
    }
},[posts,setEditBody,setEditTitle])
const handleSubmit = (e) => {
    e.preventDefault()
    handleEdit(id)
}
return (
<>
<main className='newpost'>
  <h1>Edit Post</h1>
  <form className='newform' onSubmit={handleSubmit}>
    <label htmlFor='posttittle'>PostTittle:</label>
    <input
    type='text'
    id="posttittle"
    required
    value={editTitle}
    onChange={(e)=>setEditTitle(e.target.value) }
    />
    <label htmlFor='postbody'>PostBody:</label>
    <textarea
    type='text'
    id="postbody"
    required
    value={editBody}
    onChange={(e)=> setEditBody(e.target.value) }
    />
    <button className='postbtn' type="submit">Submit</button>
  </form>
</main>
</>
)
}

export default EditPost