import React, { useState } from 'react';
import Item from "./Item"; // Assuming Item component is defined in Item.js

const Navbar = () => {
  const [todos, setTodos] = useState(["i have to was the basic and rinse it properly","i have to write the anwers completly","using CRUD operation create todo list"]);

  // Function to add new To-Do
  const addTodo = () => {
    const newTodo = prompt("Enter a new To-Do:");
    if (newTodo) {
      setTodos([...todos, newTodo]);
    }
  };

  return (
    <div>
    <div className=" flex justify-center">
      <div className="w-4/12 h-16 bg-blue-500 text-white flex justify-between items-center font-semibold  ring-2 ring-blue-500 ring-offset-4 ring-offset-blue-100/50 rounded-md p-5">
        <span className="font-sans font-semibold text-lg">ToDo List : </span>
        <span className="text-3xl cursor-pointer" onClick={addTodo}> + </span>
      </div>
      </div>
      {todos.map((todo, index) => (
        <Item key={index} text={todo} />
      ))}
    
    </div>
  );
};

export default Navbar;
