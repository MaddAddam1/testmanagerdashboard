import React from 'react';
import {NavLink, BrowserRouter, Link, Router} from 'react-router-dom';
import '../styles/components/header.css'
import DrawerToggleButton from './DrawToggleButton';
import ScriptList from './ScriptList';
import Home from './Home';

const Header = () => (
    
    <header className="app-header">
    <nav className="app">
       <div><DrawerToggleButton/></div>
        <div className="app__logo"><h1>Epic Script Testing</h1></div>
        <div className="spacer"></div>
        <div className="app__items">
            <ul> 
                <li><BrowserRouter><Link to="/" style={{textDecoration: 'none'}} component={Home}>Home</Link></BrowserRouter></li>
                <li><BrowserRouter><Link to="/scripts" component={ScriptList}style={{textDecoration: 'none'}}>Scripts</Link></BrowserRouter></li>
                <li><BrowserRouter><Link to="/profile" style={{textDecoration: 'none'}}>Profile</Link></BrowserRouter></li>
            </ul>
        </div>
    </nav>
</header>
);
export default Header;