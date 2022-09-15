import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { connect } from "react-redux";
function Homepage({ basket, wish, dispatch }) {
  const [categoryyitem, setCategoryyitem] = useState([]);
  const [slides, setSlides] = useState([]);
  useEffect(() => {
    fetch("http://localhost:1313/homepageSlider")
      .then((a) => a.json())
      .then((a) => setSlides(a));
  }, []);
  const [slides1, setSlides1] = useState([]);
  useEffect(() => {
    fetch("http://localhost:1313/homepageSlider1")
      .then((a) => a.json())
      .then((a) => setSlides1(a));
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    loop: true,
    clickable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false

        }
      }
    ]
  };
  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    loop: true,
    clickable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots:false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false
        }
      }
    ]
  };
  const addToBasket = (id) => {
    let f = basket.find((t) => t.id === id);
    if (f) {
      f.count++;
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
  const removeFromBasket = (id) => {
    dispatch({
      type: "SET_BASKET",
      payload: [...basket.filter((t) => t.id !== id)],
    });
  };
  let s = [
    {
      id: 1,
      image:
        "https://www.sefiles.net/merchant/5784/images/site/Giant-TranceX-Mountain-Bike-slimC.jpg?t=1614114409101",
      name: "Dağ Velosipedi",
      link: "1/1",
    },
    {
      id: 2,
      image:
        "https://www.sefiles.net/merchant/4040/images/site/con-hp-shop-bikes-road-slimC.jpg?t=1650045561501",
      name: "Yol Velosipedi",
      link: "1/2",
    },
    {
      id: 3,
      image:
        "https://www.sefiles.net/merchant/5784/images/site/Vida-Giant-Electric-slimC.jpg?t=1614114340104",
      name: "Electric Velosipedi",
      link: "2",
    },
    {
      id: 4,
      image:
        "https://www.sefiles.net/merchant/5784/images/site/Kids-bikes-Liv-Giant-slimC.jpg?t=1614114444830",
      name: "Uşaq Velosipedi",
      link: "1/4",
    },
    {
      id: 5,
      image:
        "https://www.sefiles.net/images/library/site/se-sample-5-qbp-hp-gravel-slimC.jpg?t=1585664708560",
      name: "Gravel Velosipedi",
      link: "1/5",
    },
    {
      id: 6,
      image:
        "https://images.danscomp.com/cdn-cgi/image/f=auto,width=748/images/sites/danscomp/home/kink_01.jpg",
      name: "BMX Velosipedi",
      link: "1/3",
    },
  ];
  const addToWish = (id) => {
    let z = wish.find((t) => t.id === id);
    if (z) {
      z.count++;
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
  const removeFromWish = (id) => {
    dispatch({
      type: "SET_WISH",
      payload: [...wish.filter((z) => z.id !== id)],
    });
  };
  return (
    <>
      <section className="velo">
        <div onClick={()=>{
          window.scrollTo({top:0,behavior:'smooth'});
        }} className="back-to-top">&uarr;</div>
      <div className="velo-image"></div>
        <div className="container">
          <div className="velo-text">
            <div className="velo-text1">
              <h1>Onlayn velosiped mağazası</h1>
              <span>Həmişəkindən daha çox seçimlə</span>
            </div>
            <div className="velo-button">
              <Link to={`/category/1`} className="bt">
               Kataloqa Bax 	
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="roads">
        <div className="container">
          <div className="road">
            <div className="road-image">
              <img
                src="https://www.evanscycles.com/images/products/93405002_l.jpg"
                alt=""
              />
            </div>
            <div className="road-text">
              <h2>Trek Domane AL 2 Disc 2022 Road Bike</h2>
              <p>
              Daha çox araşdırın. Daha sərbəst gəzin: Bacarıqlı, çox yönlü çınqıllı yol velosipedi.
                {/* <br /> */}
                Üfüqləri təqib etmək, daha az səyahət edilən marşrutları araşdırmaq
                {/* <br /> */}
                gediş-gəlişinizi sürətləndirmək üçün yaradılmışdır. Harada inkişaf edir: Çınqıllı yollar, elementarda Nə üçün qurulub:
                {/* <br /> */}
                Dartma, idarəetmə, rahatlıq
              </p>
              <span className="road-price">£779.00</span>
              <Link to={`/details/54`}>İndi AL</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bike-categories">
        <div className="container">
          <div className="bike-category-head">
            <h2>Sevəcəyiniz Velosiped tapın</h2>
            <p>Onlayn alış-veriş edin.</p>
          </div>
          <div className="bike-f">
            {s.map((t) => (
              <div key={t.id} className="bike-category">
                <div
                  className="bike-category-image"
                  style={{ background: `url(${t.image})` }}
                ></div>
                <div className="bike-category-text">
                  <h3>{t.name}</h3>
                  <Link to={`/category/${t.link}`}>İndi alış-veriş edin.</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="cards">
        <div className="container">
          <div className="card-head">
            <span>Çox Satılanlar</span>
          </div>
          <Slider {...settings}>
            {slides.map((a) => {
              let f = basket.find((t) => t.id === a.id);
              let z = wish.find((t) => t.id === a.id);
              return (
                <div className="card" key={a.id}>
                  <div className="card-image">
                    <img src={a.image} alt="" />
                  </div>
                  <div className="card-detail">
                    <h3>{a.brand}</h3>
                    <p>{a.title}</p>
                    <span>{a.price} AZN</span>
                    <div className="buttons">
                      {f ? (
                        <button
                          className="remove"
                          onClick={() => removeFromBasket(a.id)}
                        >
                        Səbətdən Sil
                        </button>
                      ) : (
                        <button onClick={() => addToBasket(a.id)}>
                         Səbətə Əlavə Et
                        </button>
                      )}
                      {z ? (
                        <button
                          className="remove"
                          onClick={() => removeFromWish(a.id)}
                        >
                        Seçilmişdən çıxar 
                        </button>
                      ) : (
                        <button onClick={() => addToWish(a.id)}>
                         Seçilmiş et
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
      <section className="clothy">
        <div className="container">
          <div className="clothes">
            <div className="clothes-image">
              <img
                src="https://velolider.az/image/catalog/velolider/img-middle-sneaker1.jpg"
                alt=""
              />
            </div>
            <div className="clothes-text">
              <span className="text">YENİ KOLLEKSİYA 2021</span>
              <h1>PEŞAKAR VELO İDMAN PALTARI</h1>
              <p>
                BİZİM MAĞAZALARIMIZDA SİZ YALNIZ BREND VƏ KEYFİYYƏTLİ MƏHSÜL
                ƏLDƏ EDƏ BİLƏRİSİNİZ. SİZLƏRƏ XİDMƏT GÖSTƏRMƏK GÜRUR DUYURUQ.
              </p>
              <span className="text-btn">
                <Link to={`/category/5`}>Kolleksiyaya keç</Link>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="cards1">
        <div className="container">
          <div className="card-head1">
            <span>Yeni </span>
          </div>
          <Slider {...settings1}>
            {slides1.map((a) => {
              let f = basket.find((t) => t.id === a.id);
              let z = wish.find((t) => t.id === a.id);
              return (
                <div className="card" key={a.id}>
                  <div className="card-image">
                    <img src={a.image} alt="" />
                  </div>
                  <div className="card-detail">
                    <h3>{a.brand}</h3>
                    <p>{a.title}</p>
                    <span>{a.price} AZN</span>
                    <div className="buttons">
                      {f ? (
                        <button
                          className="remove"
                          onClick={() => removeFromBasket(a.id)}
                        >
                        Səbətdən Sil
                        </button>
                      ) : (
                        <button onClick={() => addToBasket(a.id)}>
                          Səbətə Əlavə Et
                        </button>
                      )}
                      {z ? (
                        <button
                          className="remove"
                          onClick={() => removeFromWish(a.id)}
                        >
                      Seçilmişdən çıxar
                        </button>
                      ) : (
                        <button onClick={() => addToWish(a.id)}>
                        Seçilmiş et
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
      <section className="mounty">
        <div className="mount"></div>
      </section>
    </>
  );
}
const t = (a) => {
  return {
    basket: a.basket,
    wish: a.wish,
  };
};
export default connect(t)(Homepage);
