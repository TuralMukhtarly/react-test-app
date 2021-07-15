import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Bookmarks from './components/Bookmarks';
import Photos from './components/Photos';
import SideBar from './components/SideBar';
import MiniDrawer from './components/SideBar';
import Routes from './routes/Routes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      </div>
      <SideBar/>
    </BrowserRouter>
  );
}

export default App;
