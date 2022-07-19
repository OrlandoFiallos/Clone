import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import "./Product.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faChevronDown,
  faLocationDot,
  faLock,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import Rating from "./Rating";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return <>Loading...</>;
  };
  const ShowProduct = () => {
    return (
      <>
        <div className="container">
          <div className="product">
            <Link className="product__btnHome gray small-text" to={"/"}>
              <FontAwesomeIcon icon={faAngleLeft} className="btnHome__icon" />
              Volver a ofertas
            </Link>
            <div className="product__body">
              <div className="product__thumbnail">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product__img"
                />
                <p className="product__ad gray small-text">
                  Pasa el mouse encima de la imagen para aplicar zoom
                </p>
              </div>
              <div className="product__centerCol">
                <h2 className="product__title mb10">{product.title}</h2>
                <div className="line2 mb10"></div>
                {/* <p className="product__rating">{product.rating.count}</p> */}

                <p className="product__price mb10 ">
                  US$
                  <span className="price"> {product.price}</span>
                </p>
                <div className="line2"></div>

                <div className="product__description">
                  <h4 className="description__title mb10">
                    Sobre este artículo
                  </h4>
                  <p className="description">
                    <FontAwesomeIcon className="circleIcon" icon={faCircle} />
                    {product.description}
                  </p>
                </div>
              </div>
              <div className="product__rightCol">
                <p className="rightCol__price bold"> US$ {product.price}</p>
                <p className="rightCol__deposit small-text gray lineH14">
                  + US$ 150.05 de depósito <br /> de derechos de importación &
                  <br />
                  <b>envío GRATIS</b> Honduras
                </p>
                <p className="rightCol__detalles linkColor small-text mb10">
                  Detalles{" "}
                  <FontAwesomeIcon className="gray" icon={faChevronDown} />
                </p>
                <p className="shipping__article small-text lineH14 mb10">
                  Este artículo se envía a <br /> <b>Honduras</b>. LLega{" "}
                  <b>
                    martes,sept <br />
                    14
                  </b>
                </p>
                <div className="rightCol__destiny small-text">
                  <p className=" small-text linkColor mb10">
                    <FontAwesomeIcon
                      className="destiny__icon gray"
                      icon={faLocationDot}
                    />{" "}
                    Enviar a Honduras
                  </p>
                </div>
                <p className="available mb10">Disponible</p>
                <select className="select__amount mb10 gray" name="select">
                  <option value="value1" selected>
                    Cantidad: 1
                  </option>
                  <option value="value3">2</option>
                  <option value="value2">3</option>
                  <option value="value3">4</option>
                </select>
                <div className="rightCol__btn small-text mb10">
                  <p>Agregar al Carrito</p>
                </div>
                <div className="rightCol__btn small-text orange mb10">
                  <p>Comprar Ahora</p>
                </div>
                <div className="secure__transaction small-text gray mb10">
                  <p className="linkColor  lineH14">
                    <FontAwesomeIcon className="gray" icon={faLock} />
                    Transacción segura
                  </p>
                </div>
                <div className="soldBy mb10 lineH14 small-text">
                  <p>
                    Vendido y envíado por <br />
                    Amazon.com.
                  </p>
                </div>
                <div className="return__policy small-text lineH14 mb10">
                  <p>Política de devoluviones:</p>
                  <p className="linkColor">Reembolso o reemplazo</p>
                  <p className="linkColor ">
                    Disponible{" "}
                    <FontAwesomeIcon className="gray" icon={faChevronDown} />
                  </p>
                </div>
                <hr className="gray mb10" />
                <div className="btn__addList">
                  <p>Agregar a la lista</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </>
  );
};

export default Product;
