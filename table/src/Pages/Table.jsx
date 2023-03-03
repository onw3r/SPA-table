import React, { useEffect, useState } from 'react';
import './TableStyle.css'


function Table(){
    const [data, setData] = useState(null);
    useEffect(() => {
        const jsonFormat = function (response) {
            return response.json()
        }
        const fetchData = async () => {
            await fetch('https://jsonplaceholder.typicode.com/posts')
                .then(jsonFormat)
                .then(function (data) {
                    setData(data)
                })
      
        }
        fetchData()
          .catch(console.error);
    }, [])
       

 
    return (
        
        <div className='wrapper-content'>
            <div className='wrapper-input'>
                <input placeholder='Поиск'/>
                <div className='input-search-icon'>
                    <svg width="21" height="21" flii="#FFF" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.7353 19.4958L14.7101 13.4663C15.8979 12.0418 16.6124 10.2213 16.6124 8.23301C16.6124 3.69689 12.8896 0.00860596 8.31048 0.00860596C3.73132 0.00860596 0 3.70119 0 8.23731C0 12.7734 3.72272 16.4617 8.30187 16.4617C10.2472 16.4617 12.0375 15.7946 13.4577 14.68L19.5045 20.7267C19.8574 21.0796 20.3824 21.0796 20.7353 20.7267C21.0882 20.3738 21.0882 19.8487 20.7353 19.4958ZM1.76452 8.23731C1.76452 4.67383 4.69966 1.77743 8.30187 1.77743C11.9041 1.77743 14.8392 4.67383 14.8392 8.23731C14.8392 11.8008 11.9041 14.6972 8.30187 14.6972C4.69966 14.6972 1.76452 11.7965 1.76452 8.23731Z" fill="#FFF"/>
                    </svg>
                </div>
            </div>
            <table className='table'>
                <thead className='table-head'>
                    <tr className='col-title'>
                        <th className='col-1'>ID</th>
                        <th className='col-2'>Дата</th>
                        <th className='col-3'>№ док.</th>
                    </tr>
                </thead>
                <tbody className='table-content'>
                    {data == null?'' :data.map((value,index)=>{
                        return <tr className='row' key={index}>
                        <td>{value.id}</td>
                        <td>{value.title}</td>
                        <td>{value.body}</td>
                    </tr>
                    })}
                    


                </tbody>
           
            </table>

           

        </div>
        
    );
};

export default Table;