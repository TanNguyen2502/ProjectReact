import React from "react";
import './Index.scss'

import Nav from "./Nav/Nav";
import Login from "./Login/Login";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";

import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Index extends React.Component{

    render(){
        return(
            <>
                <div className = "wrap">
                    <div className = "header">
                        <Nav/>
                    </div>
                    <div className = "body">
                        <Content/>
                    </div>   
                    <div className = "footer">
                        <Footer/>
                    </div>
                </div>
                
                <ToastContainer
                    position = "top-center"
                    autoClose = {5000}
                    hideProgressBar
                    newestOnTop = {false}
                    closeOnClick
                    rtl = {false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    style={{ fontSize: "17px" }}
                />
            </>
        );
    }
}

export default Index;
