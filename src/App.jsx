import { useState } from 'react';
import Post from './components/Post';
import CreatePostForm from './components/CreatePostForm';
import Feed from './components/Feed';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);

  let handleNewSubmission = (data) => {
    setPosts([...posts, data]);
  };

  return (
    <div>
      <h1>Fakebook!</h1>
      <CreatePostForm onNewSubmit={handleNewSubmission}/>
      
      <Feed posts={posts}/>
    </div>
  )
}

export default App
