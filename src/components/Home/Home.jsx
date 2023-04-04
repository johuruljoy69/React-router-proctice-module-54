import React from 'react';
import { Button } from 'bootstrap';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';
const navigation = useNavigation;

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div>
                {navigation.state === 'loading' && 'loading...'}
            </div>
            <Outlet></Outlet>           
        </div>
    );
};

export default Home;