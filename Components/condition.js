import React, { useState } from "react";
function Thala (){
  const [count , setCount] = useState(0);
  const increment = () =>{
    setCount(count +1)
  }
  const decrement = () =>{
    setCount(count -1)
  }
  return(
    <div>
      <p>{count}</p>
       <button onClick={increment}>Increse</button>
       <button onClick={decrement}>Decrese</button>
    </div>
  )
}

export default Thala;