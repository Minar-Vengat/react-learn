import { useRef } from 'react';

function FocusExample() {
  const inputEl = useRef(null); 

  const focusInput = () => {
    inputEl.current.focus(); 
  };

  return (
    <>
      <input ref={inputEl} type="text" placeholder="Type here" />
      <button onClick={focusInput}>Focus click</button>
    </>
  );
}
export default FocusExample
