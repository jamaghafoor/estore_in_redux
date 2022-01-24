import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Home></Home>
        <Switch>
          <Route exact path="/" component={Products}></Route>
          <Route path="/product/:id" component={Product}></Route>
          <Route exact path="/cart" component={Cart}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
