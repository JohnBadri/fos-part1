import { useState } from 'react';

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Display = ({ text, counter }) => (
  <p>
    {text}: {counter}
  </p>
);

const Statistics = ({ good, neutral, bad, total, average, positive }) => (
  <div>
    <h1>Statistics</h1>
    <Display text="Good" counter={good} />
    <Display text="Neutral" counter={neutral} />
    <Display text="Bad" counter={bad} />
    <Display text="Total" counter={total} />
    <Display text="Average" counter={average} />
    <Display text="Positive" counter={positive} />
  </div>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positive, setPositive] = useState(0);
  const [average, setAverage] = useState(0);

  const addGood = () => {
    const updatedGood = good + 1;
    const total = updatedGood + neutral + bad;
    const goodBad = updatedGood - bad;

    setGood(updatedGood);
    setTotal(updatedGood + neutral + bad);

    const avg = goodBad / total;
    setAverage(avg);

    const positiveAvg = updatedGood / total;
    setPositive(positiveAvg * 100);
  };

  const addNeutral = () => {
    const updatedNeutral = neutral + 1;
    const total = good + updatedNeutral + bad;
    const goodBad = good - bad;

    setNeutral(updatedNeutral);
    setTotal(updatedNeutral + good + bad);

    const avg = goodBad / total;
    setAverage(avg);

    const positiveAvg = good / total;
    setPositive(positiveAvg * 100);
  };

  const addBad = () => {
    const updatedBad = bad + 1;
    const total = good + neutral + updatedBad;
    const goodBad = good - updatedBad;

    setBad(updatedBad);
    setTotal(updatedBad + neutral + good);

    const avg = goodBad / total;
    setAverage(avg);

    const positiveAvg = good / total;
    setPositive(positiveAvg * 100);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={addGood} text={'Good'} />
      <Button onClick={addNeutral} text={'Neutral'} />
      <Button onClick={addBad} text={'Bad'} />
      <h1>Statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default App;
