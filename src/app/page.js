import Home from "./Pages/home";
import Property from "./Pages/properties";
import Attractions from "./Pages/attractions";
import AOSWrapper from "./components/AOSWrapper";
import About from "./Pages/about";
import Contact from "./Pages/contact";
import Reviews from "./Pages/reviews";
import Footer from "./components/footer";

export default function Page() {
  return (
    <div>
      <AOSWrapper>
        <Home />
        <Property />
        <Attractions />
        <About />
        <Reviews />
        <Contact />
        <Footer />
      </AOSWrapper>
    </div>
  );
}
