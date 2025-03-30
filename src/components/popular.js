import Img1 from "../assets/images/img1.jpg"
import Img2 from "../assets/images/img2.jpg"
import Img3 from "../assets/images/img3.jpg"
import Img4 from "../assets/images/img4.jpg"
import Img5 from "../assets/images/img5.jpg"
import Img6 from "../assets/images/img6.jpg"


function Popular()
{
 return(
   <div className="popular">
     <h1 className="popular__title">Most Popular</h1>
     <p className="popular__subtitle">Pick the Best Fit</p>
     <div className="popular__container">

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

       <div className="course-card">
         <img src={Img5} alt=""></img>
         <h2>The complete Web Development Course</h2>
         <p>Rop Percival</p>
         <p>4.8⭐⭐⭐⭐</p>
         <p>4999 <del>4599</del></p>
       </div>

       <div className="course-card">
         <img src={Img6} alt=""></img>
         <h2>Graphic Deign Master Class</h2>
         <p>colt steele</p>
         <p>4.7⭐⭐⭐⭐</p>
         <p>3499 <del>3299</del></p>
       </div>

       <div className="course-card">
         <img src={Img2} alt=""></img>
         <h2>Learn Java Programming</h2>
         <p>YouAccel Training</p>
         <p>4.5⭐⭐⭐</p>
         <p>3999 <del>3499</del></p>
       </div>

       <div className="course-card">
         <img src={Img3} alt=""></img>
         <h2>CISCO CCNA</h2>
         <p>YouAccel Training</p>
         <p>4.5⭐⭐⭐</p>
         <p>3999 <del>3499</del></p>
       </div>

       <div className="course-card">
         <img src={Img2} alt=""></img>
         <h2>The complete Full-Stack Web Development Course</h2>
         <p>Dr.Angela Yu</p>
         <p>4.7⭐⭐⭐⭐</p>
         <p>3599 <del>3399</del></p>
       </div>

       <div className="course-card">
         <img src={Img1} alt=""></img>
         <h2>Artificial Intelligence</h2>
         <p>colt steele</p>
         <p>4.7⭐⭐⭐⭐</p>
         <p>3499 <del>3299</del></p>
       </div>

       <div className="course-card">
         <img src={Img2} alt=""></img>
         <h2>Ultimate AWS Certified</h2>
         <p>YouAccel Training</p>
         <p>4.5⭐⭐⭐</p>
         <p>3999 <del>3499</del></p>
       </div>
</div>
     </div>
 )
}
export default Popular