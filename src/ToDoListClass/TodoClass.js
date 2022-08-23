import React from 'react';
import './TodoClass.css';

import CRUD from './CRUD';

import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class TodoClass extends React.Component{
    render(){
        return(
            <>
                <header className = "Header">
                    <div className = "Contain">
                        <p className = "Title"> Điền công việc cần ghi chú </p>
                            <CRUD/>
                    </div>
                </header>

                <ToastContainer
                    position = "top-right"
                    autoClose = {5000}
                    hideProgressBar = {false}
                    newestOnTop = {false}
                    closeOnClick
                    rtl = {false}
                    pauseOnFocusLoss
                    draggable = {false}
                    pauseOnHover
                />
            </>
        )
    }
}

export default TodoClass;
