import { Link } from "react-router-dom";
const Hero = ()=>{
    return (
        <section className="slider_section ">
          <div className="container ">
            <div className="row">
              <div className="col-md-6 ">
                <div className="detail-box">
                  <h1>
                    Repair and <br />
                    Maintenance <br />
                    Services
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui harum voluptatem adipisci. Quos molestiae saepe dicta nobis pariatur, tempora iusto, ad possimus soluta hic praesentium mollitia consequatur beatae, aspernatur culpa.
                  </p>
                  <Link to="#">
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="col-md-6">
                <div className="img-box">
                  <img src="./slider-img.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}

export default Hero;