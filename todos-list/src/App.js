import "./App.css";
import Header from "./MyComponent/Header";
import { Todos } from "./MyComponent/Todos";
import { AddTodo } from "./MyComponent/AddTodo";
import { Footer } from "./MyComponent/Footer";
import { About } from "./MyComponent/About";
import React, { useState, useEffect } from "react";


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    //console.log("I am onDelete",todo);
    //let index=todos.indexOf(todo);
    //todos.splice(index,1);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (todos.length ==0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log("my Todo");
  };
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  /* {
      sno:1,
      title:'Go to the market',
      desc:'You need to the market to get this job done1'  
    },
    {
      sno:2,
      title:'Go to the mall',
      desc:'You need to the market to get this job done2'  
    },
    {
      sno:3,
      title:'Go to the shop',
      desc:'You need to the market to get this job done3'  
    },*/

  return (
    <>
        <Header title="My Todos List" searchBar={false} />
        
        <AddTodo addTodo={addTodo} />
        <Todos todos={todos} onDelete={onDelete}></Todos>
        <Footer/>
    </>
  );
}

export default App;
