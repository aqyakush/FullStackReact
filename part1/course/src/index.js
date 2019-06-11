import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}

const Part = (props) => {
    return (
        <div>
            <p>
                {props.name} {props.exercises}
            </p>
        </div>
    )
}

const Content = (props) => {
    const b = props.parts
    const Items = []
    b.forEach(value => {
        Items.push(<Part name={value.name} exercises={value.exercises} />)
    })

    return (
        <div>
            {Items} 
        </div>
    )
}

const Total = (props) => {
    var t = 0
    const numbers = props.number
    numbers.forEach(value => {
        t += value.exercises
    })
    return (
        <div>
            <p> Number of exercises {t}</p>
        </div>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
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
      }

    return (
        <div>
            <Header name={course.name} />
            <Content parts = {course.parts} />
            <Total number={course.parts} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
