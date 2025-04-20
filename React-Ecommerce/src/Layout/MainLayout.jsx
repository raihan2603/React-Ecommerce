import React from 'react';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <h1>this is navbar</h1>
            <Outlet/>
            <h1>This is Footer</h1>
        </div>
    );
};

export default MainLayout;