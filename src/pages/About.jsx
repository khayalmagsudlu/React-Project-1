import { Link } from "react-router-dom"

function About() {
  return (
<>
<section className="about-main-image">
  <div className="about-top-image">
    <img  src="https://cdn.rosebikes.de/cms/cms.60864d5ca84b16.21783790.jpg?im=Resize=(4000)" alt="" />
    </div>
  <div className="about-bottom">
    <div className="container">
      <div className="about-bottoms">
      <div className="about-flex">
        <div className="about-bottom-image">
          <img src="https://cdn.rosebikes.de/cms/cms.6049ea005f57f7.97625242.jpg?im=Resize=(720%2C512)" alt="" />
        </div>
        <div className="about-bottom-text">
          <h3>Biz haradanıq</h3>
          <span>Bikeify tarixi araşdırılır</span>
          <p>Əksər böyük şirkətlər kimi biz də kiçik işə başladıq, hər şeyi sınadıq və daim inkişaf etmək və təcrübəmizi genişləndirmək üçün yeni yollar axtardıq. Əvvəlcə pərakəndə, sonra poçt sifarişi, daha sonra istehsalçı və rəqəmsal pioner kimi. Artıq 90-cı illərin sonunda ilk Bikeify Velosiped internet mağazası onlayn oldu və 2005-ci ildən biz Bocholtda BIKETOWN-umuz var. O vaxtdan bəri biz mağaza şəbəkəmizi genişləndirməyə davam etdik və hələ də bütün digər sahələrdə inkişaf edirik. Hər bir addım bizi bugünkü vəziyyətə gətirib. Böyüməkdə olan çox kanallı pərakəndə satıcı və ehtiraslı velosiped markası.</p>
        </div>
        </div>
        <div className="about-flex">
        <div className="about-bottom-image">
          <img src="https://cdn.rosebikes.de/cms/cms.605049548d9684.11896589.jpg?im=Resize=(720%2C512)" alt="" />
        </div>
        <div className="about-bottom-text">
          <h3>Biz kimik</h3>
          <span>Çox yönlülük hər şeydir:</span>
          <p>Sadiq müştərilərimiz, əməkdaşlarımız və onların hazırladıqları kampaniyalar velosipedlərimiz, hissələrimiz və aksesuarlarımız kimi çox yönlüdür. Biz özümüzü təkcə böyük bir ailə adlandırmırıq, həm də bir ailə kimi davranırıq və hər gün yeni üzvlər əlavə edirik. Hazırda 480-ə yaxın həmkarımız var və böyüməmizə baxmayaraq, biz hələ də regional ailə biznesinin cazibəsini qoruyub saxlayırıq. Çünki bizi fərqləndirən və hər bir hərəkətimizi müəyyən edən budur.</p>
        </div>
        </div>
        <div className="about-flex">
        <div className="about-bottom-image">
          <img src="https://cdn.rosebikes.de/cms/cms.6049eb99f3d2b6.31719263.jpg?im=Resize=(720%2C512)" alt="" />
        </div>
        <div className="about-bottom-text">
          <p>"Bikeify Bikes bizim əməkdaşlarımız üçün sadəcə bir iş yeri deyil. Onların velosipedə necə həvəsli olduqlarını hər gün müşahidə edirəm. Çoxları üçün bu, iş və asudə vaxtı birləşdirir. Mənim üçün də. Bu cür bəxtləri hər yerdə tapa bilməzsən".</p>
          <p>Thorsten Heckrath-Rose, Managing Partner at Bikeify Bikes</p>
        </div>
        </div>
        <div className="about-flex">
        <div className="about-bottom-image">
          <img src="https://cdn.rosebikes.de/cms/cms.6049ee637d3e94.66039815.jpg?im=Resize=(720%2C512)" alt="" />
        </div>
        <div className="about-bottom-text">
          <h3>Bizim fəlsəfəmiz</h3>
          <span>Bikeify Bikes insanları velosipedə mindirir</span>
          <p>Bu, 1907-ci ildən bəri hər addımda irəli sürdüyümüz əsas məqsədimizdir. Bizi bu məqsədə yaxınlaşdıran hər bir hərəkət korporativ dəyərlərimizdən qaynaqlanır. Bikeify Bikes regional, yenilikçi, ehtiraslı və ilhamvericidir. Biz idmanı sevirik, diqqətimizi həmişə müştərilərə və işçilərə yönəldirik və davamlı fəaliyyətə xüsusi diqqət yetiririk. Sadiq icmamızla birlikdə biz nəqliyyatda dəyişiklik etmək və qısa məsafələrdə velosipedi 1 nömrəli şəhərətrafı nəqliyyat vasitəsinə çevirmək istəyirik.</p>
        </div>
        </div>
        <div className="about-flex">
        <div className="about-bottom-image">
       <img src="https://cdn.rosebikes.de/cms/cms.6049eee0723839.28741114.jpg?im=Resize=(720%2C512)" alt="" />
        </div>
        <div className="about-bottom-text">
          <h3>Bizim sözümüz</h3>
          <span>Hər kəs üçün mükəmməl bir velosiped var</span>
          <p>Bunu sizə bütün velosiped kateqoriyaları üzrə geniş çeşidimizlə sübut etmək istəyirik. Sizə ən yüksək keyfiyyətlə inandıran və dizayn və texnologiya ehtiyaclarınıza 100% cavab verən, Bocholtda tikilmiş və hazırlanmış təhlükəsiz velosiped tapmaq üçün əlimizdən gələni edəcəyimizə söz verirsiniz. Bundan əlavə, biz sizə ən yaxşı xidmət və misilsiz qiymət-performans nisbəti vəd edirik.</p>
        </div>
        </div>
        <div className="about-bottom-card">
            <div className="about-bottom-card-h3">
              <h3>Bilmək istədiyiniz hər şey</h3>
            </div>
            <div className="about-bottom-card-flex">
              <div className="about-bottom-cards">
                <div className="about-bottom-cards-image">
                  <Link to={`/category/1`}  ><img src="https://cdn.rosebikes.de/cms/cms.6049e370d58c30.05534123.jpg?im=Resize=(580%2C920)" alt="" /></Link>
                </div>
                <div className="about-bottom-cards-button">
                  <Link to={`/category/1`}><button>Davamlılıq</button></Link>
                </div>
              </div>
              <div className="about-bottom-cards">
                <div className="about-bottom-cards-image">
                <Link to={`/category/2/1`}  ><img src="https://cdn.rosebikes.de/cms/cms.5f8ec8723d2528.69517472.jpeg?im=Resize=(580%2C920)" alt="" /></Link>
                </div>
                <div className="about-bottom-cards-button">
                  <Link to={`/category/2/1`}><button>Etibarliliq</button></Link>
                </div>
              </div>
              <div className="about-bottom-cards">
                <div className="about-bottom-cards-image">
                <Link to={`/contact`}  > <img src="https://cdn.rosebikes.de/cms/cms.6049e370c00670.06725034.jpg?im=Resize=(580%2C920)" alt="" /></Link>
                </div>
                <div className="about-bottom-cards-button">
                  <Link to={`/contact`}><button>Əlaqə</button></Link>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</section>
</> 
  )
}

export default About