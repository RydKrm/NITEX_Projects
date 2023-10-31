import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import TeamMember from "./components/Team";
import "./SCSS/App.scss";
import Footer from "./components/Footer";
import Service from "./components/Service";
import Culture from "./components/Culture";
import Financial from "./components/Financial";

function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <Service />
      <Culture />
      <Financial />
      <AboutUs />
      <TeamMember />
      <Footer />
    </>
  );
}

export default App;
