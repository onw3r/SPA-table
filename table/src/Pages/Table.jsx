import React, { useEffect, useState } from 'react';
import Data from '../Components/Data/Data';
import InputSearch from '../Components/InputSearch/InputSearch';
import Pagintaion from '../Components/Pagination/Pagintaion';
import './TableStyle.css'


function Table(){
    const [data, setData] = useState([]);
    const [value, setValue] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(10);

    const lastIndex = currentPage * dataPerPage;
    const firstIndex = lastIndex - dataPerPage;

    const jsonFormat = function (response) {
        return response.json()
    }
    const fetchData = async () => {
        await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(jsonFormat)
            .then((data)=> {
                setData(data)
            })
    }
    useEffect(() => {
        fetchData()
    }, [])

    const search = data.filter(el=>{
        if(!value){
            return data
        }else if(el.id == value){
            return el.id
        }else if(el.title.toLowerCase().includes(value.toLowerCase())){
            return el.title
        }else if(el.body.toLowerCase().includes(value.toLowerCase())){
            return el.body
        }

    })

    const currentData = search.slice(firstIndex, lastIndex);


    const paginate = pageNumber => setCurrentPage(pageNumber)
    return (

        <div className='wrapper-content'>
            <InputSearch
                setValue = {setValue}
            />
            <table className='table'>
                <thead className='table-head'>
                    <tr className='col-title'>
                        <th className='col-1'>
                            <span className='text'>ID</span>
                        </th>
                        <th className='col-2'>
                            <span className='text'>Заголовок</span>
                        </th>
                        <th className='col-3'>
                            <span className='text'>Описание</span>
                        </th>
                    </tr>
                </thead>
                <tbody className='table-content'>
                    <Data
                        data = {currentData}
                    />
                </tbody>
            </table>
            <Pagintaion
                dataPerPage = {dataPerPage}
                totalData = {data.length}
                paginate = {paginate}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                value = {value}
                searchData = {search.length}
            />
        </div>

    );
};

export default Table;