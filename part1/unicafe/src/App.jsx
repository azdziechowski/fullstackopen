import { useState } from 'react'

const Button = ({text, onClick}) =>
  {
    return (
        <button onClick={onClick}>{text}</button>
    )
  }

const Statistics = ({good, neutral, bad}) => {
  if (good + neutral + bad === 0) {
    return <div>No feedback provided yet</div>
  }

  return (
    <table>
      <tbody>
        <StatisticLine text='good' acc={good} />
        <StatisticLine text='neutral' acc={neutral} />
        <StatisticLine text='bad' acc={bad} />
        <StatisticLine text='all' acc={good + neutral + bad} />
        <StatisticLine text='avg' acc={(good - bad)/(good + neutral + bad)} />
        <StatisticLine text='pos' acc={good/(good + neutral + bad)} />
      </tbody>
    </table>
  )
}

  
const StatisticLine = ({text, acc}) => {
  return (  
    <tr>
      <td>{text}</td> 
      <td>{acc}</td>
    </tr>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (acc, stateFunc) => () => stateFunc(acc + 1);

  return (
    <div>
    <h1>Leave your feedback</h1>
    <Button text='good' onClick={handleClick(good, setGood)}  />
    <Button text='neutral' onClick={handleClick(neutral, setNeutral)}  /> 
    <Button text='bad' onClick={handleClick(bad, setBad)}  />
    
    <h1>stats</h1>
    <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App