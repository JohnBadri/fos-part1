import { useState } from 'react';

const Button = ({ onClick, quote }) => {
  return <button onClick={onClick}>{quote}</button>;
};

const App = () => {
  const anecdotesObj = {
    0: {
      anecdote: 'If it hurts, do it more often.',
      points: 0,
    },
    1: {
      anecdote: 'Adding manpower to a late software project makes it later!',
      points: 0,
    },
    2: {
      anecdote:
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      points: 0,
    },
    3: {
      anecdote:
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      points: 0,
    },
    4: {
      anecdote: 'Premature optimization is the root of all evil.',
      points: 0,
    },
    5: {
      anecdote:
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      points: 0,
    },
    6: {
      anecdote:
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
      points: 0,
    },
    7: {
      anecdote: 'The only way to go fast, is to go well.',
      points: 0,
    },
  };

  const [anecdotes, setAnecdotes] = useState(anecdotesObj);
  const [selected, setSelected] = useState(0);

  const selectQuote = () => {
    const randomNumber = Math.floor(
      Math.random() * Object.keys(anecdotes).length
    );
    setSelected(randomNumber);
  };

  const voteForAnecdote = () => {
    const updatedAnecdotes = { ...anecdotes };
    updatedAnecdotes[selected].points += 1;
    setAnecdotes(updatedAnecdotes);
  };

  const displayAnecdote = anecdotes[selected].anecdote;
  const points = anecdotes[selected].points;

  return (
    <div>
      <p>{displayAnecdote}</p>
      <p>Has {points} votes</p>
      <Button onClick={voteForAnecdote} quote={'Vote'} />
      <Button onClick={selectQuote} quote={'Next Anecdote'} />
    </div>
  );
};

export default App;
