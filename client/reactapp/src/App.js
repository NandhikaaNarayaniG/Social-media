import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';

import Home from './pages/Home'; // Ensure the Home component is correctly imported
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';
import Registration from './pages/Registration';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      
      <Router>
        <div> 
          
          <Link to="/"> Home Page</Link>
          <Link to="/createpost"> Create A Post</Link>
          <Link to="/login"> Login</Link>
          <Link to="/registration"> Registration</Link>
          
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createpost" element={<CreatePost/>}/>
          <Route path="/post/:id" element = {<Post/>}/>
          <Route path="/registration" element = {<Registration/>}/>
          <Route path="/login" element = {<Login/>}/>
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

