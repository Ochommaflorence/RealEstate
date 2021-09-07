import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Rentals from "./Pages/Rentals";
import Property from "./Pages/Property";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route>
            <Home />
          </Route>
          <Route>
            <About />
          </Route>
          <Route>
            <Rentals />
          </Route>
          <Route>
            <Property />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
