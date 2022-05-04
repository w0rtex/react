import React from "react";

// ReactDOM
import ReactDOM from "react-dom/client";


// Styles
import "./scss/index.scss";

// Relative API
import "core-js/features/array/flat-map";
import "core-js/features/map";
import "core-js/features/promise";
import "core-js/features/set";
import "raf/polyfill";
import "whatwg-fetch";

// App
import App from "./App/App";

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);