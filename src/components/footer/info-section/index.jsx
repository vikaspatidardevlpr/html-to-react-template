import { Link } from "react-router-dom";
const InfoSection = ()=>{
    return (
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
    
    
    )

}
export default InfoSection;