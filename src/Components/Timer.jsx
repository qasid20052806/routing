import React, { useState, useEffect } from 'react';
const Timer = () => {
  const [second, setSecond] = useState(0);

  useEffect(() => {
     setInterval(() => {
      setSecond((prevSecond) => prevSecond + 1);
    }, 1000);

    return () => clearInterval(setInterval); 
  }, []);

  return <h1>{second}</h1>;
};

export default Timer;
