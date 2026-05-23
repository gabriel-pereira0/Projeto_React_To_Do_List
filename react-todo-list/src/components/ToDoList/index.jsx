import './todo-list.style.css';

export function ToDoList({ children }) {
  return children?.length > 0 && <ul className='todo-list'>{children}</ul>;
}
