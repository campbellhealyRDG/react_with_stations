import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EnvironmentsTable = () => {
    const [environmentsData, setEnvironmentsData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/environments')
            .then(response => {
                setEnvironmentsData(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the Environments data!', error);
            });
    }, []);

    return (
        <div>
            <h2>TOC 1 Stations</h2>
            <table>
                <thead>
                    <tr>
                        <th>Station Assets</th>
                    </tr>
                </thead>
                <tbody>
                    {environmentsData.map((row) => (
                        <tr key={row.IdEnvironment}>
                            <td>{row.EnvironmentName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EnvironmentsTable;
