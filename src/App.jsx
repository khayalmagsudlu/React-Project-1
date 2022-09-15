import "./App.css";
import "./Responsive.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Category from "./pages/Category";
import Subcategory from "./pages/Subcategory";
import Details from "./pages/Details";
import Basket from "./pages/Basket";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact  from "./pages/Contact";
import Shipping from "./pages/Shipping";
import Condition from "./pages/Condition";
import SearchModal from "./components/SearchModal";
import { connect } from "react-redux";
import AnimatedRoute from "./components/AnimatedRoute";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Wish from "./pages/Wish";
import WishModal from "./components/WishModal";
import Form from "./pages/Form";
function App({ modalIsOpen,wishModal,dispatch}) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const loc= useLocation();
  useEffect(()=>{
      dispatch({
          type:"SET_WISHMODAL",
          payload:false,
      })
  },[loc.pathname])
  return (
    <>
      <Header />
      {modalIsOpen && <SearchModal />}
      {wishModal && <WishModal />}
      <AnimatePresence>
        <Routes>
          <Route
            path="/"
            element={
              <AnimatedRoute name="Homepage">
                <Homepage />
              </AnimatedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <AnimatedRoute name="About">
                <About />
              </AnimatedRoute>
            }
          /> <Route
          path="/form"
          element={
            <AnimatedRoute name="Form">
              <Form />
            </AnimatedRoute>
          }
        />
          <Route
            path="/contact"
            element={
              <AnimatedRoute name="Contact">
                <Contact />
              </AnimatedRoute>
            }
          />
          <Route
            path="/shipping"
            element={
              <AnimatedRoute name="Shipping">
                <Shipping />
              </AnimatedRoute>
            }
          />
          <Route
            path="/condition"
            element={
              <AnimatedRoute name="Condition">
                <Condition />
              </AnimatedRoute>
            }
          />
          <Route
            path="/category/:cat_id"
            element={
              <AnimatedRoute name="Category">
                <Category />
              </AnimatedRoute>
            }
          />
          <Route
            path="/category/:cat_id/:sub_id"
            element={
              <AnimatedRoute name="Subcategory">
                <Subcategory />
              </AnimatedRoute>
            }
          />
          <Route
            path="/details/:id"
            element={
              <AnimatedRoute name="Details">
                <Details />
              </AnimatedRoute>
            }
          />
          <Route
            path="/basket"
            element={
              <AnimatedRoute name="basket">
                <Basket />
              </AnimatedRoute>
            }
          />
           <Route
            path="/wish"
            element={
              <AnimatedRoute name="wish">
                <Wish  />
              </AnimatedRoute>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}
const t = (a) => a;
export default connect(t)(App);
