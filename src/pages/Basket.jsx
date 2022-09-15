import { useState, useEffect } from "react";
import { connect } from "react-redux";
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
                </div>
              </div>
            </div>
          </section> 
            //   <div key={a.id} className="tables">
            //     <table>
            //       <thead>
            //         <tr>
            //           <th colSpan={3} className="th-1">
            //             <span>Məhsul</span>
            //           </th>
            //           <th>
            //             <span>Qiymət</span>
            //           </th>
            //           <th>
            //             <span>Ədəd</span>
            //           </th>
            //           <th>
            //             <span>Məbləğ</span>
            //           </th>
            //         </tr>
            //       </thead>
            //       <tbody>
            //         <tr>
            //           <td colSpan={3} className="td-image">
            //             <img src={product.image} alt="" />
            //           </td>
            //           <td>{product.price}</td>
            //           <td>
            //             <div className="operations">
            //               <span onClick={() => decreaseCount(a.id)}>-</span>
            //               {/* <h4>{a.count}</h4> */}
            //               <h4>{a.count}</h4>
            //               <span onClick={() => increaseCount(a.id)}>+</span>
            //             </div>
            //           </td>
            //           <td className="td-price">
            //             <h3>{(product.price * a.count).toFixed(2)} Azn</h3>
            //           </td>
            //           <td className="td-delete">
            //           <i  onClick={() => {
            //   dispatch({
            //     type: "SET_BASKET",
            //     payload:[...basket.filter((t) => t.id !== a.id)],
            //   });
            // }}   className="fa-solid fa-trash"></i>
            //           </td>
            //           {/* <td>
            //           <h3>{basket.reduce((acc,item)=>acc+products.find(t=>t.id===item.id).price * item.count,1).toFixed(2)} Azn</h3>
            //           </td> */}
                      
            //         </tr>
            //       </tbody>
            //       {/* <tr>
            //         <th>
            //           adasd
            //         </th>
            //         </tr> */}
            //     </table>
            //   </div>
              // return <div key={a.id}>
              //     <img src={product.image} alt="" />
              //     <h2>{product.title}</h2>
              //     <h2>{product.price}</h2>
              //     <div className="operations">
              //         <button onClick={()=>decreaseCount(a.id)}>-</button>
              //         <h4>{a.count}</h4>
              //         <button onClick={()=>increaseCount(a.id)}>+</button>
              //     </div>
              // </div>
              
            );
          })}
      </div>
            
    </section>
          {/* <section>
            <div className="container">
              <div className="basket-bag-item">
                <div className="basket-bag-head">
                  <span>Mehsul</span>
                </div>
                <div className="basket-bag-body">
                  <img src={product.image} alt="" />
                </div>
                <div className="basket-bag-head">
                  <span>Mehsul</span>
                </div>
                <div className="basket-bag-body">
                </div>
                <div className="basket-bag-head">
                  <span>Mehsul</span>
                </div>
                <div className="basket-bag-body">
                </div>
                <div className="basket-bag-head">
                  <span>Mehsul</span>
                </div>
                <div className="basket-bag-body">
                </div>
              </div>
            </div>
          </section> */}
    </>
  );
}
const t = (a) => {
  return {
    basket: a.basket,
  };
};
export default connect(t)(Basket);
