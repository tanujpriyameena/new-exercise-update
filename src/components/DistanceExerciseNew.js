// Once more, I've referred to W3 for useEffect. Source: https://www.w3schools.com/react/react_useeffect.asp
// More examples, as well as useState in case. Source: https://www.w3schools.com/react/react_usestate.asp
import React, {useState, useEffect} from "react";

function DistanceExercise({ name }) {
    const [distance, setDistance] = useState(""); // User input for distance
    const [timeElapsed, setTimeElapsed] = useState(0); // Timer in seconds
    const [isRunning, setIsRunning] = useState(false); // Timer state
  
    useEffect(() => {
        let userTimer;
        // We're looking for changes in isRunning here
        if (isRunning) {
            // The timer is fairly similar to duration 1000 ms = 1s
            userTimer = setInterval(() => setTimeElapsed((prev) => prev + 1), 1000);
        }
        // Here, we "clean up." Stopping the timer as well with changes in isRunning
        return () => clearInterval(userTimer); // Cleanup on unmount
    }, [isRunning]); // Pointing at this, as the effect depends on it
  
    const timeFormatting = (totalSeconds) => {
        // grabbing total minutes by dividing seconds by 60, and then, rounding
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60; // for the remainder
        // the following is purely formatting -
        // minutes/seconds less than 10, a leading zero appears. This will come into play because of my formatting 00:0)
        let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
        let formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

        // Formatted result, hence:
        return formattedMinutes + ":" + formattedSeconds;
    };
  
    return (
        <div>
            <h1>{name}</h1> {/*Grabbing from the original name, Cycling*/}
            <label>
            Distance (miles/km):
            <input
                type="number"
                value={distance} // Effectively, we're assigning value to this var
                onChange={(event) => setDistance(event.target.value)} // simple update
                min="0" // forces a value 0 or above
                step="0.1" //gives in the decimals you see in the box
            />
            </label>
            <p>Time: {timeFormatting(timeElapsed)}</p>
            {/*The start and pause button, which runs off a true/false condition for isRunning*/}
            <button onClick={() => setIsRunning(!isRunning)}>
                {isRunning ? "Pause" : "Start"}
            </button>
            {/*Timer halted, resetting to 0, AND clearing the input when you hit reset.*/}
            <button onClick={() => { setIsRunning(false); setTimeElapsed(0); setDistance(""); }}>
                Reset
            </button>
      </div>
    );
}
  
export default DistanceExercise;
  