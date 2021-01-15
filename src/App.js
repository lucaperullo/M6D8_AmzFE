import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/cart">
            <Header />
          </Route>
          <Route path="/login">
            <AddProduct />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
