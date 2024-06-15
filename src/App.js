import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import LeftNavigationBar from "./Components/LeftNavigationBar/LeftNavigationBar";
import TopNavigationBar from "./Components/TopNavigationBar/TopNavigationBar";
import "./styles.css";
import Main from "./Components/Main"; // Import the new Main component

export default function App() {
    return (
        <Router>
            <div className="App">
                <TopNavigationBar />
                <LeftNavigationBar />
                <div className="main-content">
                    <Main /> {/* Render the Main component which handles the routing */}
                </div>            
            </div>
        </Router>
    );
}
