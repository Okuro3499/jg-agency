import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import HomeScreen from "./pages/HomeScreen"
import Footer from "./components/Footer";
// import Details from "./pages/details";
// import Reviews from "./pages/reviews";
// import Shop from "./pages/shop";
// import UpcomingEvents from "./pages/upcomingEvents";


function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={HomeScreen} />

      {/* 
      <Route path="/details" component={Details} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/shop" component={Shop} />
      <Route path="/upcomingEvents" component={UpcomingEvents} /> */}

      {/* <Footer /> */}
      <Footer />
    </Router>
  );
}

export default App;
