import { NavLink,useLocation} from "react-router-dom";
import { useState, useEffect } from "react";
function MobileSideBar({ mobileMenu}) {
  // const loc=useLocation();
  // console.log(loc);
  // useEffect(()=>{
  //   (!mobileMenu)
  // },[loc.pathname])
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:1313/categories")
      .then((a) => a.json())
      .then((a) => {
        setCategories(a);
      });
  }, []);
  return (
    <aside style={{ transform: `translateX(${mobileMenu ? 0 : "-100%"})` }}>
      <ul>
        {categories.map((category) => (
          <li
            className="Mobile-li "
            key={category.id}
            onClick={(e) => {
              document.querySelector(".active").classList.remove("active");
              e.target.classList.add("active");
              // [...document.querySelectorAll(".mobile-dropdown")].map(
              //   (a) => (a.style.height = 0)
              // );
              let ul = e.target.nextElementSibling;
                if (ul.style.height === "0px" || !ul.style.height) {
                  ul.style.height = ul.scrollHeight + "px";
                } else {
                  ul.style.height = 0;
                }
            }}
          >
            <b>
              {category.name} <span>&darr;</span>
            </b>
            {category.subcategories && (
              <ul
                onClick={(e) => e.stopPropagation()}
                className="mobile-dropdown"
              >
                {category.subcategories.map((t) => (
                  <li key={t.id}>
                    <NavLink to={`/category/${category.id}/${t.id}`}>
                      {t.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default MobileSideBar;
