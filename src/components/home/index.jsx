import Hero from "./hero";
import HomeServices from "./home-services";
import About from "../about";
import ProfissionalService from "./professional-service";
import Services from "../services";
import Clients from "./clients";
import Contact from "../contact";

const Home = ()=>{
    return (
        <>
        <div class="hero_area">
        <Hero />
        </div>
        <HomeServices />
        <About />
        <ProfissionalService />
        <Services />
        <Clients />
        <Contact />
        </>
    )
}
export default Home;