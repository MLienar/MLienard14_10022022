import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Employees from './pages/Employees'
import { Provider } from 'react-redux'
import { store } from './store'

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/employees" element={<Employees />} />
                </Routes>
            </Router>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
)
