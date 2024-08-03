import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const getRandomInt = max => Math.floor(Math.random() * max);

  const [selected, setSelected] = useState(0);
  const [scores, setScores] = useState(Array(anecdotes.length).fill(0));  

  const getSelectedAnecdote = () => 
    {
      return {text: anecdotes[selected], score: scores[selected] }
    }
  
    
  const getFavouriteAnecdote = () => {
    if (scores.length == 0) {
      return { text: '', score: -1 };
    }

    let maxIndex = 0;
    for (let i = 1; i < scores.length; i++) {
      if (scores[i] > scores[maxIndex]){
        maxIndex = i;
      }
    }

    return { text: anecdotes[maxIndex], score: scores[maxIndex] };
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={getSelectedAnecdote()} />
      <button onClick={() => { const copy = [...scores]; copy[selected] += 1; setScores(copy) }}>Vote for this anecdote</button>
      <button onClick={() => { const rnd = getRandomInt(anecdotes.length - 1); console.log(rnd); setSelected(rnd)}} >next anecdote</button>
      <h1>Fave anecdote</h1>
      <Anecdote anecdote={getFavouriteAnecdote()} />
    </div>
  )
}

const Anecdote = ({anecdote}) =>
   {
     return (
      <div>
        {anecdote.text}
        <p>Has {anecdote.score} votes</p>
        <br/>
      </div>
     )
   }

export default App