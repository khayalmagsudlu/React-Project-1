import {Link} from "react-router-dom";
function Product({ item }) {
  return (
     <Link to={`/details/${item.id}`} className="product">
     <img src={item.image} alt="" />
     <h1>{item.brand}</h1>
     <h3>Ölçü:{item.sizedetail}</h3>
     <button>
      Ətraflı Məlumat
      </button>
   </Link>
   
   )
}

export default Product