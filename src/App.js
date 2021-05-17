import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";
import Home from "./pages/home/index";
import Catalog from "./pages/catalog/index";

function App() {
  return (
    <HashRouter basename="/">
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/catalog/" render={(props) => <Catalog {...props} />} />
    </HashRouter>
  );
}

export default App;
