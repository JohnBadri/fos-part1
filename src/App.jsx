const Header = (props) => {
  return <h1>{props.courseName}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

const Content = () => {
  const parts = [
    { name: 'Fundamentals of React', exercises: 10 },
    { name: 'Using props to pass data', exercises: 7 },
    { name: 'State of a component', exercises: 14 },
  ];

  return (
    <div>
      <Part part={parts[0].name} exercises={parts[0].exercises} />
      <Part part={parts[1].name} exercises={parts[1].exercises} />
      <Part part={parts[2].name} exercises={parts[2].exercises} />
    </div>
  );
};

const Total = (props) => {
  return <p>Number of exercises {props.e1 + props.e2 + props.e3}</p>;
};

const App = () => {
  const courseTitle = 'Half Stack application development';
  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;

  return (
    <div>
      <Header courseName={courseTitle} />
      <Content />
      <Total e1={exercises1} e2={exercises2} e3={exercises3} />
    </div>
  );
};

export default App;
