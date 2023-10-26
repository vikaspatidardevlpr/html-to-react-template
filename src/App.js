import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Services from "./components/services";
import Contact from "./components/contact";
import Header from "./components/header";
import Footer from "./components/footer";
import Layout from "./components/shared/layout";
function App() {
  return (
  <Router>
     <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact-us" element={<Contact />} />
    </Routes>
    </Layout>
  </Router>
     
  );
}

export default App;
