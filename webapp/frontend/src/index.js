// src/index.js

import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './components/about.js';
import Upload from './components/upload.js';
import HowToGet from './components/how_to_get.js';
import Explore from './components/explore/explore.js';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/get-data" element={<HowToGet />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);