import React from "react";

const List = ({ value, indexNumber, TodoList, setTodoList }) => {

  const delTodo =()=>{
    let remaningData = TodoList.filter((v,i)=> i!=indexNumber)
    setTodoList(remaningData)
    console.log(remaningData)
  }
  return (
    <>
      <li>
        {value} <span onClick={delTodo}>x</span>
      </li>
    </>
  );
};


export default List;
