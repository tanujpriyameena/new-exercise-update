// A bulk of my info comes from W3Schools, which I frequently refer to. The presentation wasn't as helpful.
// Link 1: (https://www.w3schools.com/react/react_conditional_rendering.asp)
// Link 2: (https://www.w3schools.com/java/java_conditions_shorthand.asp)
// This is also heavily JS influenced (for example, my arrays), the nesting of statements (like the switch in if-else)
// I will mention some CSS sources on App.css.

import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import DistanceExerciseNew from "./components/DistanceExerciseNew";
import "./App.css";

function App() {
  // To check exercise, we start with null in state
  const [selectedExercise, setSelectedExercise] = useState(null);

  // The main exercises that you see on the display, categorized by repetition or duration
  const exercises = [
    { name: "Push ups", type: "repetition" },
    { name: "Sit ups", type: "repetition" },
    { name: "Plank", type: "duration" },
    { name: "Running", type: "duration" },
    { name: "Cycling", type: "distance" }, // The new value for cycling
  ];

  let exerciseScreen;
  // We're using a switch statement, nested IN a if statement (without else)
  // Logic here is that we're checking the type (via cases), which then selects it accordingly
  if (selectedExercise) {
    switch (selectedExercise.type) {
      case "repetition":
        // Initiates RepetitionExercise, if it fits our type, pointing at type repetition
        exerciseScreen = <RepetitionExercise name={selectedExercise.name} />;
        break;
      case "duration":
        // Initiates DurationExercise, if it fits our type, pointing at type duration
        exerciseScreen = <DurationExercise name={selectedExercise.name} />;
        break;
      case "distance":
        // Initiatlizes DistanceExercise, if it fits our type, pointing at distance
        exerciseScreen = <DistanceExerciseNew name={selectedExercise.name} />;
        break;
      default:
        exerciseScreen = null;
    }
  }

  return (
    <div className="app-functionality">
      {/*Keeps us in the screen, if no exercise is clicked*/}
      {!selectedExercise ? (
        <div>
          <h1>Select an Exercise</h1>
          {/* Button logic for all of these. And, we're reusing the name attribute (which we showed above)*/}
          {exercises.map((exercise) => (
            <button key={exercise.name} onClick={() => setSelectedExercise(exercise)} className="exercise-button">
              {exercise.name}
            </button>
          ))}
        </div>
      ) : ( // I had a tough time keeping the return statement indinvidually. I hence managed to make an if-else construct using the ternary :
        <div>
          {exerciseScreen}
          {/*This button essentially handles the return functionality.*/}
          <div className="return-container">
            <button onClick={() => setSelectedExercise(null)} className="return-button">Return</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
