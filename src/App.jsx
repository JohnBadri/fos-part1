import { useState } from 'react';

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const StatisticLine = ({ text, counter }) => {
  return (
    <tr>
      <td>
        {text}: {counter}
      </td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad, total, average, positive }) => {
  if (good || neutral || bad) {
    return (
      <table>
        <tbody>
          <StatisticLine text="Good" counter={good} />
          <StatisticLine text="Neutral" counter={neutral} />
          <StatisticLine text="Bad" counter={bad} />
          <StatisticLine text="Total" counter={total} />
          <StatisticLine text="Average" counter={average} />
          <StatisticLine text="Positive" counter={positive} />
        </tbody>
      </table>
    );
  }
  return (
    <div>
      <p>No Feedback Given</p>
    </div>
  );
};

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
