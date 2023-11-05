const Header = (props) => {
  console.log(props);
  return <h1>{props.courseName}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.partName} {props.exercises}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part partName={props.n1} exercises={props.e1} />
      <Part partName={props.n2} exercises={props.e2} />
      <Part partName={props.n3} exercises={props.e3} />
    </div>
  );
};

const Total = (props) => {
  return <p>Number of exercises {props.e1 + props.e2 + props.e3}</p>;
};

const App = () => {
  const courseTitle = 'Half Stack application development';
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  };
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7,
  };
  const part3 = {
    name: 'State of a component',
    exercises: 14,
  };

  return (
    <div>
      <Header courseName={courseTitle} />
      <Content
        n1={part1.name}
        n2={part2.name}
        n3={part3.name}
        e1={part1.exercises}
        e2={part2.exercises}
        e3={part3.exercises}
      />
      <Total e1={part1.exercises} e2={part2.exercises} e3={part3.exercises} />
    </div>
  );
};
export default App;
