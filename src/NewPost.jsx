import React, { useContext } from 'react'
import dataContext from './hooks/dataContext'

const NewPost = () => {
const {handleSubmit,postBody,postTitle,setPostTitle,setPostBody}=useContext(dataContext)
return (
<>
<main className='newpost'>
  <h1>New Post</h1>
  <form className='newform' onSubmit={handleSubmit}>
    <label htmlFor='posttittle'>PostTittle:</label>
    <input
    type='text'
    id="posttittle"
    required
    value={postTitle}
    onChange={(e)=> setPostTitle(e.target.value)}
    />
    <label htmlFor='postbody'>PostBody:</label>
    <textarea
    type='text'
    id="postbody"
    required
    value={postBody}
    onChange={(e)=>setPostBody(e.target.value) }
    />
    <button className='postbtn' type="submit">Submit</button>
  </form>
</main>
</>
)
}

export default NewPost