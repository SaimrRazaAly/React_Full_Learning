import React from "react";
import "./TodoApp.css";
const TodoApp = () => {
  return (
    <>
      <div className="form">
        <center>
          <h1>Welcome To TodoApp</h1>
          <form>
            <input type="text" name="todo" placeholder="Enter Your todo" />
            <button>Add Todo</button>
          </form>
        </center>

        <ul>
          <li>sfdsdf <span>x</span></li>
        </ul>
      </div>
    </>
  );
};

export default TodoApp;
