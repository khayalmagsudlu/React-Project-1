import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
function Details({ basket, wish,dispatch }) {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const check = basket.find((a) => a.id === +id);
  const check1 = wish.find((a) => a.id === +id);
  useEffect(() => {
    fetch(`http://localhost:1313/products/${id}`)
      .then((a) => a.json())
      .then((a) => {
        setProduct(a);
        setLoading(false);
      });
  }, []);
  const addToBasket = () => {
    dispatch({
      type: "SET_BASKET",
      payload: [
        ...basket,
        {
          id: +id,
          count: 1,
        },
      ],
    });
  };
  const removeFromBasket = () => {
    dispatch({
      type: "SET_BASKET",
      payload: [...basket.filter((t) => t.id !== +id)],
    });
  };
  // const addToWish=()=>{
  //   dispatch({
  //     type:"SET_WISH",
  //     payload:[
  //       ...wish,
  //       {
  //         id:+id,
  //         count:1,
  //       },
  //     ],
  //   });
  // };
  const addToWish = () => {
    dispatch({
      type: "SET_WISH",
      payload: [
        ...wish,
        {
          id: +id,
          count: 1,
        },
      ],
    });
  };
  const removeFromWish = () => {
    dispatch({
      type: "SET_WISH",
      payload: [...wish.filter((z) => z.id !== +id)],
    });
  };
  const increaseCount = () => {
    let f = basket.find((t) => t.id === +id);
    f.count++;
    dispatch({
      type: "SET_BASKET",
      payload: basket,
    });
  };
  const decreaseCount = () => {
    let f = basket.find((t) => t.id === +id);
    f.count--;
    if (f.count > 0) {
      dispatch({
        type: "SET_BASKET",
        payload: basket,
      });
    } else {
      dispatch({
        type: "SET_BASKET",
        payload: [...basket.filter((t) => t.id !== +id)],
      });
    }
  };
  return (
    <div className="details">
      {/* <div className="container"> */}
        {loading ? (
          <div className="loading1">
            <div className="load"></div>
          </div>
        ) : (
          <>
          <div className="detail">
            <div className="detail-left">
              <img src={product.image} alt="" />
            </div>
            <div className="detail-right">
              <h2>{product.brand}</h2>
              <p>{product.title}</p>
              <h3>{product.price}AZN</h3>
              <h4 className="detail-size">Ölçü:{product.sizedetail}</h4>
              {check && (
                <div className="operations-detail">
                  <span onClick={decreaseCount}>-</span>
                  <h4>{check.count}</h4>
                  <span onClick={increaseCount}>+</span>
                </div>
              )}

              <div className="wish">
                {check ? (
                  <button onClick={removeFromBasket}>Səbətdən Sil</button>
                ) : (
                  <button onClick={addToBasket}>Səbətə Əlavə Et</button>
                )}
                  {check1 ? (
                  <button onClick={removeFromWish}>Seçilmişdən çıxar</button>
                ) : (
                  <button onClick={addToWish}>Seçilmiş et</button>
                )}
              </div>
            </div>
          </div>
          <div className="container">
          <div className="description">
          <h1>Məlumat</h1>
          <p>Bu yüngül, çox yönlü elektron velosipeddə ondan maksimum yararlanın. Gündəlik gediş-gəlişinizi gücləndirin, tapşırıqlarınızı sürətləndirin və ya daha az səyahət edilən yolu kəşf edin. Harada inkişaf edir: Şəhər küçələri və arxa yollar</p>
<p>Polad çərçivə klassik retro tipli boruları təmin etməklə yanaşı, materialın yoldakı zərbələri udması sayəsində daha rahat gəzinti təklif edir. Tam fərdiləşdirilmiş zəncir örtüyü və inteqrasiya olunmuş ikitərəfli zəncir qoruyucusu gəzinti zamanı paltarın ilişib qalmasından və zəncirin düşməsindən maksimum qoruma təmin edir. Rənglə uyğunlaşdırılmış palçıq qoruyucuları köhnə görünüşü tamamlamağa kömək edir, həmçinin paltarlarınızı keçdiyiniz hər hansı gölməçələrdən qoruyur. Pedal Uptown siz şəhər ətrafında səyahət edərkən asan idarəetmə və əyləc gücü üçün arxa v-tormozla təchiz edilmişdir. Bu, dostlarla əylənmək və A-dan B-yə getmək üçün ətrafda gəzmək üçün hazırlanmış velosipeddir.</p>
          </div>
          </div>
          </>
        )}
      {/* </div> */}
    </div>
  );
}
const t = (a) => {
  return {
    basket: a.basket,
    wish: a.wish,
  };
};
export default connect(t)(Details);
