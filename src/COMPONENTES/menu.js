import React, { useState } from 'react';
import './menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


function Menu() {
  const [menuVisible, setMenuVisible] = useState(false);

  const mostrarOcultarMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const seleccionar = () => {
    setMenuVisible(false);
  };

  return (
    <div>
        <div className="container-encabezado">
        <header>
          <div className="logotipo">
            {/*logotipo link con mi nombre*/}
            <a href="#">Paola</a>{" "}
            {/*TIP se usa #top o # para vincular la parte
              superior de la pagina actual*/}
          </div>
          <nav id="nav" className={menuVisible ? 'responsive' : ''}>
            {/*ver*/}
            <ul>
              {/*links para mi barra*/}
              <li>
                <a href="#Sobremi" onClick={seleccionar}>
                  Sobre Mi
                </a>
              </li>
              <li>
                <a href="#curriculum" onClick={seleccionar}>
                  Curriculum
                </a>
              </li>
              <li>
                <a href="#contacto" onClick={seleccionar}>
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
          <div className="nav-responsive" onClick={mostrarOcultarMenu}>
           <a><FontAwesomeIcon icon={faBars}/></a>
            {/*bar de f-awesome*/}
          </div>
          {/*formato para incrustar logo bar*/}
        </header>
      </div>
    </div>
  )
}
export default Menu
