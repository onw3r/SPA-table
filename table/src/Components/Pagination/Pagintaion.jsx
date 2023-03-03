import React from 'react';
import './PaginationStyle.css'
function Pagintaion(props) {

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(props.totalData / props.dataPerPage); i++){
        pageNumbers.push(i)
    }
    return (
        <div className='pagintaion-row'>
            <button className='page-toggle' onClick={()=>props.setCurrentPage(props.currentPage != 1 ? props.currentPage - 1 : props.currentPage)}>Назад</button>
            <ul className='pagintaion-number'>
                {pageNumbers.map(number =>(
                    <li key={number}>
                        <a className={`number ${props.currentPage == number ? 'active' : ''}`} href='#' onClick={()=>props.paginate(number)}>{number}</a>
                    </li>
                ))
                }
            </ul>
            <button className='page-toggle' onClick={()=>props.setCurrentPage(props.currentPage < props.totalData / props.dataPerPage ? props.currentPage + 1 : props.currentPage)}>Далее</button>
        </div>
    );
}

export default Pagintaion;