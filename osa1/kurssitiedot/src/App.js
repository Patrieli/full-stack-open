const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      {props.course.parts.map(part => <p key={part.name}>{part.name} {part.exercises} </p>)}
    </div>
  )
}

const Total = (props) => {
  const total = props.course.parts.reduce((total, currentItem) => total = total + currentItem.exercises, 0)
  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Fundamentals of React',
    parts: [
      {
        'name': 'Fundamentals of React',
        'exercises': 10
      },
      {
        'name': 'Using props to pass data',
        'exercises': 7
      },
      {
        'name': 'State of a component',
        'exercises': 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App