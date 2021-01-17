import React from "react";
import ReactDOM from "react-dom";
import DocumentTitle from "react-document-title";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./components/App.js";
import ServiceWorker from "./components/ServiceWorker";

import "./assets/styles/css/main.css";

// Entrada a aplicación
// Uso Router para navegar y mostrar/ocultar el componente correcto de acuerdo a la URL.

ReactDOM.render(
  <DocumentTitle title="Bienvenido a Mercado Libre">
    <Router>
      <Route path="/" component={App} />
    </Router>
  </DocumentTitle>,
  document.getElementById("app-root")
);
ServiceWorker();
