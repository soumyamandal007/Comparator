import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Maps from "./components/maps";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/maps" element = {<Maps />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
