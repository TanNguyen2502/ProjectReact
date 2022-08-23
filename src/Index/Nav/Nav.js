import React from "react";
import './Nav.scss';

import {NavLink} from "react-router-dom";
import Login from '../Login/Login';

class Nav extends React.Component{

    render(){
        return(
            <>
                <a href = "#" className = "logo">
                    <i className = "fas fa-shopping-basket"/>
                    &nbsp;Thực phẩm xanh
                </a>
                <nav className = "navbar">
                    <NavLink to = "/"> Home </NavLink>
                    <NavLink to = "/music_app"> Music App </NavLink>
                    <NavLink to = "/todo_list"> Todo List </NavLink>
                </nav>
                <div className = "icons">
                    <div className = "fas fa-shopping-cart cart-btn"/>
                    <div className = "fas fa-user login-btn"/>
                </div>
            </>
        );
    }
}

export default Nav;
