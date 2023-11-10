import { useState } from 'react';

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Display = ({ text, counter }) => (
  <p>
    {text}: {counter}
  </p>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const plusOne = (arg) => {};

  const addGood = () => {
    setGood(good + 1);
    console.log(good);
  };

  const addNeutral = () => {
    setNeutral(neutral + 1);
    console.log(neutral);
  };

  const addBad = () => {
    setBad(bad + 1);
    console.log(bad);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={addGood} text={'Good'} />
      <Button onClick={addNeutral} text={'Neutral'} />
      <Button onClick={addBad} text={'Bad'} />
      <h1>Statistics</h1>
      <Display text="Good" counter={good} />
      <Display text="Neutral" counter={neutral} />
      <Display text="Bad" counter={bad} />
    </div>
  );
};

export default App;
