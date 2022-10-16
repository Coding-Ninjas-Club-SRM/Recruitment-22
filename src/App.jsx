import About from "./Components/About/About";
import Domains from "./Components/Domains/Domains";
import Footer from "./Components/Footer/Footer";
import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/Navbar/Navbar";
import Chat from "./Components/chatbot/chatbot";

function App() {
  return (
    <div className="text-white">
      <Navbar />
      <Landing />
      <About />
      <Domains />
      <Chat/>
      <Footer />
    </div>
  );
}

export default App;
