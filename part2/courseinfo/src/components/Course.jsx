const Header = ({course}) => <h1>{course}</h1>;

const Content = ({parts}) => {
  const rows = [];
  for (let i = 0; i < parts.length; i++) {
    rows.push(<Part key={parts[i].id} name={parts[i].name} exercises={parts[i].exercises} />);
  }

  return (
    <div>
      {rows}
    </div>
  )
}
const Part = ({name, exercises}) => <p>{name} {exercises}</p>;

const Total = ({parts}) => 
{
  const total = parts.reduce((a, b) => a + b.exercises, 0);
  return (
    <p><b>Total number of exercises {total}</b></p>
  )
}

const Course = ({course}) => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default Course