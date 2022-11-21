import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Countdown from 'react-countdown';
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination, FreeMode } from "swiper";
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
  let bike=[
      {
        id: 58,
        image:"https://www.linkpicture.com/q/removal.ai-_e3a9cc7f-3e2e-4414-9c7a-407226b25077_1.png",
        name: "Trek Domane AL 2 2022 Road Bike",
        link: "/details/58",
        price:"500Azn"
      },
      {
        id: 113,
        image:"https://www.linkpicture.com/q/removal.ai-_tmp-632dc5efcd9f4_1.png",
        name: "Cannondale Topstone 1 2022 Gravel Bike",
        link: "/details/113",
        price:"500Azn"
      },
      {
        id: 34,
        image:"https://www.linkpicture.com/q/removal.ai-_4f0afb23-9f29-4ac5-8a5e-9e36b1999ed2_1.png",
        name: "Muddyfox Energy 26 Inch Mountain Bike",
        link: "/details/34",
      },
      {
        id: 160,
        image:"https://www.linkpicture.com/q/removal.ai-_tmp-632eb7dcd4438_1.png",
        name: "Haibike Trekking 7 High Electric Hybrid Bike",
        link: "/details/160",
      },
      {
        id: 120,
        image:"https://www.linkpicture.com/q/removal.ai-_b451026f-ddaf-4881-9b4a-4b1e1073751c_1.png",
        name: "Specialized Diverge E5 2022 Gravel Bike",
        link: "/details/120",
      },
      {
        id: 66,
        image:"https://www.linkpicture.com/q/removal.ai-_tmp-632eb9661ea7b_1.png",
        name: "Specialized Diverge E5 Elite 2022 Gravel Bike",
        link: "/details/128",
      },
      {
        id: 130,
        image:"https://www.linkpicture.com/q/removal.ai-_tmp-632eb8f53531c_1.png",
        name: "Haibike HardSeven 5 2022 Electric Mountain Bike",
        link: "/details/130",
      },
      {
        id: 110,
        image:"https://www.linkpicture.com/q/removal.ai-_tmp-632eb8789804f_1.png",
        name: "Cannondale Topstone 4 2022 Gravel Bike",
        link: "/details/110",
      },
  ];
  let clothes=[
    {
      id: 12,
      image:"https://www.evanscycles.com/images/products/45055618_l.jpg",
      name: "Endura",
      title: "Xtract II Jacket",
      link: "/details/413",
      price:"40 Azn"
    },
    
    {
      id: 22,
      image:"https://www.evanscycles.com/images/products/63138605_l.jpg",
      name: "Endura",
      title: "Hummvee Short II",
      link: "/details/430",
      price:"59.99 Azn"
    },
    {
      id: 33,
      image:"https://www.evanscycles.com/images/products/14057701_l.jpg",
      name: "Specialized",
      title: "S-Works Road Shoe",
      price:"299 Azn",
      link: "/details/440",
    },
    {
      id: 24,
      image:"https://www.evanscycles.com/images/products/70341918_l.jpg",
      name: "Fox",
      title: "6in Rnger Sock Sn00",
      price:"10 Azn",
      link: "/details/475",
    },
    {
      id: 5,
      image:"https://www.evanscycles.com/images/products/63141715_l.jpg",
      name: "Endura",
      title: "Women's Hummvee Shorts",
      price:"64.99 Azn",
      link: "/details/429",
    },
    {
      id: 39,
      image:"https://www.evanscycles.com/images/products/70325901_l.jpg",
      name: "Castelli",
      title: "Entrata 13 Socks",
      price:"15 Azn",
      link: "/details/469",
    },
    {
      id: 49,
      image:"https://www.evanscycles.com/images/products/14069816_l.jpg",
      name: "Specialized",
      title: "Torch 1.0 Road Shoe",
      price:"95 Azn",
      link: "/details/457",
    },
    {
      id: 52,
      image:"https://www.evanscycles.com/images/products/71990512_l.jpg",
      name: "Fox",
      link: "/details/477",
      price:"16 Azn",
      title: "8 Inch Ranger Park Socks",
    },
    {
      id:3,
      image:"https://www.evanscycles.com/images/products/63138622_l.jpg",
      name: "Endura",
      link: "/details/421",
      price:"59.99 Azn",
      title: "Hummvee Short II",
    }
];
  let gravel=[
      {
        id: 242,
        image:"https://www.linkpicture.com/q/removal.ai-_tmp-632f7fc931ddf_1.png",
        title: "Shimano XT M8000 I-Spec II Disc",
        name:"Əyləc",
        link: "/details/242",
        price:"70 Azn"
      },
      {
        id: 293,
        image:"https://www.linkpicture.com/q/removal.ai-_tmp-632f8032cebce_1.png",
        title: "Fizik Transiro Mistica Carbon Saddle",
        name:"Oturacaq",
        link: "/details/293",
        price:"115 Azn"

      },
      {
        id: 355,
        image:"https://www.linkpicture.com/q/removal.ai-_tmp-63618b81b84a4.png",
        title: "Cateye Volt 100XC / ORB Rechargable Light Set",
        name:"İşıqlandırma",
        link: "/details/355",
        price:"55 Azn"

      },
      {
        id: 203,
        image:"https://www.linkpicture.com/q/removal.ai-_1684fb24-6fb3-4b74-a24a-8fadad881a9a_1.png",
        name:"Şin",
        title: "Continental Grand Prix 5000 700C Folding Clincher",
        link: "/details/203",
        price:"59.95 Azn"

      },
  ];
  let spare=[
    {
      id: 1,
      image:"https://www.linkpicture.com/q/removal.ai-_tmp-632f7fc931ddf_1.png",
      name: "Valegro Helmet | White Gloss",
      link: "1/1",
    },
    {
      id: 2,
      image:"https://www.linkpicture.com/q/removal.ai-_tmp-632f8032cebce_1.png",
      name: "Valegro Helmet | White Gloss",
      link: "1/1",
    },
    {
      id: 3,
      image:"https://www.linkpicture.com/q/removal.ai-_tmp-632f80826c145.png",
      name: "Valegro Helmet | White Gloss",
      link: "1/1",
    },
    {
      id: 4,
      image:"https://www.linkpicture.com/q/removal.ai-_tmp-632f97de600d3_1.png",
      name: "Valegro Helmet | White Gloss",
      link: "1/1",
    },
    {
      id: 5,
      image:"https://www.linkpicture.com/q/removal.ai-_tmp-632f9848a25a3_1.png",
      name: "Valegro Helmet | White Gloss",
      link: "1/1",
    },
    {
      id: 6,
      image:"https://www.linkpicture.com/q/removal.ai-_1684fb24-6fb3-4b74-a24a-8fadad881a9a_1.png",
      name: "Valegro Helmet | White Gloss",
      link: "1/1",
    },
    {
      id: 7,
      image:"https://www.linkpicture.com/q/removal.ai-_2b4f2fa4-fc7b-4337-8b36-5996f612445a_1.png",
      name: "Valegro Helmet | White Gloss",
      link: "1/1",
    },
    {
      id: 8,
      image:"https://www.linkpicture.com/q/removal.ai-_tmp-632f96d395b21_1.png",
      name: "Valegro Helmet | White Gloss",
      link: "1/1",
    },
  ];
  let speacial=[
    {
      id: 21,
      image:"https://www.linkpicture.com/q/removal.ai-_tmp-632dc5efcd9f4_1.png",
      name: "Cannondale Topstone 1 2022 Gravel Bike",
      link: "/details/113",
      price:"1399.00AZN"
    },
  ]
  let orginal=[
    {
      id: 1,
      image:"https://cdn.sanity.io/images/cwkbno5g/production/7f8bea8e236037fcc011a10749324c163c3af634-2560x1707.jpg?w=350&h=350&dpr=1&quality=80&auto=format&fit=crop",
      name: "Cinelli Nemo TIG Disc",
      link: "1/1",
    },
    {
      id: 2,
      image:"https://cdn.sanity.io/images/cwkbno5g/production/91cead10fde39e8e9c985d6950fb007fad72543d-2560x1707.jpg?w=350&h=350&dpr=1&quality=80&auto=format&fit=crop",
      name: "Cinelli Nemo TIG Disc",
      link: "1/1",
    },
    {
      id: 31,
      image:"https://cdn.sanity.io/images/cwkbno5g/production/94d30b9962e47cf20d06df5cb212dfe081c663bb-1707x2560.jpg?w=350&h=350&dpr=1&quality=80&auto=format&fit=crop",
      name: "Cinelli Nemo TIG Disc",
      link: "1/1",
    },
    {
      id: 4,
      image:"https://cdn.sanity.io/images/cwkbno5g/production/638e10770f3ed78f31391fddbd40a1ba13844232-2560x1541.jpg?w=350&h=350&dpr=1&quality=80&auto=format&fit=crop",
      name: "Cinelli Nemo TIG Disc",
      link: "1/1",
    },
    {
      id: 5,
      image:"https://cdn.sanity.io/images/cwkbno5g/production/cebded51f1ef206fef5517ebc375b145c581ab28-1707x2560.jpg?w=350&h=350&dpr=1&quality=80&auto=format&fit=crop",
      name: "Cinelli Nemo TIG Disc",
      link: "1/1",
    },
    {
      id: 6,
      image:"https://cdn.sanity.io/images/cwkbno5g/production/0cd8ae1864a24c38adb1f62ab254bf1e5b1fc493-2560x1535.jpg?w=350&h=350&dpr=1&quality=80&auto=format&fit=crop",
      name: "Cinelli Nemo TIG Disc",
      link: "1/1",
    },
    {
      id: 7,
      image:"https://cdn.sanity.io/images/cwkbno5g/production/dde2b27d7df6e1b3382e7d92260a52867ee80a73-2560x1707.jpg?w=350&h=350&dpr=1&quality=80&auto=format&fit=crop",
      name: "Cinelli Nemo TIG Disc",
      link: "1/1",
    },
    {
      id: 8,
      image:"https://cdn.sanity.io/images/cwkbno5g/production/4fa671e05ef6e46966ec68365ca934f7feed9031-2560x1707.jpg?w=350&h=350&dpr=1&quality=80&auto=format&fit=crop",
      name: "Cinelli Nemo TIG Disc",
      link: "1/1",
    },

  ];

  const endTime= new Date('november 25, 2022 20:00:00').getTime();
  const [currentTime,setCurrentTime]=useState(new Date().getTime());
  const gap=endTime-currentTime;
  
  
  const seconds=1000;
  const minutes=seconds * 60;
  const hours=minutes * 60;
  const days=hours * 24;
  
  
  const remainingDays=Math.floor(gap/days);
  const remainingHours=Math.floor((gap%days) / hours);
  const remainingMinutes=Math.floor((gap%hours) / minutes);
  const remainingSeconds=Math.floor((gap%minutes) / seconds);
   
    useEffect(()=>{
      setTimeout(()=>setCurrentTime(new Date().getTime()),1000)
    },[currentTime])

  return (
    <>
      <section className="main-image">
        <div className="main-image-top-head">
          <h1>Su Keçirməz Geyimlər</h1>
          <p>Düzgün Geyimlə velosiped sürməyə davam et</p>
        </div>
      <div className="container">
      <div className="main-body-category-head">
        <h1>Geyim Kateqoriyası</h1>
      </div>
        <div className="main-body-category-buttons-flex">
          <div className="main-body-category-buttons">
            <div className="bt-main">
            <Link to={'/category/5/2'}>Gödəkçə</Link>
            </div>
          </div>
          <div className="main-body-category-buttons">
            <div className="bt-main">
          <Link to={'/category/5/3'}>Şort</Link>
          </div>
          </div>
          <div className="main-body-category-buttons">
          <div className="bt-main">
          <Link to={'/category/5/4'}>Ayaqqabı</Link>
          </div>
          </div>
          <div className="main-body-category-buttons">
          <div className="bt-main">
          <Link to={'/category/5/5'}>Corab</Link>
          </div>
          </div>
        </div>
      <div className="main-image-slides">
        <div className="main-image-slides-body">
        <div className="main-image-span">
          <span>Ən Yaxşı Seçimlər</span>
        </div>
        <div className="main-image-slider">
          <>
          {clothes &&
          <Swiper
        slidesPerView={6}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
      
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper cl"
        breakpoints={{
          0:{
            slidesPerView: 1,
            spaceBetween: 10,

          },
          464:{
            slidesPerView: 2,
            spaceBetween: 10,

          },
          580:{
            slidesPerView: 3,
            spaceBetween: 30,
          },
          768:{
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1024:{
            slidesPerView: 5,
            spaceBetween: 15,
          },
          1280:{
            slidesPerView: 6,
            spaceBetween: 30,
          }
        }}
      >
        {clothes.map(a=>(
        <SwiperSlide key={a.id} className="clothes-slider">
          <div className="sd">
          <Link to={a.link}><img src={a.image} alt="" /></Link>
          <h3>{a.name}</h3>
          <p>{a.title}</p>
          <span>{a.price}</span>
          </div>
        </SwiperSlide>
        ))}

      </Swiper>
      }
          </>
        </div>
        </div>
        </div>
      </div>
      </section>
      <section data-aos="fade-up"  className="truc">
        <div className="container">
          <div className="truck-flex">
          <div className="trucks">
            <div className="truck-image">
            <i className="fa-solid fa-truck"></i>
            </div>
            <div className="truck-text">
              <h3>Pulsuz Çatdırılma</h3>
              <p>50 AZN-dən yuxarı sifarişlərə çatdırılma pulsuz.</p>
            </div>
          </div>
          <div className="trucks">
            <div className="truck-image">
            <i className="fa-solid fa-phone"></i>
            </div>
            <div className="truck-text">
              <h3>Onlayn Dəstək</h3>
              <p>+994553557498</p>
            </div>
          </div>
          <div className="trucks">
            <div className="truck-image">
            <i className="fa-solid fa-arrow-rotate-left"></i>
            </div>
            <div className="truck-text">
              <h3>Geri Qaytarılma</h3>
              <p>14 gün ərzində geri qaytarılma</p>
            </div>
          </div>
          </div>
        </div>
      </section>
      <section data-aos="fade-up" className="them">
        <div className="container">
          <div className="thems-flex">
          <div className="thems">
              <div className="thems-image">
                <img src="http://demo2.themelexus.com/ridez/wp-content/uploads/2021/12/h4-banner4.jpg" alt="" />
              </div>
              <div className="thems-text">
                <h2>İşıq</h2>
                <Link to={'category/4/3'}>Daha Ətraflı</Link>
              </div>
          </div>
          <div className="thems">
              <div className="thems-image">
                <img src="http://demo2.themelexus.com/ridez/wp-content/uploads/2021/12/h4-banner5.jpg" alt="" />
              </div>
              <div className="thems-text">
                <h2>Əyləc</h2>
                <Link  to={'category/3/3'}>Daha Ətraflı</Link>

              </div>
          </div>
          <div className="thems">
              <div className="thems-image">
                <img src="http://demo2.themelexus.com/ridez/wp-content/uploads/2021/12/h4-banner6.jpg" alt="" />
              </div>
              <div className="thems-text">
                <h2>Geyim</h2>
                <Link to={'category/5'}>Daha Ətraflı</Link>
              </div>
          </div>
          </div>
        
        </div>
      </section>
      <section data-aos="fade-up" className="bike-video">
        <video autoPlay loop muted >
          <source src="https://cdn.shopify.com/videos/c/o/v/7b263d8b26fc4cfc9f03e2eeaa7daf74.mp4" type="video/mp4"/>
        </video>
        <div className="bike-video-text">
            <h3>Dağ velosipedi ilə gəzinti</h3>
            <p>Öz Seçimini Et</p>
              <Link className="video-btn" to={'/category/1/1'}>Nəzərdən Keçirin</Link>
          </div>
      </section>
      <section   data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="100"
    data-aos-duration="500"
    className="bike-slis">
        <div className="slis-head">
          <h3>Ən Çox Satılanlar</h3>
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
             let f = basket.find((t) => t.id === a.id);
             let z = wish.find((t) => t.id === a.id);
             return(
          <SwiperSlide className="bike-slide" key={a.id}>
            <img src={a.image} alt="" />
            <p className="swiper-p">{a.name}</p>
            <div className="sw-buttons">
                   <li className="eyes" data-info="Ətraflı Bax"><Link to={a.link}><i className="fa-solid fa-eye"></i></Link></li>
            {f ? (
                        <button
                          className="remove1"
                          onClick={() => removeFromBasket(a.id)}
                        >
                        Səbətdən Sil
                        </button>
                      ) : (
                        <button onClick={() => addToBasket(a.id)}>
                         Səbətə Əlavə Et
                        </button>
                      )}
                   {z ?(<li  className="remove heart-sw " onClick={() => removeFromWish(a.id)} data-info="Seçilmişdən çıxar"><i className="fa-solid fa-heart"></i></li>):(<li  className="heart-sw" data-info="Seçilmiş et" onClick={() => addToWish(a.id)}><i className="fa-solid fa-heart"></i></li>)}

            </div>
          </SwiperSlide>
             )
})}
      </Swiper>
  }
      </div>
      </section>
      <section  data-aos="fade-up"
     data-aos-offset="200"
     data-aos-delay="100"
     data-aos-duration="300" className="clothy">
        <div className="container">
          <div className="clothes">
            <div className="clothes-image">
              <img
                src="https://cdn.shopify.com/s/files/1/1359/0089/t/6/assets/slide2.jpg?v=100887710395476282281469008033"
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
      <section  data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="100"
    data-aos-duration="500" className="roads">
        <div className="container">
          <div className="road">
            <div className="road-image">
              <Link to={'/details/166'}><img
                // src="https://www.linkpicture.com/q/removal.ai-_tmp-63388840529a2.png"
                src="https://www.linkpicture.com/q/removal.ai-_tmp-6373db76e92ee.png"
                alt=""
              /></Link>
            </div>
            <div className="road-text">
              <h2>Specialized Allez E5 Sport 2022 Yol Velosipedi</h2>
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
              <Link to={`/details/72`}>İndi AL</Link>
            </div>
          </div>
        </div>
      </section>
      <section  data-aos="fade-up"
     data-aos-offset="200"
     data-aos-delay="100"
     data-aos-duration="300" className="timer-main">
      <div className="container">
        {speacial.map((a)=>{
                       let f = basket.find((t) => t.id === a.id);
                       let z = wish.find((t) => t.id === a.id);
                       return(
                        <div key={a.id} className="timer-flex">
                        <div className="timer-left">
                          <img src={a.image} alt="" />
                        </div>
                          <div className="timer">
                            <div className="timer-top">
                            <span>Xüsusi Təklif</span>
                            </div>
                            <div className="timer-center">
                              <div className="timer-hour">
                                <p>{remainingDays}</p>
                                <p className="hour-p-d"><small>Gün</small></p>
                              </div>
                              <span className="point">:</span>
                              <div className="timer-hour">
                                <p>{remainingHours}</p>
                                <p className="hour-p-d"><small>Saat</small></p>
                              </div>
                              <span className="point">:</span>
                              <div className="timer-hour">
                                <p>{remainingMinutes}</p>
                                <p className="hour-p-d"><small>Dəqiqə</small></p>
                              </div>
                              <span className="point">:</span>
                              <div className="timer-hour">
                                <p>{remainingSeconds}</p>
                                <p className="hour-p-d"><small>Saniyə</small></p>
                              </div>
                            </div>
                            <div className="timer-bottom">
                              <p>Topstone 1 2022 Gravel Bike</p>
                              <span>1399.00AZN</span>
                              <span className="tb">Ölçü:M, XL</span>
                            </div>
                            <div className="timer-bottom-button">
                              <div className="timer-button-left">
                              {f ? (
                        <button  className="timer-bottom-remov"
                          onClick={() => removeFromBasket(a.id)}
                        >
                        Səbətdən Sil
                        </button>
                      ) : (
                        <button className="timer-bottom-add"  onClick={() => addToBasket(a.id)}>
                         Səbətə Əlavə Et
                        </button>
                      )}
                      </div>
                              <div className="timer-button-right">
                              {z ? (
                  <button  className="timer-bottom-remov1" onClick={()=>removeFromWish(a.id)}>Seçilmişdən çıxar</button>
                ) : (
                  <button className="timer-bottom-add1"  onClick={()=>addToWish(a.id)}>Seçilmiş et</button>
                )}
                              </div>
                     
                        
                </div>
                          </div>
                          </div>
                       )
        })}
     
        </div>
      </section>
        <section className="spares"   data-aos="fade-up"
     data-aos-offset="200"
     data-aos-delay="100"
     data-aos-duration="300" >
          <div className="container">
              <div className="spare-flex">
                {gravel.map((a)=>{
                    let f = basket.find((t) => t.id === a.id);
                    let z = wish.find((t) => t.id === a.id);
                    return(
                    <div key={a.id} className="spare-card">
                    <div className="spare-image">
                       <Link to={a.link}><img src={a.image} alt="" /></Link> 
                    </div>
                    <div className="spare-text">
                        <h2>{a.name}</h2>
                        <p>{a.title}</p>
                        <div className="buttons6">
                    {z ? (
                        <button
                          className="remove"
                          onClick={() => removeFromWish(a.id)}
                        >
                        Seçilmişdən çıxar 
                        </button>
                      ) : (
                        <button className="gr-button" onClick={() => addToWish(a.id)}>
                         Seçilmiş et
                        </button>
                      )}
                          {f ? (
                        <button
                          className="remove1"
                          onClick={() => removeFromBasket(a.id)}
                        >
                        Səbətdən Sil
                        </button>
                      ) : (
                        <button className="gr-button-add" onClick={() => addToBasket(a.id)}>
                         Səbətə Əlavə Et
                        </button>
                      )}
     </div>
                    </div>
                  </div>
                    )
                })}
            
              </div>
          </div>
        </section>
      <section data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="100"
    data-aos-duration="500"  className="Featured">
        <div className="container">
          <div className="tours-head">
            <h2>Seçilmiş Turlar</h2>
          </div>
          <div className="tours-flex">
            <div className="tours">
             <div className="tours-image">
             <Link to="/Tour1"><img src="https://komo.vamtam.com/wp-content/uploads/2017/08/photo-03-630x787.jpg" alt="" />
             </Link>
              </div>
              <div className="tours-text">
                <span>Mədəni və tematik turlar</span>
              </div>
            </div>
            <div className="tours">
              <div className="tours-image">
              <Link to="/Tour2"> <img src="https://komo.vamtam.com/wp-content/uploads/2010/03/photo-25-630x787.jpg" alt="" />
              </Link>
              </div>
              <div className="tours-text">
                <span>Tarixi mərkəzdə sənət turu</span>
              </div>
            </div>
            <div className="tours">
              <div className="tours-image">
              <Link to="/Tour3"> <img src="https://komo.vamtam.com/wp-content/uploads/2017/08/photo-06-630x787.jpg" alt="" />
              </Link>
              </div>
              <div className="tours-text">
                <span>Tətil və mövsümi turlar</span>
              </div>
            </div>
            <div className="tours">
              <div className="tours-image">
              <Link to="/Tour4"> <img src="https://komo.vamtam.com/wp-content/uploads/2017/08/photo-28-630x787.jpg" alt="" />
              </Link>
              </div>
              <div className="tours-text">
                <span>Ən yüksək zirvəyə qalxın</span>
              </div>
            </div>
           
          </div>
        </div>
      </section>
      <section  className="review">
        <div className="container">
          <div className="review-flex">
            <div className="review-left">
              <h2>Müştəri Xidməti Nümayəndələri</h2>
              <p>Sizin Velosipediniz  Üçün Ehtiyacınız Olan Hər Şeyi Edəcik.</p>
            </div>
            <div className="review-right">
            <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0:{
            slidesPerView:1,
            spaceBetween:10
          },
          480:{
            slidesPerView:1,
            spaceBetween:10
          },
          768:{
            slidesPerView:2,
            spaceBetween:10
          },
          1024:{
            slidesPerView:3,
            spaceBetween:10
          },
        }}
        className="mySwiper rw"
      >
        <SwiperSlide className="re">
          <div className="rewiew-i">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        </div>
        <div className="rewiew-p">
        <p>Velosiped komponentləri komandası öz müştərisini dəstəkləmək üçün həmişə hazır olduğunu sübut etdi.</p>
        </div>
        <div className="review-body-flex">
        <div className="review-picture-flex">
        <div className="review-picture">
          <img src="https://kits.moxcreative.com/bikepro/wp-content/uploads/sites/4/2021/03/handsome-man-1-e1617058412797.jpg" alt="" />
        </div>
        <div className="review-picture-text">
          <strong>John Doe</strong>
          <span>Bisikletçi</span>
        </div>
        </div>
        <div className="review-quote">
        <i className="fa-solid fa-quote-right"></i>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className="re">
          <div className="rewiew-i">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        </div>
        <div className="rewiew-p">
        <p>Alış-verişimdən çox məmnunam. Azerbaycana sürətli çatdırılma və sərfəli qiymətlər! Çox tövsiyə edirik!</p>
        </div>
        <div className="review-body-flex">
        <div className="review-picture-flex">
        <div className="review-picture">
          <img src="https://kitpro.site/gowes/wp-content/uploads/sites/121/2022/10/always-nice-to-talk-with-smart-person-indoor-shot-9SVRHFZ.jpg" alt="" />
        </div>
        <div className="review-picture-text">
          <strong>John Summer</strong>
          <p>Ofis işçisi</p>
        </div>
        </div>
        <div className="review-quote">
        <i className="fa-solid fa-quote-right"></i>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className="re">
          <div className="rewiew-i">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        </div>
        <div className="rewiew-p">
        <p>Bikeify-da alış-veriş etmək həmişə xoşdur. Yaxşı xidmət, sürətli çatdırılma və ədalətli qiymətlər. İnternetdə kilolarım.</p>
        </div>
        <div className="review-body-flex">
        <div className="review-picture-flex">
        <div className="review-picture">
          <img src="https://kitpro.site/gowes/wp-content/uploads/sites/121/2022/10/businessman-6YLTKXC.jpg" alt="" />
        </div>
        <div className="review-picture-text">
          <strong>Adam Sandy</strong>
          <p>İşadamı</p>
        </div>
        </div>
        <div className="review-quote">
        <i className="fa-solid fa-quote-right"></i>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className="re">
          <div className="rewiew-i">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        </div>
        <div className="rewiew-p">
        <p>alışımdan çox məmnunam. Rumıniyaya sürətli çatdırılma və sərfəli qiymətlər! Çox tövsiyə edirik!</p>
        </div>
        <div className="review-body-flex">
        <div className="review-picture-flex">
        <div className="review-picture">
          <img src="https://templatekits.themewarrior.com/roadpedal/wp-content/uploads/sites/29/2021/08/testi06.jpg" alt="" />
        </div>
        <div className="review-picture-text">
          <strong>Quinn Nolan</strong>
          <p>Menecer</p>
        </div>
        </div>
        <div className="review-quote">
        <i className="fa-solid fa-quote-right"></i>
        </div>
        </div>
        </SwiperSlide>
      </Swiper>
            </div>
          </div>
        </div>
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
