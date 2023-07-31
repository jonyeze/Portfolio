import React from 'react';
import './Card-styled.css';


const Card = props => {
    return ( 
        
        <div className='card text-center shadow'>
            <div className='overflow'>
                <img src={props.imgsrc} alt='' className='card-img-top'/>
            </div>
            <div className='card-body text-dark'>
                <h4 className='card-title'>{props.title}</h4>
                <p className='card-text text-secondary'>
                   {props.text}
                </p>
                <a href={props.href} target='_blank' rel="noreferrer">
                    <button  type='button' className='btn text-center'>
                    <i className="fas fa-chevron-circle-down"></i>Go to the site</button></a>
            </div>
        </div>
     );
}
 
export default Card;