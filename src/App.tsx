import React from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import Images from './components/Photos';
import MiniDrawer from './components/SideBar';

function App() {
  return (
    <HashRouter>
      <div className="App">
      <MiniDrawer/>
      </div>
    </HashRouter>
  );
}

export default App;
