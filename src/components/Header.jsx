import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import BasketModal from "./BasketModal";
import MobileSideBar from "./MobileSideBar";
function Header({ basket, wish, dispatch,  }) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:1313/categories")
      .then((a) => a.json())
      .then((a) => {
        setCategories(a);
      });
  }, []);
  return (
    <>
    <div className="head-top">
        <div className="container">
          <div className="head-flex">
              <div className="head-top-left">
                <nav>
                  <ul>
                    <li><Link to={'shipping'}>Çatdırılma</Link></li>
                    <li><Link to={'condition'}>Geriqaytarma</Link></li>
                    <li><Link to={'contact'}>Əlaqə</Link></li>
                    <li><Link to={'Blog'}>Blog</Link></li>
                  </ul>
                </nav>
              </div>
              <div className="head-top-right">
                <nav>
                  <ul>
                    <li><span>Bizi izlə:</span></li>
                  <li><i className="fa-brands fa-facebook"></i></li>
                    <li><i className="fa-brands fa-twitter"></i></li>
                    <li><i className="fa-brands fa-instagram"></i></li>
                    <li><i className="fa-brands fa-youtube"></i></li>
                    <li><i className="fa-brands fa-pinterest"></i></li>
                  </ul>
                </nav>
              </div>
          </div>
        </div>
    </div>
    <header>
        <MobileSideBar/>
        <BasketModal />
        <div className="container">
          <div className="Navbar">
            <div className="nav-i">
            <i onClick={()=>{
              dispatch({
                type:"SET_MOBILEMENU",
                payload:true,
              })
            }}  className="fa-solid fa-bars"></i>
            {/* <label htmlFor="checkbox" className="hamburger">
              <input onClick={()=>setMobileMenu(!mobileMenu)}  type="checkbox" id="checkbox" />
              <span className="line line-top"></span>
              <span className="line line-middle"></span>
              <span className="line line-bottom"></span>
            </label> */}
            </div>
            <div className="nav-logo">
              <h1>
                <NavLink to="/">Bikeify</NavLink>
              </h1>
            </div>
            <div className="nav-items">
              <nav>
                <ul>
                  {categories.map((category) => (
                    <li key={category.id} className="has-dropdown btn">
                      <NavLink to={`/category/${category.id}`}>
                        {category.name}
                      </NavLink>
                      {category.subcategories && (
                        <ul className="dropdown">
                          {category.subcategories.map((t) => (
                            <li key={t.id}>
                              <NavLink to={`/category/${category.id}/${t.id}`}>
                                {t.name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="header-left">
            <div className="header-search">
              <i
                onClick={() => {
                  dispatch({
                    type: "SET_SEARCHMODAL",
                    payload: true,
                  });
                }}
                className="fa-solid fa-magnifying-glass"
              ></i>
            </div>
            <NavLink onClick={()=>{
            }} to="/Wish"  className="basket-button">
              <i className="fa-solid fa-heart"></i>
             {wish.length ? <span className="basket-count">{wish.length}</span> :null}
            </NavLink>
            <div
              onClick={() => {
                if (basket.length===0) return;
                dispatch({
                  type: "SET_BASKETMODAL",
                  payload: true,
                });
              }}
              to={"/basket"}
              className="basket-button"
            >
              <i className="fa-solid fa-cart-shopping"></i>
          {basket.length ? <span className="basket-count1">{basket.length}</span> :null}
            </div>
            </div>
           
          </div>
        </div>
      </header>
    </>
  );
}
const t = (a) => {
  return {
    basket: a.basket,
    wish: a.wish,
  };
};
export default connect(t)(Header);
