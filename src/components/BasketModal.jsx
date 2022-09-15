import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
function BasketModal({ basketModal, basket, dispatch }) {
  const { pathname } = useLocation();
  useEffect(() => {
    dispatch({
      type: "SET_BASKETMODAL",
      payload: false,
    });
  }, [pathname]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:1313/products")
      .then((a) => a.json())
      .then((a) => setProducts(a));
  }, []);
  const increaseCount = (id) => {
    let f = basket.find((t) => t.id === id);
    f.count++;
    dispatch({
      type: "SET_BASKET",
      payload: basket,
    });
  };
  const decreaseCount = (id) => {
    let f = basket.find((t) => t.id === id);
    f.count--;
    if (f.count > 0) {
      dispatch({
        type: "SET_BASKET",
        payload: basket,
      });
    } else {
      dispatch({
        type: "SET_BASKET",
        payload: [...basket.filter((t) => t.id !== id)],
      });
    }
  };
  return (
    // <div className="basket-body11">
    <div className={`basket-modal ${basketModal ? "active" : ""}`}>
      <i
        onClick={() => {
          dispatch({
            type: "SET_BASKETMODAL",
            payload: false,
          });
        }}
        className="fa-solid fa-xmark"
      ></i>
      {/* <button onClick={()=>{
      dispatch({
        type:"SET_BASKETMODAL",
        payload:false,
      })
    }}>Close</button> */}
      <section className="basket">
        {products.length &&
          basket.map((a) => {
            let product = products.find((t) => t.id === a.id);
            return (
              <div className="basket-item" key={a.id}>
                <div className="basket-img-brand">
                  <img src={product.image} alt="" />
                </div>
                <div className="basket-price">
                  <h2>{product.brand}</h2>
                  <h4>×{a.count}</h4>
                  <h3>{product.price} Azn</h3>
                </div>
                <div className="basket-delete">
                <i  onClick={() => {
              dispatch({
                type: "SET_BASKET",
                payload:[...basket.filter((t) => t.id !== a.id)],
              });
            }}   className="fa-solid fa-trash"></i>
                </div>
                {/* <div className="operations">
                <button onClick={()=>decreaseCount(a.id)}>-</button>
                <h4>{a.count}</h4>
                <button onClick={()=>increaseCount(a.id)}>+</button>
            </div> */}
              </div>
            );
          })}
        <div className="basket-total">
          <h3>
            <span>Ümumi məbləğ :</span> $
            {products.length && basket
              .reduce(
                (acc, item) =>
                  acc +
                  products.find((t) => t.id === item.id).price * item.count,
                0
              )
              .toFixed(2)}
          </h3>
        </div>
        <div className="total-button">
          <button
            onClick={() => {
              dispatch({
                type: "SET_BASKET",
                payload: [],
              });
            }}
          >
            Təmizlə
          </button>
          <NavLink to={`/basket`}>Səbətə bax</NavLink>
        </div>
      </section>
    </div>
    //  </div>
  );
}
const t = (a) => {
  return {
    basketModal: a.basketModal,
    basket: a.basket,
  };
};
export default connect(t)(BasketModal);