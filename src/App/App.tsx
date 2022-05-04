// Default
import React, { lazy, useState, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Pages
const Home = lazy(() => import('./Pages/Home'))

const App: any = () => {
    return <Home />
}

export default App
