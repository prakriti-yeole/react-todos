import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/Todos';
import AddTodo from './MyComponents/AddTodo';
import About from './MyComponents/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {

  let initTodo;
  if (localStorage.getItem("todos") == null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {


    setTodos(todos.filter((e) => {
      return e !== todo;
    }));

    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {

    let sno = 0;
    if (todos.length !== 0) {
      sno = todos[todos.length - 1].sno + 1;
    } else {
      sno = 1;
    }
    const newTodo = {
      sno: sno,
      title: title,
      desc: desc
    }

    setTodos([...todos, newTodo]);



  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  const HomePage = () => {
    return (
      <>
        <AddTodo addTodo={addTodo} />
        <Todos todos={todos} onDelete={onDelete} />
      </>
    )
  }
  return (
    <>
      <Router>
        <Header title="To-do-list" searchBar={true} />

        <Routes>
          <Route exact path="/" element={<HomePage />} />

          <Route exact path="/about" element={<About />} />



        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
