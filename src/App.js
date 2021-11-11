import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import Footer from "./components/Footer";
import About from "./pages/About";
import Thanks from "./pages/Thanks";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={HomeScreen} />
      <Route path="/about" component={About} />
      <Route path="/thanks" component={Thanks} />

      <Footer />
    </Router>
  );
}

export default App;
