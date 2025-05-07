import React, { useState } from "react";

function Football() {
  const [answer, setAnswer] = useState("");

  const shoot = (a) => {
    const userInput = prompt(a); 
    setAnswer(userInput);        
  };

  return (
    <div>
      <button onClick={() => shoot("goal!")}>Take the shot!</button>
      <h1 id="ans">{answer}</h1>
    </div>
  );
}
export default Football;