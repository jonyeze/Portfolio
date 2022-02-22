import React from 'react';
import './Services';
import './Service.css'

const Service = props => {
    return ( 
        <>
        <div className='d-flex justify-content-center align-items-center m-20'>
        <i className={props.icon}></i>
        </div>
        <div className='d-flex justify-content-center align-items-center m-2 fw-bold'>
        <h3 className='fs-5 text-center'>{props.title}</h3>
        </div>
        <div className='d-flex justify-content-center align-items-center m-2 lh-sm text-center'>
        <p>{props.text}</p>
        </div>
        </>
     );
}
 
export default Service;