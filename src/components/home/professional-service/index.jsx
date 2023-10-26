import { Link } from "react-router-dom";
const ProfissionalService = ()=>{
    return (
        <section className="professional_section layout_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="img-box">
                  <img src="./professional-img.png" alt="" />
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="detail-box">
                  <h2>
                    We Provide Professional <br />
                    Home Services.
                  </h2>
                  <p>
                    randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All randomised words which don't look even slightly
                  </p>
                  <Link to="#">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      
    )
}

export default ProfissionalService;