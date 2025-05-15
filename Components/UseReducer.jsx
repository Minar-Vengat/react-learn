import React, { useReducer } from 'react';
import './Reducer.css'; // We'll create this file next

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="counter-container">
      <h2>🧮 Counter App</h2>
      <p className="count-display">Count: {state.count}</p>
      <div className="button-group">
        <button onClick={() => dispatch({ type: 'increment' })}>➕</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>➖</button>
        <button onClick={() => dispatch({ type: 'reset' })}>🔁 Reset</button>
      </div>
    </div>
  );
}

export default Counter;
