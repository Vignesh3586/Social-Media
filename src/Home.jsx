import React, { useContext } from 'react';
import Post from './Post';
import dataContext from './hooks/dataContext';

const Home = () => {
 const { searchResults,fetchError,isLoading } = useContext(dataContext);
 
  return (
<>
<div className="home">
{(isLoading)&&<p id="isload">Loading Items.....</p>}
{(!isLoading)&&(fetchError)&& <p style={{ color:"red"}}>{fetchError}</p>}
{(!fetchError)&&(!isLoading)&&<ul>
{Array.isArray(searchResults)&&searchResults.length > 0 ? (
    searchResults.map((post) => (
    <Post post={post} key={post.id} /> )) ) : (
    <p id="noposts">No Posts to display</p> )}
</ul>}
</div>
</>
);
}

export default React.memo(Home);
