import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useGlobalFetch } from "./useGlobalFetch";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Services from "./Components/Services";

function App() {
  useGlobalFetch();
  return (
    <div className="container">
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/services">
            <Services />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
