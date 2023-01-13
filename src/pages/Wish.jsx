import { useEffect } from "react";
import { useState } from "react";
import {connect } from "react-redux";
import { Link } from "react-router-dom";
import WishModal from "../components/WishModal";
function Wish({wish,dispatch,wishModal}) {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:1313/products").then(a=>a.json()).then(a=>setProducts(a));
    },[])
  return (
    <>
  <div  className="wish-pages">
        <>
        {wish.length ? (
   <>
   {products.length && wish.map(a=>{
    let product=products.find(t=>t.id===a.id) 
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
                    <div className="wish-price">
                        <p>{product.price} Azn</p>
                     
                    </div>
                    <div className="wish-price-button">
                            <button onClick={()=>dispatch({
                                type:"SET_WISHMODAL",
                                payload:true
                            })}>Səbətə at</button>
                        </div>
                </div>
                </div>
            </div>
        </section>
    )
})}
</>
        ):(
            <div className="empty-gif">
            <img src="https://hakimitr.com/assets/website/images/empty-cart.gif" alt="" />
            <Link to={`/`}><button>sehifeye don</button></Link>
            </div>
        )}
     
     
        </>
    
    </div>
    </>
  )
}
const t=a=>{
    return{
        wish:a.wish,
    };
};
export default connect(t)(Wish)