import React from 'react';

import PostsList from './components/posts-list/posts-list.component';
import PostDetail from './components/post-detail/post-detail.component';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <PostsList />
      <PostDetail />
    </div>
  );
}

export default App;
