import React from 'react';
import './PaginationStyle.css'
function Pagintaion(props) {

    const pageNumbers = [];
    let totalSeatchNumbers = props.searchData / props.dataPerPage
    let totalNumbers = props.totalData / props.dataPerPage
    console.log(props.searchData)
    console.log(totalSeatchNumbers)
    for(let i = 1; i <= (props.value ? Math.ceil(totalSeatchNumbers) : Math.ceil(totalNumbers)); i++){
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
            <button className='page-toggle' onClick={()=>props.setCurrentPage(props.currentPage < totalNumbers ? props.currentPage + 1 : props.currentPage)}>Далее</button>
        </div>
    );
}

export default Pagintaion;