const Header = ({ title }) => {
    return (
        <div>
            <h2>{title}</h2>
        </div>
    )
}

const Part = ({ part }) => {
    return (
        <div>
            <p>{part.name} {part.exercises} </p>
        </div>
    )
}

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map(part =>
                <Part key={part.id} part={part} />
            )}
        </div>
    )
}

const Total = ({ parts }) => {
    return (
        <div>
            <b>Number of exercises {parts.reduce((s, p) => s + p.exercises, 0)}  </b>
        </div>
    )
}

const Course = ({ courses }) => {
    return (
        <div>
            <h1>Web development Curriculum</h1>
            {courses.map(course =>
                <div key={course.id}>
                    <Header title={course.name} />
                    <Content parts={course.parts} />
                    <Total parts={course.parts} />
                </div>
            )}
        </div>
    )
}

export default Course