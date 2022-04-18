// Default
import React, { lazy, useState, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
const Home = lazy(() => import("./pages/home"));

const App: React.FC = () => {
    return (
        <Router>
            {/* Use a static components f.e <Nav /> */}
            {/* fallback={} on suspense for preloader */}
            <Suspense>
                <Routes>
                    {/* Routes */}
                    <Route path="/" element={<Home />} />
                </Routes>
            </Suspense>
        </Router>
    );
};

export default App;
