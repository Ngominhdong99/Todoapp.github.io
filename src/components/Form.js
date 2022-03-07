import React, { useState, useRef, useEffect } from 'react';

function Form({ todos, setTodos, setStatus, editId, setEditId }, ref) {
  const [inputText, setInputText] = useState('');
    
  const focus = useRef();
  useEffect(()=> {
    focus.current.focus();
      ref.current = value => {
        setInputText(value)
      }
  }, []);
  const inputTextHandler = (e) => {
      setInputText(e.target.value)
  };
  const submitTodoHandler = e => {
      e.preventDefault();
      setTodos([
          ...todos, {text: inputText, completed: false, id: Math.floor(Math.random() * 10000)}
      ]);
      setInputText('');
  };
  const statusHandler = e => {
      if(e.target.value === "clearCompleted" ){
        const checkList = todos.filter(todo => !todo.completed)
          setTodos(checkList)
      }else{
        setStatus(e.target.value)
      }
  };
  const setEdits = (e) => {
    e.preventDefault();
    const updatedTodos = todos.map((todo) => {
      if (todo.id === editId) {
        todo.text = inputText;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setInputText('');
    setEditId(-1);
  };
  return (
    <form>
      <input ref={focus} value={inputText} onChange={inputTextHandler} type="text" className="todo-input radius" placeholder='Add your todo... ?'/>
        {editId !== -1 ? (
          <button onClick={setEdits} className="todo-button" type="submit">
           Submit Edit 
         </button>
        ) : (
          <button onClick={submitTodoHandler} className="todo-button" type="submit">
           Add 
         </button>
        )
      }       
      <div className="select radius">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
          <option value="clearCompleted">Clear Completed</option>
        </select>
      </div>
    </form>
  )
};
export default React.forwardRef(Form);
