import React, { useReducer, useState } from 'react';
import './UseReducer2.css';

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, { id: Date.now(), text: action.payload }];
    case 'delete':
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}

function TodoApp() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim()) {
      dispatch({ type: 'add', payload: input });
      setInput('');
    }
  };

  return (
    <div className="todo-container">
      <h2>📝 To-Do List</h2>
      <div className="input-group">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul>
        {state.map(todo => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => dispatch({ type: 'delete', payload: todo.id })}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;