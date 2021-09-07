import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Rentals from "./Pages/Rentals";
import Property from "./Pages/Property";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact to="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/rentals">
            <Rentals />
          </Route>
          <Route path="/property">
            <Property />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
