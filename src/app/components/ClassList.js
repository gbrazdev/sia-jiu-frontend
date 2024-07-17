import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClassList = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios.get('/api/classes').then(response => {
      setClasses(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Classes</h1>
      <ul>
        {classes.map(clazz => (
          <li key={clazz.id}>{clazz.name} - {clazz.instructor}</li>
        ))}
      </ul>
    </div>
  );
};

export default ClassList;
