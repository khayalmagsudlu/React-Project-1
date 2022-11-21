import {NavLink} from "react-router-dom";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
       <footer>
            {/* <div className="container">
            <div className="about">
                <div className="abouts">
                    <div className="about-location">
                        <div className="location-head">
                            <p className="font_1">Mağaza Adresi <div className="footer-undeline"><span></span></div></p>
                        </div>
                        <div className="location-body">
                            <div className="location-adres">
                                <ul>
                                    <li>Xətai r., Afiyəddin Cəlilov 26</li>
                                </ul>
                            </div>
                            <div className="location-icon">
                                <ul>
                                    <li><i className="fab fa-facebook-f"></i></li>
                                    <li><i className="fa-brands fa-instagram"></i></li>
                                    <li><i className="fab fa-twitter"></i></li>
                                    <li><i className="fab fa-youtube"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="about-shop">
                        <div className="about-shop-head">
                            <p className="font_1">Mağaza <div className="footer-undeline"><span></span></div></p>
                        </div>
                        <div className="about-body">
                            <ul>
                                <li><Link to={`/category/1`}>Velosipedlər</Link></li>
                                <li><Link to={`/category/3`}>Ehtiyyat Hissələri</Link></li>
                                <li><Link to={`/category/5`}>Geyim</Link></li>
                                <li><Link to={`/category/4`}>Aksessuarlar</Link></li>
                            </ul>
                        </div>
                    </div>


                    <div className="about-support">
                        <div className="about-support-head">
                            <p className="font_1">Məlumat <div className="footer-undeline"><span></span></div></p>
                        </div>
                        <div className="support-body">
                            <ul>
                                <li><NavLink to="/contact">Əlaqə</NavLink></li>
                                <li><NavLink to="/Blog">Blog</NavLink></li>
                                <li><NavLink to="/about">Haqqımızda</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="about-policy">
                        <div className="policy-head">
                            <p className="font_1">Gizlilik siyasəti <div className="footer-undeline"><span></span></div></p>

                        </div>
                        <div className="policy-body">
                            <ul>
                                <li><NavLink to="/shipping">Çatdırılma</NavLink></li>
                                <li><NavLink to="/condition">Geriqaytarma</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div> */}
            {/* <div className="container">
                <div className="footer-flex-all">
                    <div className="footer-location-flex">
                            <div className="footer-location-head">
                                    <h1 className="footer-h1" >Mağaza Adresi</h1>
                            </div>
                            <div className="footer-location-body">
                                <p>Xətai r., Afiyəddin Cəlilov 26</p>
                            </div>
                            <div className="footer-location-icon">
                            <ul>
                                    <li><i className="fab fa-facebook-f"></i></li>
                                    <li><i className="fa-brands fa-instagram"></i></li>
                                    <li><i className="fab fa-twitter"></i></li>
                                    <li><i className="fab fa-youtube"></i></li>
                                </ul>
                            </div>
                            </div>
                    <div className="footer-shop-flex">
                        <div className="footer-shop-head">
                            <h1 className="footer-h1" >Mağaza</h1>
                        </div>
                        <div className="footer-shop-body">
                        <ul className="footer-ul">
                                <li><Link to={`/category/1`}>Velosipedlər</Link></li>
                                <li><Link to={`/category/3`}>Ehtiyyat Hissələri</Link></li>
                                <li><Link to={`/category/5`}>Geyim</Link></li>
                                <li><Link to={`/category/4`}>Aksessuarlar</Link></li>
                            </ul>
                        </div>
                        </div>
                    <div className="footer-support-flex">
                            <div className="footer-support-head">
                                <h1 className="footer-h1" >Məlumat</h1>
                            </div>
                            <div className="footer-support-body">
                            <ul className="footer-ul">
                                <li><NavLink to="/contact">Əlaqə</NavLink></li>
                                <li><NavLink to="/Blog">Blog</NavLink></li>
                                <li><NavLink to="/about">Haqqımızda</NavLink></li>
                            </ul>
                            </div>
                    </div>
                    <div className="footer-policy-flex">
                            <div className="footer-policy-head">
                                <h1 className="footer-h1" >Gizlilik siyasəti</h1>
                            </div>
                            <div className="footer-policy-body">
                            <ul className="footer-ul">
                                <li><NavLink to="/shipping">Çatdırılma</NavLink></li>
                                <li><NavLink to="/condition">Geriqaytarma</NavLink></li>
                            </ul>
                            </div>
                    </div>
                </div>
            </div> */}
            <div className="container">
            <div className="footer-flex">
                <div className="footers">
                    <div className="footer-head">
                            <h2 className="font_1">Mağaza Adresi<div className="footer-undeline1"><span></span></div></h2>

                    </div>
                    <div className="footer-body">
                            <p>Xətai r., Afiyəddin Cəlilov 26</p>
                    </div>
                    <div className="footer-icon">
                                <ul>
                                    <li><i className="fab fa-facebook-f"></i></li>
                                    <li><i className="fa-brands fa-instagram"></i></li>
                                    <li><i className="fab fa-twitter"></i></li>
                                    <li><i className="fab fa-youtube"></i></li>
                                </ul>
                    </div>
                </div>
                <div className="footers">
                    <div className="footer-head">
                                  <h2 className="font_1">Kateqoriya <div className="footer-undeline"><span></span></div></h2>

                    </div>
                    <div className="footer-body">
                             <ul>
                                <li><Link to={`/category/1`}>Velosipedlər</Link></li>
                                <li><Link to={`/category/3`}>Ehtiyyat Hissələri</Link></li>
                                <li><Link to={`/category/5`}>Geyim</Link></li>
                                <li><Link to={`/category/4`}>Aksessuarlar</Link></li>
                            </ul>
                    </div>
                </div>
                <div className="footers">
                    <div className="footer-head">
                            <h2 className="font_1">Məlumat <div className="footer-undeline"><span></span></div></h2>

                    </div>
                    <div className="footer-body">
                              <ul>
                                <li><NavLink to="/contact">Əlaqə</NavLink></li>
                                <li><NavLink to="/Blog">Blog</NavLink></li>
                                <li><NavLink to="/about">Haqqımızda</NavLink></li>
                            </ul>
                    </div>
                </div>
                <div className="footers">
                    <div className="footer-head">
                    <h2 className="font_1">Gizlilik siyasəti <div className="footer-undeline"><span></span></div></h2>

                    </div>
                    <div className="footer-body">
                            <ul>
                                <li><NavLink to="/shipping">Çatdırılma</NavLink></li>
                                <li><NavLink to="/condition">Geriqaytarma</NavLink></li>
                            </ul>
                    </div>
                </div>
            </div>
            </div>
       </footer>
    </>

  )
}

export default Footer