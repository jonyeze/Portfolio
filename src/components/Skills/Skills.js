import React from 'react';
import './Skills.css';
import { useTranslation } from 'react-i18next';
import mongo from '../../assets/img/mongo.png';



const Skills = () => {
    const {t} = useTranslation();
    return (
        <>

            <section className='container-fluid letter margin'>
                <a name='aboutme' />
                <div className='row grid'>

                    <div className='background col-md-6'>
                        <h2 className='fs-1 fw-bold title'>{t('nav.aboutme')}</h2>
                        <h3 className='fw-bold fs-4 sub-title'>{t('skills.name')}</h3>
                        <p className='paragraph'>{t('skills.paragraph')}</p>

                        <p className='paragraph'>{t('skills.paragraph-2')}</p>

                        <a href='https://drive.google.com/file/d/1F87m96A38gU_OW3aA6Dq-woiYWewsvrW/view?usp=sharing' target='_blank'>
                            <button type='button' className='btn btn-lg fs-6'><i className="fas fa-angle-double-down">
                            </i>{t('skills.download')}</button></a>
                    </div>

                    <div className='background col-md-6'>
                        <h3 className='fw-bold fs-4 title-2'>{t('skills.skills')}</h3>
                        <div className='container-fluid d-flex justify-content-center'>
                            <div className='row'>
                                <div className='col col-sm-4 mar'>
                                    <div className='d-flex justify-content-center'>
                                        <i className="fab fa-react fa-3x"></i>
                                    </div>
                                    <div className='d-flex justify-content-center'>React.js</div>
                                </div>
                                <div className='col col-sm-4 mar'>
                                    <div className='d-flex justify-content-center'>
                                        <i className="fab fa-js fa-3x"></i>
                                    </div>
                                    <div className='d-flex justify-content-center'>
                                        <div>JavaScript</div>
                                    </div>
                                </div>
                                <div className='col col-sm-4 mar'>
                                    <div className='d-flex justify-content-center'>
                                        <img src={mongo} />
                                    </div>
                                    <div className='d-flex justify-content-center'>mongoDB</div>
                                </div>
                                <div className='col col-sm-4 mar'>
                                    <div className='d-flex justify-content-center'>
                                        <i className="fab fa-github fa-3x"></i>
                                    </div>
                                    <div className='d-flex justify-content-center'>GitHub</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Skills;