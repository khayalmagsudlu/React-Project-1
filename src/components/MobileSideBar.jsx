import { NavLink} from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import {connect} from "react-redux";
function MobileSideBar({dispatch,mobileMenu}) {
  const list1=useRef()
  const list2=useRef()
  const list3=useRef()
  const list4=useRef()
  const list5=useRef()
  const [categories, setCategories] = useState([]);
  const [col1, setCol1] = useState(false);
  const [col2, setCol2] = useState(false);
  const [col3, setCol3] = useState(false);
  const [col4, setCol4] = useState(false);
  const [col5, setCol5] = useState(false);
  useEffect(() => {
    fetch("http://localhost:1313/categories")
      .then((a) => a.json())
      .then((a) => {
        setCategories(a);
      });
  }, []);
  return (
    <aside  style={{ transform: `translateX(${mobileMenu ? 0 : "-100%"})` }}>
      <i  onClick={()=>{
        dispatch({
          type:"SET_MOBILEMENU",
          payload:false
        })
      }} className="fa-solid fa-xmark xmarks"></i>
        <ul className="mark">
      <li  onClick={()=>setCol1(!col1)} >
      Velosipedlər<i className="fa-solid fa-caret-down"></i>
        <ul ref={list1} style={{height:col1?list1.current.scrollHeight:0}}>
              <li><NavLink to={`/category/1/1`} className="nav-a" >Dağ</NavLink></li>
              <li><NavLink to={`/category/1/2`} className="nav-a" >Yol</NavLink></li>
              <li><NavLink to={`/category/1/3`} className="nav-a" >BMX</NavLink></li>
              <li><NavLink to={`/category/1/4`} className="nav-a" >Uşaq</NavLink></li>
              <li><NavLink to={`/category/1/5`} className="nav-a" >Gravel</NavLink></li>
        </ul>
      </li>
      <li onClick={()=>setCol2(!col2)}>
      E-Velosiped <i  className="fa-solid fa-caret-down"></i>
        <ul ref={list2} style={{height:col2?list2.current.scrollHeight:0}}>
        <li><NavLink to={`/category/2/1`} className="nav-a" >Electric Dağ Velosipedi</NavLink></li>
              <li><NavLink to={`/category/2/2`} className="nav-a" >Electric Hybrid Velosipedi</NavLink></li>
        </ul>
      </li>
      <li onClick={()=>setCol3(!col3)}>
      Ehtiyyat Hissələri<i  className="fa-solid fa-caret-down"></i>
        <ul ref={list3} style={{height:col3?list3.current.scrollHeight:0}}>
        <li><NavLink to={`/category/3/1`} className="nav-a" >Pedal</NavLink></li>
              <li><NavLink to={`/category/3/2`} className="nav-a" >Şin</NavLink></li>
              <li><NavLink to={`/category/3/3`} className="nav-a" >Əyləc</NavLink></li>
              <li><NavLink to={`/category/3/4`} className="nav-a" >Təkərlər</NavLink></li>
              <li><NavLink to={`/category/3/5`} className="nav-a" >Oturacaq</NavLink></li>
        </ul>
      </li>
      <li onClick={()=>setCol4(!col4)}>
      Aksesuarlar<i  className="fa-solid fa-caret-down"></i>
        <ul ref={list4} style={{height:col4?list4.current.scrollHeight:0}}>
        <li><NavLink to={`/category/4/1`} className="nav-a" >Çantalar</NavLink></li>
              <li><NavLink to={`/category/4/2`} className="nav-a" >Kilid</NavLink></li>
              <li><NavLink to={`/category/4/3`} className="nav-a" >İşıqlandırma</NavLink></li>
    </ul>
      </li>
      <li  onClick={()=>setCol5(!col5)}>
      Geyim<i className="fa-solid fa-caret-down"></i>
        <ul ref={list5} style={{height:col5?list5.current.scrollHeight:0}}>
        <li><NavLink to={`/category/5/1`} className="nav-a" >Əlcək</NavLink></li>
              <li><NavLink to={`/category/5/2`} className="nav-a" >Gödəkçə</NavLink></li>
              <li><NavLink to={`/category/5/3`} className="nav-a" >Şort</NavLink></li>
              <li><NavLink to={`/category/5/4`} className="nav-a" >Ayaqqabı</NavLink></li>
              <li><NavLink to={`/category/5/5`} className="nav-a" >Corab</NavLink></li>
        </ul>
      </li>
     </ul>
    </aside>
  );
}
const t=(a)=>{
  return{
    mobileMenu:a.mobileMenu
  }
}
export default connect(t)(MobileSideBar);
