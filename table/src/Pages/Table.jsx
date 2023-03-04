import React, { useEffect, useMemo, useState } from 'react';
import Data from '../Components/Data/Data';
import InputSearch from '../Components/InputSearch/InputSearch';
import Pagintaion from '../Components/Pagination/Pagintaion';
import './TableStyle.css'


function Table() {
    const [data, setData] = useState([]);
    const [value, setValue] = useState('');   //значение в инпуте поиска
    const [currentPage, setCurrentPage] = useState(1);   //текущая страница
    const [dataPerPage, setDataPerPage] = useState(10);   //сколько отображать записей на  странице
    const [sorted, setSorted] = useState({}); // параметры для сортировки

    const lastIndex = currentPage * dataPerPage;  // определение последнего  элемента страницы
    const firstIndex = lastIndex - dataPerPage;   // определение первого элемента страницы

    const jsonFormat = function (response) {
        return response.json()
    }
    const fetchData = async () => {
        await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(jsonFormat)
            .then((data) => {
                setData(data)
            })
    }
    useEffect(() => {
        fetchData()
    }, [])

    const search = data.filter(el => {
        if (!value) {
            return data
        } else if (el.id == value) {
            return el.id
        } else if (el.title.toLowerCase().includes(value.toLowerCase())) {
            return el.title
        } else if (el.body.toLowerCase().includes(value.toLowerCase())) {
            return el.body
        }
    })


    const currentData = search.slice(firstIndex, lastIndex); //данные после поиска
    useMemo(() => {
        if (sorted !== null) {
            data.sort((a, b) => {
                if (a[sorted.key] < b[sorted.key]) {
                    return sorted.direction === 'ascending' ? -1 : 1;
                }
                if (a[sorted.key] > b[sorted.key]) {
                    return sorted.direction === 'ascending' ? 1 : -1;
                }
                return 0
            })
        }
    }, [data, sorted])

    const requestSort = (key) => {       //функция определяеющая параметры сортировки
        let direction = 'ascending'
        if (sorted.key === key && sorted.direction === 'ascending') {
            direction = 'descending'
        }
        setSorted({ key, direction })
    }

    return (

        <div className='wrapper-content'>
            <InputSearch
                setValue={setValue}
                setCurrentPage={setCurrentPage}
            />
            <table className='table'>
                <thead className='table-head'>
                    <tr className='col-title'>
                        <th className='col-1' onClick={() => requestSort('id')}>
                            <span className={`text ${sorted.direction == 'ascending' || sorted.key !== 'id' ? 'active' : 'inactive'}`}>ID</span>
                        </th>
                        <th className='col-2' onClick={() => requestSort('title')}>
                            <span className={`text ${sorted.direction == 'ascending' || sorted.key !== 'title' ? 'active' : 'inactive'}`}>Заголовок</span>
                        </th>
                        <th className='col-3' onClick={() => requestSort('body')}>
                            <span className={`text ${sorted.direction == 'ascending' || sorted.key !== 'body' ? 'active' : 'inactive'}`}>Описание</span>
                        </th>
                    </tr>
                </thead>
                <tbody className='table-content'>
                    <Data
                        data={currentData}
                    />
                </tbody>
            </table>
            <Pagintaion
                dataPerPage={dataPerPage}
                totalData={data.length}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                value={value}
                searchData={search.length}
            />
        </div>

    );
};

export default Table;