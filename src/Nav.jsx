import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import dataContext from './hooks/dataContext'
import './index.css'
import styled from 'styled-components';

const StyledLink = styled(Link)`
color: white;
text-decoration: none;

&:hover {
    color: black;
    background-color:white
}`;


const Nav = () => {
const {search,setSearch}=useContext(dataContext)

return (
<main className='searchform'>
<form className='searchbtn' onSubmit={(e)=>{ e.preventDefault()}}>
  <label htmlFor='searchbtn' >Search Posts</label>
  <input
  id='searchinput'
  type="text"
  placeholder='Search Posts'
  value={search}
  onChange={(e)=>{ setSearch(e.target.value) }}
  />
  <nav>
    <ul className='menu' >
      <li><StyledLink  to="/">Home</StyledLink></li>
      <li><StyledLink  to="post">Post</StyledLink></li>
      <li><StyledLink  to="about">About</StyledLink></li>
    </ul>
  </nav>
</form>
</main>
)
}

export default Nav