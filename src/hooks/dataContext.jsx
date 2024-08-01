import { createContext } from "react";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '/src/api/apiRequest';
import useAxiosFetch from "./axiosFetch";
import {format} from 'date-fns'

const DataContext = createContext({});
export const DataProvider = ({ children }) => {
const [posts, setPosts] = useState([]);
const [search, setSearch] = useState('');
const [postBody, setPostBody] = useState('');
const [postTitle, setPostTitle] = useState('');
const [searchResults, setSearchResults] = useState([]);
const [editTitle, setEditTitle] = useState('');
const [editBody, setEditBody] = useState('');
const navigate = useNavigate();
const {data,fetchError,isLoading}=useAxiosFetch('http://localhost:3500/posts')

const handleSubmit = async (e) => {
  e.preventDefault();
  const id = posts.length ? posts.length + 1 : 1;
  const current=format(new Date(),'MMM do yyyy,h:mm:ss a')
  const addPost = { userId: 1, id: JSON.stringify(id), title: postTitle, body: postBody,date:current };
  try {
    await api.post('/posts', addPost);
    const listPosts = [...posts, addPost];
    setPosts(listPosts);
    setPostBody('');
    setPostTitle('');
    navigate('/');
    }catch(err) {
    console.log('Error:', err.message);
  }
};

useEffect(() => {
    setPosts(data)
}, [data]);

useEffect(() => {
  if (posts) {
        const filteredPosts = posts.filter((post) => (
        ((post.title).toLowerCase()).includes(search.toLowerCase()) ||
        ((post.body).toLowerCase()).includes(search.toLowerCase()))
    );
    setSearchResults(filteredPosts.reverse());
  }
}, [posts, search]);

const handleDelete = async (id) => {
  try {
    await api.delete(`/posts/${id}`);
    const remainingPosts = posts.filter((post) => post.id !== id);
    setPosts(remainingPosts);
    navigate('/');
  } catch (err) {
    console.log('Error:', err.message);
  }
};

const handleEdit = async (id) => {
  try {
    const current=format(new Date,'MMM do yyyy,h:mm:ss a')
    const updatePost = { userId: 1, id: id, title: editTitle, body: editBody,date:current};
    await api.put(`/posts/${id}`, updatePost);
    const updatedPosts = posts.map((post) =>
    post.id !== id ? post : updatePost );
    setPosts(updatedPosts);
    setEditBody('');
    setEditTitle('');
    navigate('/');
  } catch (err) {
    console.log('Error:', err.message);
  }
};

return (
  <DataContext.Provider value={{
    search, setSearch, posts, searchResults,
    handleDelete, handleSubmit, postBody,
    postTitle, setPostTitle, setPostBody,
    handleEdit, editTitle, setEditTitle,
    editBody, setEditBody,fetchError,isLoading
  }}>
    {children}
  </DataContext.Provider>
);
};
export default DataContext;
