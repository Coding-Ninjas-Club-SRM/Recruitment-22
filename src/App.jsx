import About from "./Components/About/About";
import Domains from "./Components/Domains/Domains";
import Footer from "./Components/Footer/Footer";
import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <About />
      <Domains />
      <Footer />
    </div>
  );
}

export default App;
