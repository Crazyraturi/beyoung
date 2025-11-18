import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Aboutus from "./pages/Aboutus";
import Collaborations from "./pages/Collaborations";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus/>}/>
          <Route path="/collaboration" element={<Collaborations/>}/>
          <Route path="/product-details" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
};

export default App;
