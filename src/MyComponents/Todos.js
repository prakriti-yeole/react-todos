import React from 'react'
import Todoitem from './Todoitem'
function Todos(props) {

    let mystyle = {
        minHeight: "60vh",
    }
    return (
        <div className="container my-3" style={mystyle} >
            <h3 className=" my-3">To-dos List</h3>
            {props.todos.length === 0 ? "no to-dos to display" : props.todos.map((todo) => {
                return ( <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                   
                )
            })}




        </div>
    )
}

export default Todos
