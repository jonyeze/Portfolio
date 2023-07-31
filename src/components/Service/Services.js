import React from 'react';
import Service from './Service';
import './Service.css';
import { useTranslation } from 'react-i18next';


const Services = () => {
    const {t} = useTranslation();
    return (
        <>
         <a name='services' />
            <div className='container-fluid background'>
           
                <h2 className='fw-bold fs-1'>{t('service.services')}</h2>
                <h3 className='fs-6 fw-bold'>{t('service.services-p')}</h3>
               
                <div className='container-fluid d-flex justify-content-center align-items-center'>
                    <div className='row'>

                        <div className=' col-md'>
                            <Service icon='fas fa-mobile-alt fa-3x ' title={t('service.responsive')}
                                text={t('service.responsive-p')} />
                        </div>
                        <div className='col-md'>
                            <Service icon='fas fa-pencil-ruler fa-3x' title={t('service.design')}
                                text={t('service.design-p')}/>
                        </div>
                        <div className='col-md'>
                            <Service icon='fas fa-terminal fa-3x' title={t('service.development')}
                                text={t('service.development-p')} />

                        </div>
                    </div>
                </div>
                <div className='container-fluid d-flex justify-content-center align-items-center'>
                    <div className='row'>
                        <div className=' col-md'>
                            <Service icon='fas fa-thumbs-up fa-3x' title={t('service.social')}
                                text={t('service.social-p')} />
                        </div>
                        <div className=' col-md'>
                            <Service icon='fas fa-tachometer-alt fa-3x' title='Performance'
                                text={t('service.performance-p')} />
                        </div>
                        <div className='col-md'>
                            <Service icon='fas fa-crosshairs fa-3x' title='SEO'
                                text={t('service.seo')} />
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Services;