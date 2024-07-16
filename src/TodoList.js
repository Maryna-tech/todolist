import { Component } from "react";
import Imagepin from './pin.jpg';

export class TodoList extends Component{
    state={
        userInput:"",
        TodoList:[]
    }
    
    onChangeEvent(e){
        this.setState({userInput:e})
    }

    addTask(input){
        if(input===''){
            alert("Please enter your task")
        }else{
        let taskArray=this.state.TodoList;
        taskArray.push(input);
        this.setState({TodoList:taskArray,userInput:""})
    }
}
    
    deleteTask(){
        let taskArray=this.state.TodoList;
        taskArray=[];
        this.setState({TodoList:taskArray})
    }

    crossWord(event){
        const li= event.target;
        li.classList.toggle("crossed");
    }

    onFormSubmit(e){
        e.preventDefault();
    }

    render(){
        return(
            <div>
            <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input type="text"
                placeholder="Create TODO"
                onChange={(e)=>{this.onChangeEvent(e.target.value)}}
                value={this.state.userInput}/>
            </div>
            <div className="container">
                <button onClick={()=>this.addTask(this.state.userInput)}className="btn-add">Add</button>
                    <button onClick={()=>this.deleteTask()}className="btn-delete">Delete</button>
                </div>
            <div>
                <ul>
                    {this.state.TodoList.map((task,index)=>(
                        <li onClick={this.crossWord}key={index}>
                        <img src={Imagepin} alt="drawing-pin" width="20px"/>{task}
                        </li>
                        ))}
                </ul>   
            </div>
            </form>
            </div>
        )
    }
}