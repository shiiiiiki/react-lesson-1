import React from 'react';
import './App.css';
import Collapse from "./components/Collapse";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Collapse Example</h1>
                <Collapse text="Collapse me" opened={false}/>
            </header>
        </div>
    );
}

export default App;