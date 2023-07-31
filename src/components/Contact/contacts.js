import React from 'react';
import './Contact.css';

const Contacts = props => {
    return (
        <>
            
                <div className='d-flex justify-content-center align-items-center'>
                <a href={props.href} id={props.id} target='_blank'>
                    <i className={props.icon}></i>
                    </a>
                </div>
                <div className='d-flex justify-content-center align-items-center m-1 fw-bold'>              
                    <h3 className='size d-flex justify-content-center'>{props.title}</h3>
                </div>
           

        </>
    );
}

export default Contacts;