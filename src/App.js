import React from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import{ BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from './Checkout';
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/login">
            <h1>Login Page</h1>
          </Route>
          {/*This is the default route */}
          <Route path="/">
            <Header/>
            <Home/>
            
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
