import React, { useReducer, createContext } from 'react';

const initialTodos = [
  {
    id: 1,
    text: 'aaaa',
    done: true,
  },
  {
    id: 2,
    text: 'bbbb',
    done: true,
  },
  {
    id: 3,
    text: 'accccca',
    done: true,
  },
  {
    id: 4,
    text: 'ddddda',
    done: true,
  },
];

function todoReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo 
      );
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id)
    default:
      throw new Error(`Unhandeled action type: ${action.type}`)
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  )
}