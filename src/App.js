import { BrowserRouter, Routes, Route } from "react-router-dom";

// Containers
import Header from "./containers/Header";
import SubNav from "./containers/SubNav";
import Footer from "./containers/Footer";

// Pages
import Story from "./pages/Story";
import Subscribe from "./pages/Subscribe";
import Testimonials from "./pages/Testimonials";
import Soins from "./pages/Soins";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <SubNav />
        <Routes>
          <Route path="/" element={<Story />} />
          <Route path="/abonnement" element={<Subscribe />} />
          <Route path="/soins" element={<Soins />} />
          <Route path="/temoignages" element={<Testimonials />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
