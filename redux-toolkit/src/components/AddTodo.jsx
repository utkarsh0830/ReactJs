import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'

function AddTodo({ onAdd }) {
  const [todoText, setTodoText] = useState("");

  const dispatch = useDispatch();

  const addTodoHandle = (e) => {
    e.preventDefault();
    dispatch(addTodo(todoText))

    if (todoText.trim() === "") return;
    // onAdd(todoText);
    
    setTodoText(""); // Clear the input after adding
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <form onSubmit={addTodoHandle} className="flex items-center gap-2">
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="Enter a todo..."
          className="flex-grow p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
