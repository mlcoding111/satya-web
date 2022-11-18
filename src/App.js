import { HashRouter, Routes, Route } from "react-router-dom";

// Containers
import Header from "./containers/Header";
import SubNav from "./containers/SubNav";
import Footer from "./containers/Footer";

// Pages
import Story from "./pages/Story";
import Subscribe from "./pages/Subscribe";
import Testimonials from "./pages/Testimonials";
import Soins from "./pages/Soins";
import Overlay from "./components/Overlay";
import Layout from "./containers/Layout";
import Contact from "./pages/Contact";
import Accompany from "./pages/Accompany";

function App() {
  return (
    <HashRouter>

      <Header />
      <SubNav />
      <Overlay />
      
        <Layout>
          <Routes>
              <Route path={"/"} element={<Story />} />
              <Route path={"/abonnement"} element={<Subscribe />} />
              <Route path={"/soins"} element={<Soins />} />
              <Route path={"/temoignages"} element={<Testimonials />} />
              <Route path={"/contact"} element={<Contact />} />
              <Route path={"/acompagnement"} element={<Accompany />} />
          </Routes>
        </Layout>
        
      <Footer />

    </HashRouter>
  );
}

export default App;
