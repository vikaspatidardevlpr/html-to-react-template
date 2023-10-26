import { NavLink,Link } from "react-router-dom";
const Header = ()=>{
    return (
        <div className="hero_area">
        <header className="header_section">
          <div className="header_top">
            <div className="container-fluid">
              <div className="contact_nav">
                <Link to="#">
                  <i className="fa fa-phone" aria-hidden="true"> </i>
                  <span>
                     Call : +01 123455678990
                  </span>
                </Link>
                <Link to="#">
                  <i className="fa fa-envelope" aria-hidden="true"> </i>
                  <span>
                     Email : demo@gmail.com
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="header_bottom">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-lg custom_nav-container ">
                <a className="navbar-brand" href="index.html">
                  <span>
                    Inance
                  </span>
                </a>
    
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className=""> </span>
                </button>
    
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ">
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/about"> About</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/services">Services</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/contact-us">Contact Us</NavLink>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </header>
        </div>
    )
}

export default Header;