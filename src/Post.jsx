import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({post}) => {
return (
<>
<div className='post'>
  <li><Link  style={{ textDecoration: 'none', color:"black"}}
      to={`/${post.id}`}>
  <h1>{post.title}</h1>
  <h2>{post.date}</h2></Link>
  <p>{(post.body).length<=10?post.body:(post.body).slice(0, 10)+"..."}</p>
  </li>
</div>
</>
)
}

export default Post