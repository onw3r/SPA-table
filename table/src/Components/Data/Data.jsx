import React from 'react';
import './DataStyle.css'


function Data(props) {


    return (
        <>
            {props.data == null ? <div>Loading...</div> : props.data.map((value, index) => {
                return <tr className='row' key={index}>
                    <td>{value.id}</td>
                    <td>{value.title}</td>
                    <td>{value.body}</td>
                </tr>
            })}
        </>

    );
};

export default Data;