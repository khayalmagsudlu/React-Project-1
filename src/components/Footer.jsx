import {NavLink} from "react-router-dom";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
       <footer>
            <div className="container">
            <div className="about">
                <div className="abouts">
                    <div className="about-location">
                        <div className="location-head">
                            <p className="font_1">Mağaza Adresi</p>
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
                            <p className="font_1">Mağaza</p>
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
                            <p className="font_1">Məlumat</p>
                        </div>
                        <div className="support-body">
                            <ul>
                                <li><NavLink to="/contact">Əlaqə</NavLink></li>
                                <li><NavLink to="/about">Haqqımızda</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="about-policy">
                        <div className="policy-head">
                            <p className="font_1">Gizlilik siyasəti</p>

                        </div>
                        <div className="policy-body">
                            <ul>
                                <li><NavLink to="/shipping">Çatdırılma şərtləri</NavLink></li>
                                <li><NavLink to="/condition">Geriqaytarma şərtləri</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>
       </footer>
    </>

  )
}

export default Footer