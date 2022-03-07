import React from 'react';

const Pagination = ({ todoPerPage, setCurrentPage, todos, status }) => {
  const paginate = pageNumber => setCurrentPage(pageNumber);
  const totalTodo = todos.filter(todo => 
    (status === "completed" && todo.completed)||(status === "uncompleted" && !todo.completed)||(status === "all")   
  );
  const pageNumbers = [];
  const numOfTodo = Math.ceil(totalTodo.length / todoPerPage);
    for (let i = 1; i <= (numOfTodo <= 1 ? numOfTodo + 1 : numOfTodo) ; i++) {
      pageNumbers.push(i);
    }
  return (
    <nav>
      <ul className='pagination' style={{marginLeft: '30%', marginTop: '30px'}}>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
