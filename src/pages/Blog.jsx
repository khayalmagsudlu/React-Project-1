import { Link } from "react-router-dom"

function Blog() {
  return (
    <>
    <section>
        <div className="blog-top">
            <div className="Blog-top-text">
                <h1>Blog</h1>
            </div>
        </div>
        <div className="blog-top-bottom">
            <p>Veb saytımız tamamilə velosipedlər, komponentlər, geyim və aksesuarlarla doludur. Biz Bikeify Blogunu velosipedçilərin velosiped <br/> dünyasının bütün incəliklərini öyrənmək üçün bir vasitə kimi yaratdıq. Velosiped hissələrinin böyük seçimləri və ya sadəcə bir az iki təkərli əyləncələr 
            <br/>arasında naviqasiya etmək üçün bələdçilərimiz, necə ediləcəyimiz və rəylərimizdən istifadə edin.</p>
        </div>
        <div className="blog-main">
        <div className="container">
            <div className="blog-main-flex">
                <div className="blog-main-cart1">
                    <div className="blog-cart-image1">
                        <img src="https://www.bikester.co.uk/on/demandware.static/-/Library-Sites-bikester/en/dw3615f5da/Blog/kids_forest_bike_ride.jpg" alt="" />
                    </div>
                    <div className="blog-cart-text1">
                        <h2>Uşaqlarınızla Meşədə Velosiped sürmək</h2>
                        <p>Uşaqlarınızla meşədə velosiped sürməklə yaydan həzz alın - Onları yolsuzluqda velosiped sürməyə alışdırın</p>
                    </div>
                </div>
                <div className="blog-main-cart2">
                    <div className="blog-cart-image2">
                        <img src="https://www.bikester.co.uk/on/demandware.static/-/Library-Sites-bikester/en/dwa8c63c3f/Blog/bike_chain_clean.jpg" alt="" />
                    </div>
                    <div className="blog-cart-text2">
                        <h2>Velosiped zəncirinizi təmiz saxlamaq</h2>
                        <p>Velosiped zəncirinizi mükəmməl vəziyyətdə saxlamaq istəyirsiniz? Avadanlığınızı ən yaxşı vəziyyətdə saxlamaq üçün addım-addım məsləhətlər üçün oxuyun.</p>
                    </div>
                </div>
                <div className="blog-main-cart">
                    <div className="blog-cart-image">
                        <img src="https://www.bikester.co.uk/on/demandware.static/-/Library-Sites-bikester/en/dwcad11efd/Blog/KidsMtbs.jpg" alt="" />
                    </div>
                    <div className="blog-cart-text">
                        <h2>Uşağınız üçün uyğun MTB tapın</h2>
                        <p>Uşağınız üçün hansı MTB daha yaxşıdır? Nəyə diqqət etməlisiniz? - Velosipedçilər bloquna xoş gəlmisiniz</p>
                    </div>
                </div>
                <div className="blog-main-cart">
                    <div className="blog-cart-image">
                        <img src="https://www.bikester.co.uk/on/demandware.static/-/Library-Sites-bikester/en/dw69d0e25a/Blog/europe-cycletour-header.jpg" alt="" />
                    </div>
                    <div className="blog-cart-text">
                        <h2>AVROPADA PAYIZ VELESİPORU ÜÇÜN TOP 7 TƏQDİM </h2>
                        <p>Avropada ən çox sevdiyimiz 7 səyahət istiqaməti ilə siz İtaliyanın şərab yollarını, Fransız və Alman qalalarını, Polşa və Şotlandiya meşələrini və şimal işıqları ilə cazibədar Finlandiyanı tapa bilərsiniz. Sizi qitəmizdə macəralı səyahətə aparırıq və sizə velosipeddən ən yaxşı şəkildə yaşanan bəzi gizli xəzinələri göstəririk.</p>
                    </div>
                </div>
                <div className="blog-main-cart">
                    <div className="blog-cart-image">
                        <img src="https://www.bikester.co.uk/on/demandware.static/-/Library-Sites-bikester/en/dw4f0f7c7e/Blog/header-mental-health.jpg" alt="" />
                    </div>
                    <div className="blog-cart-text">
                        <h2>Sağlam bədən, sağlam ağıl</h2>
                        <p>Digər idman növləri kimi, velosiped sürmək də psixi sağlamlığınız üçün yaxşıdır. Bu, zehninizi və bədəninizi sağlam saxlamaq üçün əla bir yoldur. Formada olmaq, yarışmaq və ya ictimai tədbirlər üçün velosiped sürməyinizdən asılı olmayaraq, velosiped ağlınızı və bədəninizi çəhrayı rəngdə saxlayır.</p>
                    </div>
                </div>
                <div className="blog-main-cart">
                    <div className="blog-cart-image">
                        <img src="https://www.bikester.co.uk/on/demandware.static/-/Library-Sites-bikester/default/dwa1c1fa99/Blog/pedaldark-1.jpg" alt="" />
                    </div>
                    <div className="blog-cart-text">
                        <h2>Siz velosiped aldınız - indi pedallar (və ayaqqabılar) haqqında nə demək olar?</h2>
                        <p>Velosipediniz üçün hansı pedalları və ayaqqabıları seçəcəyinizi bilmək bir az qorxulu ola bilər. Faydalı proqramımız sizə bilməli olduğunuz şeyi dəqiqliklə söyləyir və sizə yol boyu bir neçə lazımlı məsləhət verir.</p>
                    </div>
                </div>
                <div className="blog-main-cart">
                    <div className="blog-cart-image">
                        <img src="https://www.bikester.co.uk/on/demandware.static/-/Library-Sites-bikester/default/dw0247750d/Blog/onlineshopping.jpg" alt="" />
                    </div>
                    <div className="blog-cart-text">
                        <h2>Onlayn Velosiped Alarkən Nələri Bilməlisiniz</h2>
                        <p>Velosiped kimi vacib bir şeyi onlayn alarkən, onu haradan aldığınızı və hansı dövlətə çatacağını bilməlisiniz. Onlayn velosiped almazdan əvvəl bilmək üçün əsas məsləhətlərimizə buradan baxın...</p>
                    </div>
                </div>
                <div className="blog-main-cart">
                    <div className="blog-cart-image">
                        <img src="https://www.bikester.co.uk/on/demandware.static/-/Library-Sites-bikester/default/dwa244ff75/Blog/IMG-20181003-WA0015.jpg" alt="" />
                    </div>
                    <div className="blog-cart-text">
                        <h2>Bikester testləri: Adidas FiveTen Freerider Pro</h2>
                        <p>Adidas Five Ten MTB ayaqqabıları tutuşu, gözəl görünüşü və davamlılığı ilə bütün dünyada sevilir. Biz onların Freerider Pro modelini sınaqdan keçirdik ki, onların şırıngaya uyğun gəlib-gəlmədiyinə baxın.</p>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
    </section>
    </>
    )
}

export default Blog