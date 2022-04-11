import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React from "react";
import { BrowserRouter as Router, Switch , Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  let toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils-Dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils-Light mode";
    }
  };
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  setTimeout(() => {
    setAlert(null);
  }, 3000);

  return (
    <>
      <Router>
        <Navbar title="TextUtils" home="Home" mode={mode} toggle={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch >
            <Route  exact path="/about">
              <About   mode={mode} />
            </Route>

            <Route  exact path="/">
              <TextForm
                heading="TextUtils - Word Counter, Character Counter, Remove extra spaces"
                mode={mode}
                showAlert={showAlert}
              />
            </Route>
          </Switch >
        </div>
      </Router>
    </>
  );
}

export default App;

