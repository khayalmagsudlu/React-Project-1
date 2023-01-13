import { useEffect, useState ,useRef} from "react";

function ScrollTop() {
    const [toTop,setToTop]=useState(false);
    useEffect(() => {
         window.addEventListener("scroll",()=>{
            if (window.scrollY>100) {
                setToTop(true)
            }else{
                setToTop(false)
            }
         })
    }, [])
    const scrollUp=()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
  return (
    <>
       {toTop && (
        <button style={{
            position:"fixed",
            bottom:"50px",
            right:"50px",
            height:"50px",
            width:"50px",
            fontSize:"20px",
            transition:"0.3s",
            zIndex:"1111",
            borderRadius:"50%"

        }} onClick={scrollUp} className="btn scroll-btn"><i className="fa-solid fa-turn-up"></i></button>
    )}
    </>
 
    )
}

export default ScrollTop