import React from 'react';
import logo from './logo.svg';
import PostsContainer from './container/PostsContainer';
import './styles.scss'
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <PostsContainer />
    </div>
  );
}

export default App;
