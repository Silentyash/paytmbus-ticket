import React, { useState, useEffect } from "react";

const Timer = ( {initialSeconds} ) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      } else {
        clearInterval(interval); // Stop the timer when it reaches 0
      }
    }, 1000); // Update every 1000ms (1 second)

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [seconds]); // Re-run the effect whenever the 'seconds' state changes

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const remainingSeconds = timeInSeconds % 60;

    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = remainingSeconds.toString().padStart(2, "0");

    return `${formattedHours} : ${formattedMinutes} : ${formattedSeconds}`;
  };

  return (
    <div className="text-center">
      <p className="text-3xl font-bold tracking-wider ">
        {formatTime(seconds)}
      </p>
      <div className="flex flex-row items-center justify-center gap-5 py-2 font-bold">
        <p className="text-[12px] "> HOURS </p>
        <p className="text-[12px] "> MINUTES </p>
        <p className="text-[12px] "> SECONDS</p>
      </div>
    </div>
  );
};

export default Timer;
