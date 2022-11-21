import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function SearchModal({ dispatch }) {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    fetch("http://localhost:1313/products")
      .then((a) => a.json())
      .then((a) => setProducts(a));
  }, []);
  useEffect(() => {
    if (search.trim().length >= 3) {
      setSearchResults([
        ...products.filter((a) =>
          a.brand.toLowerCase().startsWith(search.toLowerCase())
        ),
      ].slice(0,3));
    } else {
      setSearchResults([]);
    }
  }, [search]);
  return (
    <>
      <div
        onClick={() => {
          dispatch({
            type: "SET_SEARCHMODAL",
            payload: false,
          });
        }}
        className="modal-container"
      >
        <div onClick={(e) => e.stopPropagation()} className="modal search">
          <div className="modal-body search">
            <form action="">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                placeholder="Axtarış"
              />
            </form>
            <ul className="search-ul">
              {searchResults.map((a) => (
                 <li key={a.id} >
                  <img src={a.image} alt="" />
                  <Link to={`/details/${a.id}`}><p>{a.brand}</p></Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default connect()(SearchModal);
