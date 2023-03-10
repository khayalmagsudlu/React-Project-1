import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Pagination, FreeMode } from "swiper";
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
  const addToBasket1 = (id) => {
    let d = basket.find((t) => t.id === id);
    if (d) {
      d.count++;
      dispatch({
        type: "SET_BASKET",
        payload: [
          ...basket,
          {
            id: id,
            count: 1,
          },
        ],
      });
    } else {
      dispatch({
        type: "SET_BASKET",
        payload: [...basket, { id: id, count: 1 }],
      });
    }
  };
  const removeFromBasket1 = (id) => {
    dispatch({
      type: "SET_BASKET",
      payload: [...basket.filter((t) => t.id !== id)],
    });
  };
  const addToWish1 = (id) => {
    let c = wish.find((t) => t.id === id);
    if (c) {
      c.count++;
      dispatch({
        type: "SET_WISH",
        payload: [
          ...wish,
          {
            id: id,
            count: 1,
          },
        ],
      });
    } else {
      dispatch({
        type: "SET_WISH",
        payload: [...wish, { id: id, count: 1 }],
      });
    }
  };
  const removeFromWish1 = (id) => {
    dispatch({
      type: "SET_WISH",
      payload: [...wish.filter((z) => z.id !== id)],
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
  let bike=[
    {
      id: 393,
      image:"https://www.evanscycles.com/images/products/63934513_l.jpg",
      name: "Trek Domane AL 2 2022 Road Bike ",
      link: "/details/58",
      price:"500Azn"
    },
    {
      id: 22,
      image:"https://www.linkpicture.com/q/removal.ai-_tmp-632dc5efcd9f4_1.png",
      name: "Cannondale Topstone 1 2022 Gravel Bike",
      link: "/details/113",
      price:"500Azn"
    },
    {
      id: 376,
      image:"https://www.evanscycles.com/images/products/70280703_l.jpg",
      name: "Muddyfox Energy 26 Inch Mountain Bike",
      link: "/details/34",
    },
    {
      id: 24,
      image:"https://www.linkpicture.com/q/removal.ai-_tmp-632eb7dcd4438_1.png",
      name: "Haibike Trekking 7 High Electric Hybrid Bike",
      link: "/details/160",
    },
    {
      id: 434,
      image:"https://www.evanscycles.com/images/products/91451603_l.jpg",
      name: "Specialized Diverge E5 2022 Gravel Bike",
      link: "/details/120",
    },
    {
      id: 304,
      image:"https://www.evanscycles.com/images/products/93390413_l.jpg",
      name: "Specialized Diverge E5 Elite 2022 Gravel Bike",
      link: "/details/128",
    },
    {
      id: 49,
      image:"https://www.linkpicture.com/q/removal.ai-_tmp-632eb8f53531c_1.png",
      name: "Haibike HardSeven 5 2022 Electric Mountain Bike",
      link: "/details/130",
    },
    {
      id: 59,
      image:"https://www.linkpicture.com/q/removal.ai-_tmp-632eb8789804f_1.png",
      name: "Cannondale Topstone 4 2022 Gravel Bike",
      link: "/details/110",
    },
];
  return (
    <div className="details">
      {/* <div className="container"> */}
        {loading ? (
          <div className="loading1">
            <div className="load"></div>
          </div>
        ) : (
          <>
          <div className="container">
          <div className="detail">
            
            <div className="detail-left">
              <img src={product.image} alt="" />
            
            </div>
            
            <div className="detail-right">
              <h2>{product.brand}</h2>
              <p>{product.title}</p>
              <h3>{product.price}AZN</h3>
              <h4 className="detail-size">??l????:{product.sizedetail}</h4>
              {check && (
                <div className="operations-detail">
                  <span onClick={decreaseCount}>-</span>
                  <h4>{check.count}</h4>
                  <span onClick={increaseCount}>+</span>
                </div>
              )}

              <div className="wish">
                {check ? (
                  <button className="detail-remove" onClick={removeFromBasket}>S??b??td??n Sil</button>
                ) : (
                  <button onClick={addToBasket}>S??b??t?? ??lav?? Et</button>
                )}
                  {check1 ? (
                  <button className="detail-remove"  onClick={removeFromWish}>Se??ilmi??d??n ????xar</button>
                ) : (
                  <button onClick={addToWish}>Se??ilmi?? et</button>
                )}
              </div>
              <div className="detail-right-desc">
                <div className="desc-info-top">
                  <p>Almaq m??mk??nd??r </p>
                  <p>Ad??t??n 2-4 g??n?? haz??r olur</p>
                  <span>Dig??r ma??azalarda m??vcudlu??u yoxlay??n</span>
                </div>
                <div className="desc-info-bottom">
                  <p>26 d??yml??k t??k??rl??r ??z??rind?? qurulmu?? e-velosiped vasit??sil?? ??arpaz platforma add??m?? h??r pedal vuru??u il?? ??yl??nc?? v?? inam?? ilhamland??r??r. Berri ki??ik boylu atl??lar v?? ya daha ??evik yol davran?????? axtaranlar ??????n ideald??r.</p>
                  <ul>
                    <li>ERGOFIT f??ls??f??si - al??tsiz t??nziml??n??n kokpitimiz v?? yeni, daha sabit h??nd??s??miz h??r hans?? ??at????mazl??qlarla ??sl ???ham??ya uy??un bir velosiped??? t??cr??b??si yarad??r.</li>
                    <li>Yenid??n konseptualla??d??r??lm????, a??a???? pill??li dizayn, ????r??iv??nin performans??na v?? ya s??rtliyin?? t??sir etm??d??n montaj v?? s??k??lm??ni asanla??d??r??r..</li>
                  </ul>
                </div>
              </div>
            
            </div>
            
          </div>
         
              <section className="bike-slis">
        <div className="slis-head">
          <h3>T??vsiy?? Olunanlar</h3>
        </div>
        <div className="container">
      {bike &&

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper ee"
        breakpoints={{
          0:{
            slidesPerView: 1,
            spaceBetween: 10,

          },
          480:{
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768:{
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024:{
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1280:{
            slidesPerView: 5,
            spaceBetween: 30,
          }
        }}
      >
        {bike.map(a=>{
             let d = basket.find((t) => t.id === a.id);
             let c = wish.find((t) => t.id === a.id);
             return(
          <SwiperSlide className="bike-slide" key={a.id}>
            <img src={a.image} alt="" />
            <p className="swiper-p">{a.name}</p>
            <div className="sw-buttons">
            {d ? (
                        <button
                          className="remove1"
                          onClick={() => removeFromBasket1(a.id)}
                        >
                        S??b??td??n Sil
                        </button>
                      ) : (
                        <button onClick={() => addToBasket1(a.id)}>
                         S??b??t?? ??lav?? Et
                        </button>
                      )}
                   {c ?(<li  className="remove heart-sw " onClick={() => removeFromWish1(a.id)} data-info="Se??ilmi??d??n ????xar"><i className="fa-solid fa-heart"></i></li>):(<li  className="heart-sw" data-info="Se??ilmi?? et" onClick={() => addToWish1(a.id)}><i className="fa-solid fa-heart"></i></li>)}

            </div>
          </SwiperSlide>
             )
})}
      </Swiper>
  }

      </div>
      </section>
          </div>
          </>
        )}
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
