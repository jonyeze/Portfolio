import React from 'react';
import './Footer.css';

const Footer = ({date}) => (
     
        <>
            <p className='d-flex justify-content-center align-items-center footer'> 
            Copyright &copy; {date}.
            All Rights Reserved</p>
            
        </>
     );

 
export default Footer;