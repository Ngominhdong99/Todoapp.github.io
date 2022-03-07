import React from 'react';
import Todo from './Todo';

function TodoList({ todos, setTodos, status, currentPage, todoPerPage, getValue }) { 
    // Get current posts
    const indexOfLastTodo = currentPage * todoPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todoPerPage;
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
  return (
    <div className='todo-container'>
      <ul className="todo-list">
          {currentTodos.map(todo => {
            let flag = false;
            if((status === "completed" && todo.completed)||(status === "uncompleted" && !todo.completed)||(status === "all")){
              flag = true;
            }     
            if(flag){
              return (
                <Todo 
                  text={todo.text}
                  key={todo.id}
                  todo={todo}
                  todos={todos}
                  setTodos={setTodos}
                  getValue={getValue}
                />
              )
            }
             return null;
          } )}
      </ul>
    </div>
  )
}
export default TodoList;
