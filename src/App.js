import React, { Fragment } from 'react';
import Nav from './components/Nav';
import Form from './components/Form';
import Cards from './components/Cards/Cards';
import Skills from './components/Skills/Skills';
import Service from './components/Service/Services';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/Footer';



function App() {


  const date = new Date().getFullYear();



  return (
    <Fragment>
      <Nav />
      <div className='margin-top'>
        <Form />
      </div>
      <Skills />
      <Service />
      <Cards />
      <Contact />
      <Footer
        date={date} />

    </Fragment>
  );
}

export default App;
