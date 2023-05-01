import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import './MainLayout.css';

const MainLayout = () => {
    return (
        <div className='main-layout'>
            <div className='inner-layout'>
            <Header></Header>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;