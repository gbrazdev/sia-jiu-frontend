import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AttendanceList = () => {
  const [attendances, setAttendances] = useState([]);

  useEffect(() => {
    axios.get('/api/attendance').then(response => {
      setAttendances(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Attendance</h1>
      <ul>
        {attendances.map(attendance => (
          <li key={attendance.id}>
            {attendance.user.name} - {attendance.class.name} - {attendance.confirmed ? 'Confirmed' : 'Pending'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AttendanceList;
