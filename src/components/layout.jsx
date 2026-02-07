import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router';

const layout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default layout;