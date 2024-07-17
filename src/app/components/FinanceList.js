import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FinanceList = () => {
  const [finances, setFinances] = useState([]);

  useEffect(() => {
    axios.get('/api/finance').then(response => {
      setFinances(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Finance</h1>
      <ul>
        {finances.map(finance => (
          <li key={finance.id}>
            {finance.description} - ${finance.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FinanceList;
