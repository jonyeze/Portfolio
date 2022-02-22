import React from 'react';
import '../index.css';
import { useTranslation } from 'react-i18next';
import flagEn from '../assets/img/flagEn.jpg';
import flagEs from '../assets/img/flagEs.jpg';


const Nav = () => {

  const name = '<JD/>';

  const { t, i18n } = useTranslation();

  function changeToEnglish() {
    i18n.changeLanguage('en');
  }
  function changeToSpanish() {
    i18n.changeLanguage('es');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-nav fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="#">{name}</a>
        <button  className="navbar-toggler bg-light" type="button"
          data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href='#aboutme'>{t('nav.aboutme')}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href='#services'>{t('nav.services')}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href='#cards'>{t('nav.proyects')}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href='#contact'>{t('nav.contact')}</a>
            </li>
            <li>
            <a className="navbar-brand rounded-3 cursor-pointer"  onClick={changeToEnglish}>
              <img src={flagEn} alt="flag" width="30rem" height="24rem"/>
            </a>
            <a className="navbar-brand rounded-3 cursor-pointer"  onClick={changeToSpanish}>
              <img src={flagEs} alt="flag" width="30rem" height="24rem"/>
            </a>
            </li>
            

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;