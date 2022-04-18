import React from "react";
import ReactDOM from "react-dom";

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

ReactDOM.render(
    // Strict mode
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
