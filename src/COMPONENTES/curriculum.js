import React from "react";
import './curriculum.css'
function curriculum() {
  return (
    <div>
      {/*SECCION CURRICULUM*/}
      <section id="curriculum" className="curriculum">
        <div className="contenido-curriculum">
          <h2>Curriculum</h2>
          <div className="fila">
            <div className="col izq">
              <h3>Educación</h3>
              <div className="item izq">
                <h4>Polimodal en Comunicación, Arte y diseño</h4>
                <span className="Escuela">
                  Escuela Superior de Comercio Nro 43.
                </span>
                <span className="año">2001-2003</span>
                <p>
                  {" "}
                  Completar info, ver que mas agregaria Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Recusandae aliquid
                  cupiditate soluta aliquam nisi unde impedit ipsa eos, quod
                  nemo sequi dolores illo quisquam ex asperiores repudiandae
                  cumque itaque necessitatibus.
                </p>{" "}
                {/* esc es palabra reservada, cambiar para diferenciar estilos entre escuela y año*/}
              </div>
            </div>
            <div className="col der">
              <h3>Educación</h3>
              <div className="item der">
                <h4>Programador Web Front End Inicial</h4>
                <span className="Escuela">
                  Universidad Tecnologica Nacional B.A.
                </span>
                <span className="año">En curso actualmente</span>
                <p>
                  {" "}
                  Completar info, ver que mas agregaria Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Recusandae aliquid
                  cupiditate soluta aliquam nisi unde impedit ipsa eos, quod
                  nemo sequi dolores illo quisquam ex asperiores repudiandae
                  cumque itaque necessitatibus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default curriculum