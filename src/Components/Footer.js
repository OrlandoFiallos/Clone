import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="row__1">
          <h3>Inicio Página</h3>
        </div>
        <div className="row__links">
          <div className="content">
            <div className="col">
              <h4>Conócenos</h4>
              <div className="body">
                <p>
                  Trabaja en <br /> Amazon
                </p>
                <p>Blog</p>
                <p>
                  Acerca de <br />
                  Amazon
                </p>
                <p>
                  Relaciones <br />
                  con los <br />
                  Inversionistas
                </p>
                <p>
                  Dispositivos <br /> Amazon
                </p>
                <p>
                  Amazon <br /> Science
                </p>
              </div>
            </div>
            <div className="col">
              <h4>Gana Dinero con Nosotros</h4>
              <div className="body">
                <p>Vender productos en Amazon</p>
                <p>Vende en Amazon Business</p>
                <p>
                  Vender aplicaciones en <br /> Amazon
                </p>
                <p>Programa de Afiliados</p>
                <p>Anuncia tus Productos</p>
                <p>Publica tu libro en Kindle</p>
                <p>Habilita un Amazon Hub</p>
                <p>
                  Ver más Gana Dinero con <br /> Nosotros
                </p>
              </div>
            </div>
            <div className="col">
              <h4>Productos de Pago de Amazon</h4>
              <div className="body">
                <p>Compra con Puntos</p>
                <p>Recarga tu Saldo</p>
                <p>Conversos de divisas de Amazon</p>
              </div>
            </div>
            <div className="col">
              <h4>Podemos Ayudarte</h4>
              <div className="body">
                <p>
                  Amazon y el COVID- <br />
                  19
                </p>
                <p>Tu Cuenta</p>
                <p>Tus Pedidos</p>
                <p>
                  Tarifas de Envío y <br /> Políticas
                </p>
                <p>
                  Devoluciones y <br /> Reemplazos
                </p>
                <p>
                  Administrar <br /> Contenido y <br /> Dispositivos
                </p>
                <p>Amazon Assistant</p>
                <p>Ayuda</p>
              </div>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="row">
          <div className="footer__lineNav">
            <img
              className="header__logo"
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon logo"
            ></img>
            <span className="btn__link1">
              <p>Español</p>
            </span>
            <span className="btn__link">
              <p>$ USD - dólar estadounidense</p>
            </span>
            <span className="btn__linkUsa">
              <img
                src="https://pngimg.com/uploads/flags/flags_PNG14655.png"
                alt="usa flag"
              />
              <p>Estados Unidos</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
