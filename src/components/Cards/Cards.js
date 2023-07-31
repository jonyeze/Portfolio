import React from 'react';
import Card from './Card';
import { useTranslation } from 'react-i18next';
import cotizador from '../../assets/img/cotizador.png';
import gasto from '../../assets/img/gasto.png';
import movieApp from '../../assets/img/movieApp.png'

const Cards = () => {
    const {t} = useTranslation();
    return (
        <div className=' container-fluid'>
            <a name='cards' href="#"/>
            <div className='row'>
                <div className='container-fluid port'>
                    <h3 className='text-dark'>{t('cards.portfolio')}</h3>
                    <p className='text-dark'>{t('cards.portfolio-p')}</p>
                </div>
                <div className='col-md-4 c-margin'>
                    <Card imgsrc={cotizador} title={t('cards.quoter')} text='Web application: React App' href='https://boring-babbage-e501aa.netlify.app/' alt="" />
                </div>
                <div className='col-md-4 c-margin'>
                    <Card imgsrc={gasto} title={t('cards.spending')} text='Web Application: REACT, JS, Css' href='https://61d4f79b8b19e3705caeaac2--boring-babbage-e501aa.netlify.app/' alt="" />
                </div>
                <div className='col-md-4 c-margin'>
                    <Card imgsrc={movieApp} title={t('cards.turn')} text='Movies App' href='https://incredible-kelpie-6f9885.netlify.app/' alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Cards;