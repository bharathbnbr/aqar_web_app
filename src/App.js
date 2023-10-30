import React from 'react'
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './pages/Menu';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Menu" Component={Menu} />
      </Routes>
    </BrowserRouter>
  );
}

export default React.memo(App);
