const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const parts = [
    { partName: part1, exercisesCount: exercises1 },
    { partName: part2, exercisesCount: exercises2 },
    { partName: part3, exercisesCount: exercises3 }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}


const Header = ({course}) => <h1>{course}</h1>;

const Content = ({parts}) => {
  const rows = [];
  for (let i = 0; i < parts.length; i++) {
    rows.push(<Part key={i} partName={parts[i].partName} exercisesCount={parts[i].exercisesCount} />);
  }

  return (
    <div>
      {rows}
    </div>
  )
}
const Part = ({partName, exercisesCount}) => <p>{partName} {exercisesCount}</p>;

const Total = ({parts}) => 
{
  const total = parts.map(x => x.exercisesCount).reduce((a, b) => a + b);
  return (
    <p>Number of exercises {total}</p>
  )
}



export default App