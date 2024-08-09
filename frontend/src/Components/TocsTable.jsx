import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TocsTable = () => {
    const [tocsData, setTocsData] = useState([]);

    useEffect(() => {
        // Fetch data from the backend
        axios.get('http://localhost:5000/api/tocs')
            .then(response => {
                setTocsData(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the TOCS data!', error);
            });
    }, []);

    return (
        <div>
            <h2>TOCS Table Data</h2>
            <table>
                <thead>
                    <tr>
                        {/* Replace with your actual table column names */}
                        <th>TOC </th>
                        <th>Staging OID </th>
                        <th>ProductionOID </th>
                    </tr>
                </thead>
                <tbody>
                    {tocsData.map((row) => (
                        <tr key={row.IdTOC}>
                            <td>{row.TOCName}</td>
                            <td>{row.TOCOIDStaging}</td>
                            <td>{row.TOCOIDProduction}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TocsTable;
