import React, { useState } from 'react'

function AddTodo(props) {

    const [title, setTitle] = useState(" ");
    const [desc, setdesc] = useState(" ");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("no title or desc!");
        } else {

            props.addTodo(title, desc);
            setTitle("");
            setdesc("");
        }

    }
    return (
        <div className="container my-3">
            <h3>Add a todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input value={desc} onChange={(e) => { setdesc(e.target.value) }} type="text" className="form-control" id="desc" />
                </div>

                <button type="submit" className="btn btn-sm btn-success">Add</button>
            </form>
        </div>
    )
}

export default AddTodo
