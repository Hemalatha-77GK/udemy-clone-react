import Img1 from "../assets/images/img1.jpg"
import Img2 from "../assets/images/img2.jpg"
import Img3 from "../assets/images/img3.jpg"
import Img4 from "../assets/images/img4.jpg"

function Coursecard()
 {
  return(
   <div className="recommended">
    <h1 className="recommended__title">Recommended For You</h1>
    <p>Pick the Best Fit</p>
    <div className="recommended__container">
      <div className="course-card">
        <img src={Img1} alt=""></img>
        <h2>The Web developer boot camp</h2>
        <p>colt steele</p>
        <p>4.7⭐⭐⭐⭐</p>
        <p>3499 <del>3299</del></p>
      </div>

      <div className="course-card">
        <img src={Img2} alt=""></img>
        <h2>The Web development master class</h2>
        <p>YouAccel Training</p>
        <p>4.5⭐⭐⭐</p>
        <p>3999 <del>3499</del></p>
      </div>

      <div className="course-card">
        <img src={Img3} alt=""></img>
        <h2>The complete Web Development Course</h2>
        <p>Rop Percival</p>
        <p>4.8⭐⭐⭐⭐</p>
        <p>4999 <del>4599</del></p>
      </div>

      <div className="course-card">
        <img src={Img4} alt=""></img>
        <h2>The complete Full-Stack Web Development Course</h2>
        <p>Dr.Angela Yu</p>
        <p>4.7⭐⭐⭐⭐</p>
        <p>3599 <del>3399</del></p>
      </div>
    </div>
    </div>
  )
 }
 export default Coursecard