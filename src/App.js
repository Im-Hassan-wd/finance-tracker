import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages and compnents
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Navbar from "./components/Navbar";

function App() {
  const { authIsReady } = useAuthContext();
  return (
    <div className="App">
      {authIsReady && (
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
