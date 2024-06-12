import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./container/AboutUs/AboutUs";
import Chef from "./container/Chef/Chef";
import Gallery from "./container/Gallery/Gallery";
import Header from "./container/Header/Header";
import Intro from "./container/Intro/Intro";
import Laurels from "./container/Laurels/Laurels";
import SpecialMenu from "./container/Menu/SpecialMenu";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
    </>
  );
}

export default App;
