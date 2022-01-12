import QuizPage from "./templates/components/quiz/Quiz_page";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OnScreen from "./templates/components/quiz/OnScreen";
import onVirtual from "./templates/components/quiz/onVirtual";
import Home from "./templates/components/home/home";
import Chronology from "./templates/components/chronology/chronology";

function componentDidMount() {
  // Load Python.
  window
    .loadPyodide({ indexURL: "https://cdn.jsdelivr.net/pyodide/v0.17.0/full/" })
    .then((pyodide) => {
      // Run Python.
      pyodide
        .runPythonAsync(
          `
import sys
sys.version
`
        )
        .then((version) => {
          this.setState({ version, pyodide });
        });
    })
    .catch((error) => {
      console.log(error);
    });
}
function App() {
  componentDidMount();
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/chronology" component={Chronology} />
        <Route exact path="/quiz" component={QuizPage} />
        <Route exact path="/onScreen" component={OnScreen} />
        <Route exact path="/onVirtual" component={onVirtual} />
      </Switch>
    </Router>
  );
}

export default App;
