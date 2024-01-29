import "./styles.css";
import Rater from "./Rater";
import Thanks from "./Thanks";
import { useState } from "react";
function App() {
  const [submitted, setSubmitted] = useState(false);
  const [number, setNumber] = useState(null);
  return (
    <div className="App">
      {!submitted ? (
        <Rater
          isActive={submitted}
          setActive={setSubmitted}
          setNumber={setNumber}
        />
      ) : (
        <Thanks isActive={submitted} number={number} />
      )}
    </div>
  );
}

export default App;
