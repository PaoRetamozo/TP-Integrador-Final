import React from 'react';
import './inicio.css';
import Pao1 from '../Pao1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function inicio(){
    return(
        <div>
            <section id="inicio" className="inicio">
    <div className="banner-info">
      <div className="container-img">
        <img src={Pao1} alt="foto personal" />
      </div>
      <h1>Paola Retamozo</h1>
      <h2>Web developer en proceso</h2>
      <div className="social">
        <div className="linkedin">
          <a href="https://www.linkedin.com/in/paola-retamozo-706843a0/">
           <FontAwesomeIcon icon={faLinkedin} />
          </a>
          {/* poner en el # mi linkedin*/}
          {/*se recomienda solo colocar redes sociales que sumen a lo que cuenta el portfolio
              por ello solo utilizo linkedin*/}
          <a href="https://mail.google.com">
           <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </div>
  </section>
        </div>
    )
 }
 export default inicio