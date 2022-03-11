import './App.css';
import { React, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Articles from './components/Articles';
import SingleArticle from './components/SingleArticle';
import { UsersContext } from './components/contexts/UsersContext';

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState({ username: 'jessjelly' });

  return (
    <UsersContext.Provider value={{ userLoggedIn, setUserLoggedIn }}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Nav />
          <Routes>
            <Route path="/" element={<Articles />} />
            <Route path="/topics/:slug" element={<Articles />} />
            <Route
              path="/article/:article_id"
              element={<SingleArticle />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </UsersContext.Provider>
  );
}

export default App;
