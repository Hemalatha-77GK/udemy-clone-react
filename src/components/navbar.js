function Navbar()
{
    return(
      <nav>
        <div className="navbar">
    <div className="navbar-s1">
      <h1 className="navbar-s1__title">udemy</h1>
    </div>

    <div className="navbar-s2"><i className="fa-solid fa-magnifying-glass"></i>
      <input placeholder="search for anything that you want business,art..."></input>
    </div>

    <div className="navbar-s3">
      <p>courses</p>
      <div className="mylearning">
        <p>My Learning</p>
        <div className="popup">
          <p>you did not purchase anything yet</p>
        </div>
      </div>
      <i className="fa-solid fa-cart-shopping"></i>
      <i className="fa-solid fa-bell"></i>
      <i className="fa-solid fa-user"></i>
    </div>

    <div className="navbar-s4">
      <i className="fa-solid fa-bars"></i>
    </div>
  </div>

  
  </nav>
    )
}
export default Navbar