import React from 'react';
import '/src/pages/QuienesSomos.css';

const QuienesSomos = () => {
  return (
    <div className="quienes-somos-container">
      <div className="content-wrapper">
        <h1 className="page-title">¿Quienes Somos?</h1>
        
        <div className="intros">
          <h2>Bienvenidos a Milewko</h2>
          <p className="intro">
            En Milewko, somos mucho más que una simple tienda online. Somos una empresa de dos amigos 
            con más de 5 años de experiencia en el comercio, dedicada a ofrecerte productos de 
            la más alta calidad con el mejor serivcio.
          </p>
        </div>

        <div className="values-section">
          <h3>Nuestros Valores</h3>
          <div className="values-grid">
            <div className="value-card">
              <h4>Calidad Garantizada</h4>
              <p>Cada producto es chequeado por el personal de la empresa para evitar disgustos en nuestros amados clientes.</p>
            </div>
            <div className="value-card">
              <h4>Atención Personalizada</h4>
              <p>Creemos en tratar a cada cliente como un amigo, ofreciendo respeto y amor.</p>
            </div>
            <div className="value-card">
              <h4>Precios Justos</h4>
              <p>Tenemos los precios mas bajos del mercado con el objetivo de que todos podamos comprar.</p>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default QuienesSomos;
