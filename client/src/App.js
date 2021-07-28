import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Slider from "./Components/Slider";
import Offer from "./Components/Offer";
import Product from "./Components/Product";
import About from "./Components/About";
import Testimonial from "./Components/Testimonial";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Info from "./Components/Info";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Offer />
      <Product />
      <About />
      <Blog />
      <Testimonial />
      <Contact />
      <Info />

      <Footer />
    </>
  );
}

export default App;
