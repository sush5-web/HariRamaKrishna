// src/App.js


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/* You can add other routes later, like: */}
                {/* <Route path="/newspapers" element={<NewspaperList />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
