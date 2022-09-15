import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
function Details({ basket, wish,dispatch }) {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const check = basket.find((a) => a.id === +id);
  const check1 = wish.find((a) => a.id === +id);
  useEffect(() => {
    fetch(`http://localhost:1313/products/${id}`)
      .then((a) => a.json())
      .then((a) => {
        setProduct(a);
        setLoading(false);
      });
  }, []);
  const addToBasket = () => {
    dispatch({
      type: "SET_BASKET",
      payload: [
        ...basket,
        {
          id: +id,
          count: 1,
        },
      ],
    });
  };
  const removeFromBasket = () => {
    dispatch({
      type: "SET_BASKET",
      payload: [...basket.filter((t) => t.id !== +id)],
    });
  };
  // const addToWish=()=>{
  //   dispatch({
  //     type:"SET_WISH",
  //     payload:[
  //       ...wish,
  //       {
  //         id:+id,
  //         count:1,
  //       },
  //     ],
  //   });
  // };
  const addToWish = () => {
    dispatch({
      type: "SET_WISH",
      payload: [
        ...wish,
        {
          id: +id,
          count: 1,
        },
      ],
    });
  };
  const removeFromWish = () => {
    dispatch({
      type: "SET_WISH",
      payload: [...wish.filter((z) => z.id !== +id)],
    });
  };
  const increaseCount = () => {
    let f = basket.find((t) => t.id === +id);
    f.count++;
    dispatch({
      type: "SET_BASKET",
      payload: basket,
    });
  };
  const decreaseCount = () => {
    let f = basket.find((t) => t.id === +id);
    f.count--;
    if (f.count > 0) {
      dispatch({
        type: "SET_BASKET",
        payload: basket,
      });
    } else {
      dispatch({
        type: "SET_BASKET",
        payload: [...basket.filter((t) => t.id !== +id)],
      });
    }
  };
  return (
    <div className="details">
      {/* <div className="container"> */}
        {loading ? (
          <div className="loading1">
            <div className="load"></div>
          </div>
        ) : (
          <>
          <div className="detail">
            <div className="detail-left">
              <img src={product.image} alt="" />
            </div>
            <div className="detail-right">
              <h2>{product.brand}</h2>
              <p>{product.title}</p>
              <h3>{product.price}AZN</h3>
              <h4 className="detail-size">Ölçü:{product.sizedetail}</h4>
              {check && (
                <div className="operations-detail">
                  <span onClick={decreaseCount}>-</span>
                  <h4>{check.count}</h4>
                  <span onClick={increaseCount}>+</span>
                </div>
              )}

              <div className="wish">
                {check ? (
                  <button onClick={removeFromBasket}>Səbətdən Sil</button>
                ) : (
                  <button onClick={addToBasket}>Səbətə Əlavə Et</button>
                )}
                  {check1 ? (
                  <button onClick={removeFromWish}>Seçilmişdən çıxar</button>
                ) : (
                  <button onClick={addToWish}>Seçilmiş et</button>
                )}
              </div>
            </div>
          </div>
          <div className="container">
          <div className="description">
          <h1>Description</h1>
          <p>Life moves fast. Make the most of it on this lightweight, versatile e-bike. Power up your daily commute, speed through your errands, or explore the road less traveled.


Where it thrives: City streets and backroads</p>
<p>A steel frame provides classical retro-style tubing, as well as offering a more comfortable ride thanks to the way the material absorbs bumps in the road. A fully customised chain cover and integrated double sided chain guard gives maximum protection from clothes getting stuck, and the chain dropping of during your ride. Colour matched mudguards help complete the vintage look, as well as protecting your clothes from any puddles you happen to ride through. Pedal Uptown features a rear v-brake for easy control and braking power while you're cruising around town. This is a bike made for fun with friends and cruising around to get from A to B and everything in between.</p>
          </div>
          </div>
          </>
        )}
      {/* </div> */}
    </div>
  );
}
const t = (a) => {
  return {
    basket: a.basket,
    wish: a.wish,
  };
};
export default connect(t)(Details);
