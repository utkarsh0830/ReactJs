import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todo.todos); // ✅ lowercase 'todos'
  const dispatch = useDispatch();

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Your Todos
      </h2>

      {todos.length === 0 ? (
        <p className="text-center text-gray-500">No todos yet. Add one!</p>
      ) : (
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between bg-gray-100 hover:bg-gray-200 transition-colors px-4 py-3 rounded-xl shadow-sm"
            >
              <span className="text-lg text-gray-800">{todo.text}</span>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-red-500 hover:text-red-700 text-xl font-bold transition-colors"
                title="Delete"
              >
                &times;
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Todos;
