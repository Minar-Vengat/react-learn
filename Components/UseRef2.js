import React, { useEffect, useRef, useState } from 'react'

function UseRef2() {
  const [count,setCount] = useState(0);
  const renderCount = useRef(0);

  useEffect(()=>{
    renderCount.current += 1;
  });
    return (
    <div>
        <p>Count:{count}</p>
        <p>Component Render times :{renderCount.current}</p>
        <button onClick={() => setCount(count + 1) }>increment</button>
    </div>
  )
}

export default UseRef2