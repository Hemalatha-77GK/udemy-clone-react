import Sale from "../assets/images/saleimg.jpg"
 function Saleimage()
 {
  return(
    <div className="sale-image">
    <img src={Sale} alt="saleimg"></img>
    <div className="sale-image__offer">
      <h2>Udemy Flash Sale! 24 hours to save</h2>
      <p>Get the top course for just 3499.just one day to save but a lifetime to learn</p>
    </div>
  </div>
  )
 }
 export default Saleimage