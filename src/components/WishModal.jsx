import {connect} from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function WishModal({dispatch,wish,wishModal}) {
    let nav = useNavigate()

    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch("http://localhost:1313/products")
        .then((a) => a.json())
        .then((a) => setProducts(a));
    }, []);
  return (
    <div  onClick={()=>{
        dispatch({
            type:"SET_WISHMODAL",
            payload:false,
        })
    }}  className="wish-modal-container">
        <div onClick={(e)=>e.stopPropagation()} className="wish-modal">
            <div className="wish-modal-body">
            {products.length &&
          wish.map((a) => {
            let product = products.find((t) => t.id === a.id); 
            return(
                <section key={a.id} className="wish-cart">
                <div className="container">
                    <div className="wish-item">
                    <div className="wish-image">
                        <img src={product.image} alt="" />
                    </div>
                    <div className="wish-about">
                        <span>{product.title}</span>
                    </div>
                    <div className="wish-price-bag">
                        <div className="wish-remove">
                        <i  onClick={() => {
              dispatch({
                type: "SET_WISH",
                payload:[...wish.filter((t) => t.id !== a.id)],
              });
            }}   className="fa-solid fa-trash"></i>
                     
                        </div>
                        {/* <div className="operations">
                        <span onClick={() => decreaseCount(a.id)}>-</span>
                         <h4>{a.count}</h4>
                        <span onClick={() => increaseCount(a.id)}>+</span>
                      </div> */}
                      <h3>{(product.price * a.count).toFixed(2)} Azn</h3>
                    </div>
                  
                    </div>
                    <button onClick={()=>{
                        dispatch({
                            type:"SET_WISHMODAL",
                            payload:false,
                        });
                        nav("/form")
                    }} className="wish-buttons">
                        <p>Sifarisi Resmilesdir</p>
                    </button>
                </div>
            </section>
            )
        })}
            </div>
        </div>
</div>
  )
}
{/* <button onClick={()=>{
    dispatch({
        type:"SET_WISHMODAL",
        payload:false,
    })
}}>Close</button> */}
const t=(a)=>{
    return{
        wishModal:a.wishModal,
        wish:a.wish,
    }
}
export default connect(t)(WishModal)