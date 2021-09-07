import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
 import Home from './Pages/Home';
function App() {
  return (
    <div className="App">
     <Router>
       <Navbar/>
       <Switch>
        <Route>
          <Home/>
        </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
