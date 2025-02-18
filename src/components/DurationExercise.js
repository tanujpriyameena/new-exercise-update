// W3 Schools is another major influence for this page. A few links below.
// https://www.w3schools.com/jsref/met_win_clearinterval.asp
// Wanted to include the onclick page as well, as it helped for reference: https://www.w3schools.com/jsref/event_onclick.asp

import React, { useState, useEffect } from "react";

function DurationExercise({ name }) {
  // For elapsed time, seconds, 
  const [timeElapsed, SetElapseTime] = useState(0);
  // This one is to check the status of the timer
  const [isRunning, setIsRunning] = useState(false);

  // Runs this
  useEffect(() => {
    let timer;
    if (isRunning) {
      // So we are incrementing the time by 1.
      // The logic here, is that the 1000 determines speed. 1000 = 1 second, and anything less goes into milliseconds. 
      timer = setInterval(() => SetElapseTime((previousTime) => previousTime + 1), 1000);
    }
    // Here, we "clean up." Stopping the timer as well with changes in isRunning
    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = (totalSeconds) => {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    // The handler for the zeros at front. I wasn't able to get the ternary operators working, hence I put this in individual if statements.
    let newMinutes = minutes;
    let newSeconds = seconds;

    if (minutes < 10) {
      newMinutes = "0" + minutes;
    }

    if (seconds < 10) {
      newSeconds = "0" + seconds;
    }

    return newMinutes + ":" + newSeconds; //result
  };

  return (
    <div>
      <h1>{name}</h1> {/* Logic: We're grabbing the name, from App.js */}
      <p>Duration: {formatTime(timeElapsed)}</p>

      {/* This is ultimately to start or stop the timer*/}
      {/* This could be replaced by an if else, that manually puts in the strings */}
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Pause" : "Start"}
      </button>

      {/* The reset functionality. It's simple, as we simply bring the number back to 0*/}
      <button onClick={() => { setIsRunning(false); SetElapseTime(0); }}>
        Reset 
      </button>
    </div>
  );
}

export default DurationExercise;
