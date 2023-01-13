import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
function Basket({ basket, dispatch }) {
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
    <>
  <section className="basket">
      <>
    {basket.length ?(
  <div className="container">
  {products.length &&
    basket.map((a) => {
      let product = products.find((t) => t.id === a.id);
      return (
         <section key={a.id}>
      <div className="container">
        <div className="basket-bag-item">
          <div className="basket-bag-items-left">
            <div className="left11">
          <div className="basket-bag-head">
            <span>Mehsul</span>
          </div>
          <div className="basket-bag-body">
            <img src={product.image} alt="" />
          </div>
          </div>
          </div>
          <div className="basket-bag-items-right">
          <div className="basket-bag-items">
          <div className="basket-bag-head">
            <span>Qiymət</span>
          </div>
          <div className="basket-bag-body">
            <span className="basket-padding">{product.price}</span>
          </div>
          </div>
          <div className="basket-bag-items">
          <div className="basket-bag-head">
            <span>Ədəd</span>
          </div>
          <div className="basket-bag-body">
            <div className="basket-operations">
          <span onClick={() => decreaseCount(a.id)}>-</span>
                  <span className="basket-detail-count">{a.count}</span>
                <span onClick={() => increaseCount(a.id)}>+</span>
          </div>
          </div>
          </div>
          <div className="basket-bag-items">

          <div className="basket-bag-head">
            <span>Məbləğ</span>
          </div>
          <div className="basket-bag-body">
          <span className="basket-padding">{(product.price * a.count).toFixed(2)} Azn</span>
          </div>
          </div>
          <div className="basket-bag-items">
          <div className="basket-bag-head">
          </div>
          <div className="basket-bag-body">
          <i  onClick={() => {
        dispatch({
          type: "SET_BASKET",
          payload:[...basket.filter((t) => t.id !== a.id)],
        });
      }}   className="fa-solid fa-trash"></i>
      </div>
          </div>
          <div className="basket-bag-items-detail">
            <h3>{product.brand}</h3>
            <p>{product.title}</p>
            <span className="basket-detail-price">{product.price} AZN</span>
            <div className="basket-operations"> 
          <span onClick={() => decreaseCount(a.id)}>-</span>
                  <span className="basket-detail-count">{a.count}</span>
                <span onClick={() => increaseCount(a.id)}>+</span>
          </div>
          <i  onClick={() => {
        dispatch({
          type: "SET_BASKET",
          payload:[...basket.filter((t) => t.id !== a.id)],
        });
      }}   className="fa-solid fa-trash"><span className="remove-i">Silmək</span></i>
          </div>
          <Link to="/form" className="basket-submit">Sifarisi Resmilesdir</Link>
          </div>
        {/* <Link to="/form" className="basket-submit">Sifarisi Resmilesdir</Link> */}
        </div>
      </div>
    </section> 
      );
    })}
</div>
    ):(
      <div className="empty-gif">
      <img src="https://hakimitr.com/assets/website/images/empty-cart.gif" alt="" />
      <Link to={`/`}><button>sehifeye don</button></Link>
      </div>
    )}
    
      </>
    </section>
    </>
  );
}
const t = (a) => {
  return {
    basket: a.basket,
  };
};
export default connect(t)(Basket);
