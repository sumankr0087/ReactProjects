import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="flex mx-auto flex-col w-96 items-center p-6 bg-gray-900 text-white rounded">
      <h1 className="text-3xl font-bold mb-4">Todo List</h1>
      
      <div className="flex space-x-2">
        <input
          type="text"
          className="p-2 text-black rounded-md"
          placeholder="Add a new todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button 
          onClick={addTodo}
          className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md"
        >
          Add
        </button>
      </div>

      <ul className="mt-4 w-80">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-700 p-2 rounded-md mt-2"
          >
            {todo}
            <button
              onClick={() => removeTodo(index)}
              className="bg-red-500 hover:bg-red-600 px-2 py-1 rounded-md text-white"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
