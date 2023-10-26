import { Link } from "react-router-dom";
import InfoSection from "./info-section";
const Footer = ()=>{
   return (
    <>
      <InfoSection />
        <footer class="footer_section">
          <div class="container">
          <p>
            &copy; <span id="displayDateYear"></span> All Rights Reserved By
            <Link to="https://html.design/">Free Html Templates</Link>
          </p>
          </div>
        </footer>
    </>
   )
}
export default Footer;