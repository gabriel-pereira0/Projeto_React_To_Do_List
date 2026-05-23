import React, { useState, useEffect } from 'react';
import { TodoContext } from './TodoContext';

export function TodoProvider({ children }) {
  const TODOS_KEY = 'todos';
  const savedTodos = localStorage.getItem(TODOS_KEY);
  const [todos, setTodos] = useState(savedTodos ? JSON.parse(savedTodos) : []);

  const [showDialog, setShowDialog] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState();

  const openFormTodoDialog = (todo) => {
    if (todo) {
      setSelectedTodo(todo);
    }
    setShowDialog(true);
  };

  const closeFormTodoDialog = () => {
    setShowDialog(false);
    setSelectedTodo(null);
  };

  useEffect(() => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (formData) => {
    const description = formData.get('description');
    setTodos((prevState) => {
      const todo = {
        id: prevState.length + 1,
        description,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      return [...prevState, todo];
    });
  };

  const toggleTodoCompleted = (todo) => {
    setTodos((prevState) => {
      return prevState.map((t) => {
        if (t.id == todo.id) {
          return {
            ...t,
            completed: !t.completed,
          };
        }
        return t;
      });
    });
  };

  const editTodo = (formData) => {
    setTodos((prevState) => {
      return prevState.map((t) => {
        if (t.id == selectedTodo.id) {
          return {
            ...t,
            description: formData.get('description'),
          };
        }
        return t;
      });
    });
  };

  const deleteTodo = (todo) => {
    setTodos((prevState) => {
      return prevState.filter((t) => t.id != todo.id);
    });
  };

  return (
    <>
      <TodoContext
        value={{
          todos,
          addTodo,
          toggleTodoCompleted,
          deleteTodo,
          showDialog,
          openFormTodoDialog,
          closeFormTodoDialog,
          selectedTodo,
          editTodo,
        }}
      >
        {children}
      </TodoContext>
    </>
  );
}
