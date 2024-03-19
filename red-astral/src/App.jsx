// App.jsx
import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import AboutAs from './components/AboutAs';
import Acuerdos from './components/Acuerdos';


const App = () => {
  return (
    <>
    
        <Header />
      
          {/* Otras rutas y componentes aquí */}
        <Body />
        <AboutAs />
        <Acuerdos />
        <Footer />
      
    </>
  );
};

export default App;