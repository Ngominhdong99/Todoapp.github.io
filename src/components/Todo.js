import React, { useRef } from 'react';

function Todo({ text, todo, todos, setTodos, getValue }) {
    const inputRef = useRef();  
    // const [edit, setEdit] = useState({
    //   id: null,
    //   value: ''
    // });
    const handleClick = (id) => {
      getValue({value: inputRef.current.innerHTML, id})
    };
    // const [editingText, setEditingText] = useState("");
    // const textChange = (e) => {
    //     setEditingText(e.target.value)
    //   }  
    //   function editHandler(e, id) {
    //     e.preventDefault();
    //     const updatedTodos = [...todos].map((todo) => {
    //       if (todo.id === id) {
    //         todo.text = editingText;
    //       }
    //       return todo;
    //     });
    //     setTodos(updatedTodos);
    //     setEdit({id: null, value: ''});
    //   }
    // if (edit.id === todo.id) {
    //     return (
    //         <form>
    //             <input
    //                 type="text"
    //                 value={editingText}
    //                 onChange={textChange}
    //             />
    //              {todo.id === edit.id ? (
                    
    //                 <button type="submit" onClick={(e) => editHandler(e, todo.id)}>Submit Edits</button>
    //                 ) : (
    //                 <button onClick={() => setEdit(todo.id)}>Edit</button>
    //                 )}
    //          </form>
    //     )}
    const deleteHandler = () => {
        setTodos(todos.filter((el) =>
            el.id !== todo.id 
        ))
    };
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed,
                }
            }
            return item;
        }))
    };
  return (
    <div className="todo radius">
        <li ref={inputRef} className={`todo-item ${todo.completed ? 'completed' : ''}`}>{text}</li>
            <button className="radius edit-button" onClick={() => handleClick(todo.id)}>Edit</button>
            {/* <button onClick={() => {setEdit({id: todo.id, value: todo.text})}}>Edit</button> */}
            <button onClick={() => completeHandler(todo.id)} className="complete-btn radius">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn radius">
                <i className="fas fa-trash"></i>
            </button>
    </div>
  )
};
export default Todo;
