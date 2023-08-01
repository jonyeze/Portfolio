import React from 'react';
import { useTranslation } from 'react-i18next';
import Contacts from './contacts';

const Contact = () => {
    const {t} = useTranslation();
    return (

        <div className='container-fluid background'>
            <a name='contact'  target='_blank' rel="noreferrer" title='Contact'/>
            <div className='subtitle'>
                <h3 className='fw-bold fs-1'>{t('contact.contact')}</h3>
                <span className='fs-6 fw-bold'>{t('contact.contact-p')}</span>
            </div>
            <div className='container-fluid d-flex justify-content-center align-items-center p'>
                <div className='row'>
                    <div className='col-md '>
                        <Contacts icon='far fa-envelope fa-3x' title={t('contact.mail')}
                            href='mailto:jonydarakdjian@gmail.com' id='Mail' />
                    </div>

                    <div className='col-md'>
                        <Contacts icon='fab fa-github fa-3x' title={t('contact.github')}
                            href='https://github.com/jonyeze' id='GitHub' />
                    </div>

                    <div className='col-md'>
                        <Contacts icon='fab fa-linkedin fa-3x' title={t('contact.linkedin')}
                            href='https://www.linkedin.com/in/darakdjian-jonathan/' id='Linkedin' />
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Contact;