import { useParams, useLocation } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Product from "../components/Product";
import ReactPaginate from "react-paginate";
function Category({selected, setSelected}) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:1313/categories")
      .then((a) => a.json())
      .then((a) => {
        setCategories(a);
      });
  }, []);
  const list = useRef();
  const list1 = useRef();
  const list2 = useRef();
  const list3 = useRef();
  const list4 = useRef();
  const list5 = useRef();
  let { cat_id } = useParams();
  let loc = useLocation();
  const [mobileFilter,setMobileFilter]=useState(false)
  const [isActive,setIsActive]=useState(false)
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState({});
  const [brands, setBrands] = useState([]);
  const [collapse, setCollapse] = useState(false);
  const [collapseprice, setCollapsePrice] = useState(false);
  const [collapse1, setCollapse1] = useState(false);
  const choseone="react";
  const options=['react','vue','angular']
  const [filter, setFilter] = useState({
    size: "",
    brand: "",
    style:"",
  });
  const [counts, setcounts] = useState({
    All: 0,
    XS: 0,
    S: 0,
    M: 0,
    L: 0,
    XL: 0,
    Onesize:0,
  });
  const[priceFilter,setPriceFilter]=useState({
    min:0,
    max:5000,
  });

  useEffect(() => {
    fetch(`http://localhost:1313/categories/${cat_id}`)
      .then((a) => a.json())
      .then((a) => setCategory(a));
    fetch("http://localhost:1313/products")
      .then((a) => a.json())
      .then((a) => {
        let temp = a.filter((t) => t.category === Number(cat_id));
        setProducts([...temp]);
        setcounts({
          All: temp.length,
          XS: temp.filter((a) => {
            let sizes = a.sizedetail.split(",").map((t) => t.trim());
            return sizes.includes("XS");
          }).length,
          S: temp.filter((a) => {
            let sizes = a.sizedetail.split(",").map((t) => t.trim());
            return sizes.includes("S");
          }).length,
          M: temp.filter((a) => {
            let sizes = a.sizedetail.split(",").map((t) => t.trim());
            return sizes.includes("M");
          }).length,
          L: temp.filter((a) => {
            let sizes = a.sizedetail.split(",").map((t) => t.trim());
            return sizes.includes("L");
          }).length,
          XL: temp.filter((a) => {
            let sizes = a.sizedetail.split(",").map((t) => t.trim());
            return sizes.includes("XL");
          }).length,
          Onesize: temp.filter((a) => {
            let sizes = a.sizedetail.split(",").map((t) => t.trim());
            return sizes.includes("Onesize");
          }).length,
        });
      });
    fetch("http://localhost:1313/brands")
      .then((a) => a.json())
      .then((a) => setBrands(a));
  }, [loc.pathname]);

  const itemsPerPage = 9;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  useEffect(() => {
    let f = products.filter((a) => {
      let size = a.sizedetail.split(",").map((t) => t.trim());
      if (filter.size && filter.brand) {
        return size.includes(filter.size) && a.brand === filter.brand;
      } else if (!filter.size && filter.brand) {
        return a.brand === filter.brand;
      } else if (filter.size && !filter.brand) {
        return size.includes(filter.size);
      } else {
        return a;
      }
    });
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(f.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(f.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, products]);
  const handlePageClick = (event) => {
    let f = products.filter((a) => {
      let size = a.sizedetail.split(",").map((t) => t.trim());
      if (filter.size && filter.brand) {
        return size.includes(filter.size) && a.brand === filter.brand;
      } else if (!filter.size && filter.brand) {
        return a.brand === filter.brand;
      } else if (filter.size && !filter.brand) {
        return size.includes(filter.size);
      } else {
        return a;
      }
    });
    const newOffset = (event.selected * itemsPerPage) % f.length;
    setItemOffset(newOffset);
  };
  useEffect(() => {
    let f=products.filter((a)=>+a.price>=priceFilter.min && +a.price<=priceFilter.max);
     f = f.filter((a) => {
      let size = a.sizedetail.split(",").map((t) => t.trim());
      if (filter.size && filter.brand) {
        return size.includes(filter.size) && a.brand === filter.brand;
      } else if (!filter.size && filter.brand) {
        return a.brand === filter.brand;
      } else if (filter.size && !filter.brand) {
        return size.includes(filter.size);
      } else {
        return a;
      }
    });
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(f.slice(itemOffset, endOffset));

    setPageCount(Math.ceil(f.length / itemsPerPage));
  }, [filter,priceFilter]);
  const [asidefilter1,setAsidefilter1]=useState(false);
  const [asidefilter2,setAsidefilter2]=useState(false);
  const [asidefilter3,setAsidefilter3]=useState(false);
  const [asidefilter4,setAsidefilter4]=useState(false);
  const [asidefilter5,setAsidefilter5]=useState(false);
  return (
      <section className="category-main">
            <div onClick={()=>{
          window.scrollTo({top:0,behavior:'smooth'});
        }} className="back-to-top">&uarr;</div>
      <div className="subcategory-image-main">
        <div className="subcategory-image">
          {/* <img src={subcategory.image && subcategory.image} alt="" /> */}
          {category.image && <img src={category.image}></img>}
        </div>
        <div className="subcategory-image-text">
          {/* <span>{subcategory.name && subcategory.name}</span> */}
          {category.imagename && <span>{category.imagename}</span>}
        </div>
      </div>
      <div className="cats-body">
        <div className="container">
      <div className="category-body">
          <div className="category-flex-left">
     
              <div className="category-box-price">
                <h3>Qiymət</h3>
                <input type="range" min="0" max="5000" onChange={(e)=>setPriceFilter({...priceFilter,min:e.target.value})} />
          <h1 className="price-count">{priceFilter.min}</h1>
                
              </div>
              <div className="category-box-size">
              <div className="checkbox-container">
                <input type="checkbox" id="All" />
                <label
                  className={!filter.size ? "selected" : ""}
                  htmlFor="All"
                  onClick={() => setFilter({ ...filter, size: "" })}
                >
                  All
                </label>
              </div>
              <div className="checkbox-container">
                <input type="checkbox" id="XS" />
                <label
                  className={filter.size === "XS" ? "selected" : ""}
                  htmlFor="XS"
                  onClick={() => setFilter({ ...filter, size: "XS" })}
                >
                  XS<span className="count">({counts["XS"]})</span>
                </label>
              </div>
              <div className="checkbox-container">
                <input type="checkbox" id="S" />
                <label
                  className={filter.size === "S" ? "selected" : ""}
                  htmlFor="S"
                  onClick={() => setFilter({ ...filter, size: "S" })}
                >
                  S<span className="count">({counts["S"]})</span>
                </label>
              </div>
              <div className="checkbox-container">
                <input type="checkbox" id="M" />
                <label
                  className={filter.size === "M" ? "selected" : ""}
                  htmlFor="M"
                  onClick={() => setFilter({ ...filter, size: "M" })}
                >
                  M<span className="count">({counts["M"]})</span>
                </label>
              </div>
              <div className="checkbox-container">
                <input type="checkbox" id="L" />
                <label
                  className={filter.size === "L" ? "selected" : ""}
                  htmlFor="L"
                  onClick={() => setFilter({ ...filter, size: "L" })}
                >
                  L<span className="count">({counts["L"]})</span>
                </label>
              </div>
              <div className="checkbox-container">
                <input type="checkbox" id="XL" />
                <label
                  className={filter.size === "XL" ? "selected" : ""}
                  htmlFor="XL"
                  onClick={() => setFilter({ ...filter, size: "XL" })}
                >
                  XL<span className="count">({counts["XL"]})</span>
                </label>
              </div>
              <div className="checkbox-container">
                <input type="checkbox" id="Onesize" />
                <label
                  className={filter.size === "Onesize" ? "selected" : ""}
                  htmlFor="Onesize"
                  onClick={() => setFilter({ ...filter, size: "Onesize" })}
                >
                  Onesize<span className="count">({counts["Onesize"]})</span>
                </label>
              </div>
              </div>
              <div className="category-box-brand">
              <ul>
              <li>
              <div className="checkbox-container">
                <input type="checkbox" id="All" />
                <label
                  className={!filter.brand ? "selected" : ""}
                  onClick={() => setFilter({ ...filter, brand: "" })}
                >
                  All 
                </label>
              </div>
              </li>
                {brands.filter(a=>{
                  let len=products.filter((t)=> t.brand === a.name).length;
                  return len>0;
                }).map((a)=>(
                  // <li key={a.id}>
                  //   {a.name} {products.filter((t)=>t.brand === a.name).length}
                  // </li>
                  <li onClick={()=>setFilter({...filter, brand: a.name})} key={a.id} >
                  <div   className="checkbox-container">
                  <input type="checkbox" id="All" />
                  <label className={filter.brand === a.name ? "selected" : ""}
                  >
                    {a.name} <span className="count">({products.filter((t)=>t.brand === a.name).length})</span>
                  </label>
                </div>
                </li>
                ))}
              </ul>
              </div>
          </div>
        <div className="category-flex-right">
        <div className=" products ">
          {currentItems.map((a) => (
            <Product item={a} key={a.id} />
          ))}
        </div>
        <div className="paginations">
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            activeClassName={"active"}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
          />
        </div>
        </div>
      </div>
      </div>
      </div>
    </section>
  );
}

export default Category;

