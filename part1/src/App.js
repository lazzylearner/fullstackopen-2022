// things to do Header, Content, and Total. 
// Header takes care of rendering the name of the course, Content renders the parts and their number of exercises and Total renders the total number of exercises.

const Header = (props) => {
  return(<> <h1>{props.course}</h1></>);
}

const Content = (props) => {
  return (
    <>
      <Part part={props.part[0]}  />
      <Part part={props.part[1]} />
      <Part part={props.part[2]} />
    </>
  )
}

const Part = (props) => {
  return (
    <><p>{props.part.name} {props.part.exercises}</p></>
  )
}
const Total = (props) => {
  return (
    <>
    <p>Number of exercises {props.total}</p>
  </>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content part={parts} />
      <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises}/>
    </div>
  )
}

export default App