import React from 'react';
import profile from '../assets/img/profile.jpg';
import { useTranslation } from 'react-i18next';



const Form = () => {
    const { t } = useTranslation();
    return (
        
            
            <section id="home" className='container'>
                <img src={profile} className='mx-auto d-block rounded-circle col align-self-center' alt="picture profile" />
                <div className='text-light'>
                    <div className=' text-center align-items-center justify-content-center'>
                        <span className='fs-1 fw-bold border1'>{t('form.hi')}</span>
                        <h1 className='fs-3 fw-bold border1'>{t('form.name')}</h1>
                        <span className='fs-3 fw-bold border1'>{t('form.dev')}</span>
                    </div>
                </div>
            </section>

       
    );
}

export default Form;