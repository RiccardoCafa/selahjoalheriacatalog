import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/index";
import Catalog from "./pages/catalog/index";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/catalog/" render={(props) => <Catalog {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
