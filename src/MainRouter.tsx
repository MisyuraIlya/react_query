import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CountryCard from './pages/CountryCard';
import HomePage from './pages/HomePage';
import CreateCountry from './pages/CreateCountry';
const MainRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/country/:id' element={<CountryCard/>} />
            <Route path='/create' element={<CreateCountry/>} />
        </Routes>
    );
};

export default MainRouter;