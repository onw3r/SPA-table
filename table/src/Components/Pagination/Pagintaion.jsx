import React from 'react';
import { Link } from 'react-router-dom';
import './PaginationStyle.css'
function Pagintaion(props) {

    const pageNumbers = []; // массив кол-ва страниц
    let totalSearchNumbers = props.searchData / props.dataPerPage  //общее количество страниц после поиска
    let totalNumbers = props.totalData / props.dataPerPage         //общее количество страниц до поиска
    const paginate = (pageNumber) => props.setCurrentPage(pageNumber)      //установка выбранной страницы

    for(let i = 1; i <= (props.value ? Math.ceil(totalSearchNumbers) : Math.ceil(totalNumbers)); i++){     //подсчёт общего количества страниц взависимости до поиска/после поиска
        pageNumbers.push(i)
    }
    return (
        <div className='pagintaion-row'>
            <Link className='page-toggle'
                to={`/${props.currentPage == 1 ? props.currentPage : props.currentPage - 1}`}
                onClick={() => props.setCurrentPage(props.currentPage != 1 ? props.currentPage - 1 : props.currentPage)}>Назад</Link>
            <ul className='pagintaion-number'>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <Link className={`number ${props.currentPage == number ? 'active' : ''}`} to={`/${number}`} onClick={() => paginate(number)}>{number}</Link>
                    </li>
                ))
                }
            </ul>
            <Link className='page-toggle'
                to={`/${props.currentPage == totalNumbers ? props.currentPage : props.currentPage + 1}`}
                onClick={() => props.setCurrentPage(props.currentPage < totalNumbers ? props.currentPage + 1 : props.currentPage)}>Далее</Link>
        </div>
    );
}

export default Pagintaion;