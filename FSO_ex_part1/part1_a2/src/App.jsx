
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.part} {props.excersises}</p>
  )
}

const Content = () => {
  const parts = [
    {
      part1: 'Half Stack application development',
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
    <div>
      <Part part={parts[0].part1} excersises={parts[0].exercises1} />
      <Part part={parts[1].part2} excersises={parts[1].exercises2} />
      <Part part={parts[2].part3} excersises={parts[2].exercises3} />
    </div>
  )

}

const Total = () => {
  const exs = [
    { exercises1: 10 },
    { exercises2: 7 },
    { exercises3: 14 }
  ]

  return (
    <p>Number of exercises {exs[0].exercises1 + exs[1].exercises2 + exs[2].exercises3} </p>
  )
}

const App = () => {

  return (
    <>
      <Header course="Half Stack application development" />
      <Content />
      <Total />

    </>
  )
}

export default App