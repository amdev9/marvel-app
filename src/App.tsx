import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Heroes from "./components/Heroes";
import Hero from "./containers/Hero";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path={["/", "/heroes"]} component={Heroes} />
          <Route path="/heroes/:id" component={Hero} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
