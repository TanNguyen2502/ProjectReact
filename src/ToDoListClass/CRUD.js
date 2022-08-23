import React from 'react';
import './CRUD.scss';

import {toast} from 'react-toastify';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons';

class CRUD extends React.Component{

    state = {
        todo: [{id:'01', title:'video'}],
        title: '',
        updatetodo: {},   
    }

    handleOnChangeNewTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleOnChangeUpdateTitle = (event) => {
        let updatetodoCopy = {...this.state.updatetodo};
        updatetodoCopy.title = event.target.value;
        this.setState({
            updatetodo: updatetodoCopy
        })
    }

    addToDo = () => {
        if(!this.state.title){
            toast.error("Chưa nhập việc cần ghi chú!")
            return;
        }
        let newTodo = {
            id: Math.floor(Math.random()*1000),
            title: this.state.title
        }
        this.setState({
            todo: [...this.state.todo, newTodo],
            title: ''
        })
    }
    
    updateToDo = (newTodo) => {
        let {todo, updatetodo} = this.state;
        let isEmptyObj = Object.keys(updatetodo).length === 0;
        if(isEmptyObj === false && updatetodo.id === newTodo.id){
            let todoCopy = [...todo];
            let objIndex = todoCopy.findIndex((item => item.id === newTodo.id));
            todoCopy[objIndex].title = updatetodo.title;
            this.setState({
                todo: todoCopy,
                updatetodo: {}
            })
            return;
        }
        else{
            this.setState({
                updatetodo: newTodo
            })
        }
    }

    deleteToDo = (newTodo) => {
        let currentToDo = this.state.todo;
        currentToDo = currentToDo.filter(item => item.id !== newTodo.id);
        this.setState({
            todo: currentToDo
        })
    }

    render(){
        let {todo, updatetodo, title} = this.state;
        let isEmptyObj = Object.keys(updatetodo).length === 0;
        return(
            <>
                <div className = 'container'> 

                    <div className = 'Add-Option'>
                        <input type ="text" placeholder = "Nhập một ghi chú..." value = {title}
                            onChange = {(event) => this.handleOnChangeNewTitle(event)}/>
                        <button type = "button" className = 'add-button' 
                            onClick = {() => this.addToDo()}> Thêm </button>
                    </div>

                    <div className = 'Update-Delete-Option'>
                        { 
                            todo && todo.length > 0 && todo.map((item, index) => {
                                return(
                                    <div className = 'todo' key = {item.id}>
                                        { isEmptyObj === true ? <span> {item.title} </span> :
                                            <>
                                                {  
                                                    updatetodo.id === item.id ?
                                                    <span>
                                                        <input value = {updatetodo.title} 
                                                            onChange = {(event) => this.handleOnChangeUpdateTitle(event)}/>
                                                    </span>
                                                    :
                                                    <span> {item.title} </span>
                                                }
                                            </>
                                        } 
                                        <div className = 'update-delete-button'>
                                            <FontAwesomeIcon icon = { faPenToSquare } onClick={() => this.updateToDo(item)}/> 
                                                &nbsp; 
                                            <FontAwesomeIcon icon = { faTrashCan } onClick={() => this.deleteToDo(item)}/>     
                                        </div> 
                                    </div>
                                )
                            })
                        }
                    </div> 
                </div>
            </>
        )
    }
}

export default CRUD;