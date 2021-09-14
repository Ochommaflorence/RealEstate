import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Rental from "./components/Pages/Rental";
import Property from "./components/Pages/Property";
import Contact from "./components/Pages/Contact";


function App() {
  return (
   <>
     <Router>
     <Navbar/>
     <Switch>
       <Route exact path="/">
         <Home/>
       </Route>
       <Route path="/about">
         <About/>
       </Route>
    <Route path="/about">
         <Rental/>
       </Route>
       <Route path="/about">
        <Property/>
       </Route>
       <Route path="/about">
         <Contact/>
       </Route>
     </Switch>
     </Router>
   </>
  );
}

export default App;
