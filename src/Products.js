import React, { useState, useEffect } from "react";
import "./Products.css";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Link } from "react-router-dom";
import Home from "./Home";
import Rating from "./Components/Rating";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        // console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return <>Loading...</>;
  };

  const filterProduct = (cat) => {
    const updateList = data.filter((x) => x.category === cat);
    setFilter(updateList);
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="side__bar">
          <div className="departaments">
            <h4>Departamentos</h4>
            <button className="btn__sideBar" onClick={() => setFilter(data)}>
              All
            </button>
            <button
              className="btn__sideBar"
              onClick={() => filterProduct("men's clothing")}
            >
              Men's Clothing
            </button>
            <button
              className="btn__sideBar"
              onClick={() => filterProduct("women's clothing")}
            >
              Women's Clothing
            </button>
            <button
              className="btn__sideBar"
              onClick={() => filterProduct("jewelery")}
            >
              Jewerly
            </button>
            <button
              className="btn__sideBar"
              onClick={() => filterProduct("electronics")}
            >
              Electronic
            </button>
          </div>
          <div className="side__barLinks">
            <h4>Tipo de oferta</h4>
            <div className="body">
              <p>Oferta del D??a</p>
              <p>Ofertas Rel??mpago</p>
              <p>Ofertas destacadas</p>
              <p>Ofertas con acceso prioritario</p>
              <p>Prime</p>
            </div>
          </div>
          <div className="side__barLinks">
            <h4>Availability</h4>
            <div className="body">
              <p>Eliminar</p>
              <p>Disponibles</p>
              <p>Pr??ximas</p>
              <p>Finalizadas</p>
            </div>
          </div>
          <div className="side__barLinks">
            <h4>Precio</h4>
            <div className="body">
              <p>Todas</p>
              <p>Por menos de $25</p>
              <p>$25 hasta $50</p>
              <p>$50 hasta $100</p>
              <p>$100 hasta $200</p>
              <p>$200 en adelante</p>
            </div>
          </div>
          <div className="side__barLinks">
            <h4>Descuento</h4>
            <div className="body">
              <p>Todas las ofertas</p>
              <p>10% de descuento o m??s</p>
              <p>25% de descuento o m??s</p>
              <p>50% de descuento o m??s</p>
              <p>70% de descuento o m??s</p>
            </div>
          </div>
          <div className="side__barLinks">
            <h4>Opini??n promedio del cliente</h4>
            <p>
              <span>
                <StarIcon className="star" />
                <StarIcon className="star" />
                <StarIcon className="star" />
                <StarIcon className="star" />
                <StarBorderIcon className="star" />
              </span>
              y m??s
            </p>
            <p>
              <span>
                <StarIcon className="star" />
                <StarIcon className="star" />
                <StarIcon className="star" />
                <StarBorderIcon className="star" />
                <StarBorderIcon className="star" />
              </span>
              y m??s
            </p>
            <p>
              <span>
                <StarIcon className="star" />
                <StarIcon className="star" />
                <StarBorderIcon className="star" />
                <StarBorderIcon className="star" />
                <StarBorderIcon className="star" />
              </span>
              y m??s
            </p>
            <p>
              <span>
                <StarIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
              </span>
              y m??s
            </p>
          </div>
        </div>
        {/* <div className="box">
          <div className="topping">
            <input
              type="checkbox"
              id="topping"
              name="topping"
              value="Paneer"
              checked={isChecked}
              onChange={handleOnChange}
            />
            Chechboxx
          </div>
          <div className="result">
            Above checkbox is {isChecked ? "checked" : "un-checked"}.
          </div>
        </div> */}

        <div className="Cards">
          {filter.map((product) => {
            return (
              <>
                <div className="cards">
                  <div className="card" key={product.id}>
                    <div className="card-body">
                      <img
                        src={product.image}
                        className="card-img-top"
                        alt={product.title}
                      />
                      <p className="card__price">$ {product.price}</p>
                      <p className="card__aviso">
                        Ahorra en {product.category} y m??s
                      </p>

                      <div className="product__rating">
                        <Rating value={product.rating.rate} />
                        <p className="rating__count">{product.rating.count}</p>
                      </div>
                    </div>

                    <Link
                      className="button__oferta"
                      to={`/product/${product.id}`}
                    >
                      <p>Ver Oferta</p>
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div>
      <Home />
      <div className="products__home">
        <div className="row ">{loading ? <Loading /> : <ShowProducts />}</div>
      </div>
    </div>
  );
};

export default Products;
