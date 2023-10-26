import { NavLink,Link } from "react-router-dom";
const Layout = ({children}) => {
  return (
    <>
      <nav className="hero_area">
        <header className="header_section">
          <div className="header_top">
            <div className="container-fluid">
              <div className="contact_nav">
                <Link to="#">
                  <i className="fa fa-phone" aria-hidden="true">
                    {" "}
                  </i>
                  <span>Call : +01 123455678990</span>
                </Link>
                <Link to="#">
                  <i className="fa fa-envelope" aria-hidden="true">
                    {" "}
                  </i>
                  <span>Email : demo@gmail.com</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="header_bottom">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-lg custom_nav-container ">
                <a className="navbar-brand" href="index.html">
                  <span>Inance</span>
                </a>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className=""> </span>
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ">
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/">
                        Home <span className="sr-only">(current)</span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/about">
                        {" "}
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/services">
                        Services
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/contact-us">
                        Contact Us
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </header>
      </nav>
    <div className="section">
    {children}
    </div>

    <section className="info_section ">
        <div className="container">
          <h4>
            Get In Touch
          </h4>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="info_items">
                <div className="row">
                  <div className="col-md-4">
                    <Link to="#">
                      <div className="item ">
                        <div className="img-box ">
                          <i className="fa fa-map-marker" aria-hidden="true"></i>
                        </div>
                        <p>
                          Lorem Ipsum is simply dummy text
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div className="col-md-4">
                    <Link to="#">
                      <div className="item ">
                        <div className="img-box ">
                          <i className="fa fa-phone" aria-hidden="true"></i>
                        </div>
                        <p>
                          +02 1234567890
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div className="col-md-4">
                    <Link to="#">
                      <div className="item ">
                        <div className="img-box">
                          <i className="fa fa-envelope" aria-hidden="true"></i>
                        </div>
                        <p>
                          demo@gmail.com
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="social-box">
          <h4>
            Follow Us
          </h4>
          <div className="box">
            <Link to="#">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </Link>
            <Link to="#">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </Link>
            <Link to="#">
              <i className="fa fa-youtube" aria-hidden="true"></i>
            </Link>
            <Link to="#">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </section>
      <footer class="footer_section">
          <div class="container">
          <p>
            &copy; <span id="displayDateYear"></span> All Rights Reserved By
            <Link to="https://html.design/">Free Html Templates</Link>
          </p>
          </div>
        </footer>
 

    </>
  );
};
export default Layout;
