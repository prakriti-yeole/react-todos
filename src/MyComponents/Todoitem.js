import React from 'react'

const Todoitem = (props) => {
    return (
        <>
            <div>
                <h4>{props.todo.title}</h4>
                <p>{props.todo.desc}</p>
                <button className='btn btn-danger' onClick={() => { props.onDelete(props.todo) }}>delete </button>
            </div>
            <hr />
        </>
    )
}

export default Todoitem
