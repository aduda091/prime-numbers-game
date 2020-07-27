import React from "react";
import ReactDOM from "react-dom";

import AppContainer from "./components/appContainer";

import "./app.scss";

function App() {
    return <AppContainer />;
}

ReactDOM.render(<App />, document.getElementById("app"));
