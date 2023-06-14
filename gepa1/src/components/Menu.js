import {NavLink} from 'react-router-dom';
import React from 'react';

const Menu = () => {
    return (
        <div className="menu" >
            <ul>
                <li><NavLink to="/" className={({ isActive }) => (isActive ? "activeLink" : undefined)} >Home</NavLink></li>
                <li><NavLink to="/add" className={({ isActive }) => (isActive ? "activeLink" : undefined)} >add technologie</NavLink></li>
                <li><NavLink to="/alltechno" className={({ isActive }) => (isActive ? "activeLink" : undefined)} > all technologies</NavLink></li>            
            </ul>
            
        </div>
    );
};

export default Menu;