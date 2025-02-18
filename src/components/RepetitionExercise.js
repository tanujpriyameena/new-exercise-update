// This was overall, the easiest of the exercise files.
import React, { useState } from "react";

// We do bring in the name (from App.js), and then use it as title or h1.
function RepetitionExercise({ name }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{name}</h1>
      <p>Reps: {count}</p> {/* We're putting count on display here, it reflects dynamically*/}
      <button onClick={() => setCount(count + 1)}>Increase</button> {/*Button logic - increases on click of this button*/}
      <button onClick={() => setCount(0)}>Reset</button> {/* This simulates a "reset," by simply setting us back at 0*/}
    </div>
  );
}

export default RepetitionExercise;