import React from 'react';
import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import MainLayout from './Layout/MainLayout';
import NotFound from './pages/NotFound';
import AuthLayout from './Layout/AuthLayout';
import LoginPage from './pages/LoginPage';

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path='*' element={<NotFound/>}/>
               <Route path='/about-us' element={<AboutUsPage/>}/>
            </Route>

            <Route path="/Login" element={<AuthLayout/>}>
                <Route index element={<LoginPage/>}/>
            
            </Route>
            
        </Routes>
    );
};

export default AllRoutes;