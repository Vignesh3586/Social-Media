import { createContext } from "react";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

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

  // Utility functions for localStorage
  const getLocalStorage = () => {
    const storedPosts = localStorage.getItem('posts');
    return storedPosts ? JSON.parse(storedPosts) : [];
  };

  const saveToLocalStorage = (posts) => {
    localStorage.setItem('posts', JSON.stringify(posts));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts.length + 1 : 1;
    const current = format(new Date(), 'MMM do yyyy, h:mm:ss a');
    const addPost = { userId: 1, id, title: postTitle, body: postBody, date: current };
    const listPosts = [...posts, addPost];
    setPosts(listPosts);
    saveToLocalStorage(listPosts);
    setPostBody('');
    setPostTitle('');
    navigate('/');
  };

  useEffect(() => {
    const storedPosts = getLocalStorage();
    setPosts(storedPosts);
  }, []);

  useEffect(() => {
    if (Array.isArray(posts)) {
      const filteredPosts = posts.filter((post) =>
        ((post.title).toLowerCase()).includes(search.toLowerCase()) ||
        ((post.body).toLowerCase()).includes(search.toLowerCase())
      );
      setSearchResults(filteredPosts.reverse());
    }
  }, [posts, search]);

  const handleDelete = (id) => {
    const remainingPosts = posts.filter((post) => post.id != id);
    setPosts(remainingPosts);
    saveToLocalStorage(remainingPosts);
    navigate('/');
  };

  const handleEdit = (id) => {
    const current = format(new Date(), 'MMM do yyyy, h:mm:ss a');
    const updatePost = { userId: 1, id, title: editTitle, body: editBody, date: current };
    const updatedPosts = posts.map((post) =>
      post.id != id ? post : updatePost
    );
    setPosts(updatedPosts);
    saveToLocalStorage(updatedPosts);
    setEditBody('');
    setEditTitle('');
    navigate('/');
  };

  return (
    <DataContext.Provider value={{
      search, setSearch, posts, searchResults,
      handleDelete, handleSubmit, postBody,
      postTitle, setPostTitle, setPostBody,
      handleEdit, editTitle, setEditTitle,
      editBody, setEditBody
    }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
