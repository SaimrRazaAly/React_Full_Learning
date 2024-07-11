import React, { useState } from "react";
import "./TodoApp.css";
import List from "./List";
const TodoApp = () => {
  const [TodoList, setTodoList] = useState([]);

  let saveTodo = (event) => {
    let todo = event.target.todo.value;
    console.log(todo);

    if (!TodoList.includes(todo)) {
      let finalData = [...TodoList, todo];
      setTodoList(finalData);
      // now we will loop the data of the lsit
    } else {
      alert("the todo already exsixt....");
    }

    event.preventDefault();
  };

  let listloop = TodoList.map((v, i) => {
    return (
      <List
        value={v}
        key={i}
        indexNumber={i}
        TodoList={TodoList}
        setTodoList={setTodoList}
      />
    );
  });
  return (
    <>
      <div className="form">
        <center>
          <h1>Welcome To TodoApp</h1>
          <form onSubmit={saveTodo}>
            <input type="text" name="todo" placeholder="Enter Your todo" />
            <button className="button"> Add Todo</button>
          </form>
        </center>

        <ul>{listloop}</ul>
      </div>
    </>
  );
};

export default TodoApp;
