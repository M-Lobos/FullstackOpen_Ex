
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <>
      <p>{props.part1} {props.exercises1}</p>
      <p>{props.part2} {props.exercises2}</p>
      <p>{props.part3} {props.exercises3}</p>
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  )
}

const App = () => {

  const parts = [
    {
      part1: 'Fundamentals of React',
      exercises1: 10
    },
    {
      part2: 'Using props to pass data',
      exercises2: 7
    },
    {
      part3: 'State of a component',
      exercises3: 14
    }
  ]

  return (
    <>
      <Header course="Half Stack application development" />
      <Content
        part1={parts[0].part1} exercises1={parts[0].exercises1}
        part2={parts[1].part2} exercises2={parts[1].exercises2}
        part3={parts[2].part3} exercises3={parts[2].exercises3}
      />

      <Total
        exercises1={parts[0].exercises1}
        exercises2={parts[1].exercises2}
        exercises3={parts[2].exercises3}
      />

    </>
  )
}

export default App