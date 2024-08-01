import Header from './Header';
import Nav from './Nav';
import About from './About';
import Footer from './Footer';
import Missing from './Missing';
import NewPost from './NewPost';
import PostPage from './PostPage';
import Home from './Home';
import { Route, Routes} from 'react-router-dom';
import EditPost from './EditPost';
import {DataProvider} from './hooks/dataContext';


function App() {
return (
<DataProvider>
  <div className="app">
<Header tittle="Social Media" />
<Nav />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route
    path=":id"
    element={<PostPage />}/>
    <Route
    path="/post"
    element={ <NewPost/> } />
    <Route path="/edit/:id" element={<EditPost/>}/>
    <Route path="/about" element={<About />} />
    <Route path="*" element={<Missing />} />
  </Routes>
<Footer />
</div>
</DataProvider> );
}

export default App;
