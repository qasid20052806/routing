import React, { useState, useEffect } from 'react';

const Time = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();

  return (
    <div>
      <h1>{hour}</h1>
      <h1>{minute}</h1>
      <h1>{second}</h1>
    </div>
  );
};

export default Time;
