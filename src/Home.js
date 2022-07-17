import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="row">
          <h2>Ofertas y Promociones</h2>
          <span>
            Compra Ofertas del Día, Ofertas Relámpago y descuentos por tiempo
            limitado
          </span>
          <div className="row__elements">
            <div className="element__one">
              <p>
                Mostrando 1-48 de 1000 resultados para
                <span> 3 Availability Options</span>
              </p>
            </div>
            <div className="element__two">
              <span>Ordenar por</span>
              <select className="select" name="select">
                <option value="value1" selected>
                  Destacados
                </option>
                <option value="value2">Descuento: de menor a mayor</option>
                <option value="value3">Descuento: de mayor a menor</option>
                <option value="value2">Precio: de menor a mayor</option>
                <option value="value3">Precio: de mayor a menor</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
