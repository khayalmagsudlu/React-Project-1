import "./App.css";
import "./Responsive.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";
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
import Blog from "./pages/Blog";
import MobileSideBar from "./components/MobileSideBar";
import Tour1 from "./pages/Tour1";
import Tour2 from "./pages/Tour2";
import Tour3 from "./pages/Tour3";
import Tour4 from "./pages/Tour4";
import ScrollTop from "./components/ScrollTop";
function App({ modalIsOpen,wishModal,dispatch,mobileMenu}) {
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
  const loc1= useLocation();
  useEffect(()=>{
      dispatch({
          type:"SET_MOBILEMENU",
          payload:false,
      })
  },[loc1.pathname])
    useEffect(()=>{
    dispatch({
        type:"SET_SEARCHMODAL",
        payload:false,
    })
},[loc1.pathname])
  const[selected, setSelected]=useState("");
  return (
    <>
      <Header />
      {modalIsOpen && <SearchModal />}
      {mobileMenu && <MobileSideBar />}
      {wishModal && <WishModal />}
      <ScrollTop/>
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
          /> 
          <Route
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
                <Category selected={selected} setSelected={setSelected} />
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
               <Route
            path="/Blog"
            element={
              <AnimatedRoute name="Blog">
                <Blog  />
              </AnimatedRoute>
            }
          />
             <Route
            path="/Tour1"
            element={
              <AnimatedRoute name="Tour1">
                <Tour1  />
              </AnimatedRoute>
            }
          />
               <Route
            path="/Tour2"
            element={
              <AnimatedRoute name="Tour2">
                <Tour2  />
              </AnimatedRoute>
            }
          />
              <Route
            path="/Tour3"
            element={
              <AnimatedRoute name="Tour3">
                <Tour3  />
              </AnimatedRoute>
            }
          />
              <Route
            path="/Tour4"
            element={
              <AnimatedRoute name="Tour4">
                <Tour4  />
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
