import React, { useState } from 'react';
import './css/App.css';
import TocsTable from './Components/TocsTable';
import EnvironmentsTable from './Components/EnvironmentsTable';

function App() {
    const [visibleTable, setVisibleTable] = useState('All');

    return (
        <div className="App">
            <header className="App-header">
                <h1>Station Assets</h1>
                <div>
                    <button onClick={() => setVisibleTable('All')}>All</button>
                    <button onClick={() => setVisibleTable('TOC1')}>TOC 1</button>
                </div>
            </header>
            <div>
                {visibleTable === 'All' && <TocsTable />}
                {visibleTable === 'TOC1' && <EnvironmentsTable />}
            </div>
        </div>
    );
}

export default App;
