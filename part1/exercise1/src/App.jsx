import { useState } from "react";

const Display = ({counter}) => <div>{counter}</div>
const Button = ({text, onClick}) => <button onClick={onClick}> {text} </button>

const App = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => setCounter(counter + 1);
  
  const decrementCounter = () => counter > 0 
    ? setCounter(counter - 1) 
    : setCounter(counter);

  const resetCounter = () => setCounter(0);

  return (
    <div>
      <Display counter={counter} />
      <Button text='increment' onClick={incrementCounter} />
      <Button text='decrement' onClick={decrementCounter} />
      <Button text='reset' onClick={resetCounter} />
    </div>
  )
}

export default App