const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul>
      <li>
        <p>Good:</p>
        <p>{good}</p>
      </li>
      <li>
        <p>Neutral:</p>
        <p>{neutral}</p>
      </li>
      <li>
        <p>Bad: {bad}</p>
        <p></p>
      </li>
      <li>
        <p>Total: </p>
        <p>{total}</p>
      </li>
      <li>
        <p>Positive feedback:</p>
        <p>{positivePercentage}</p>
      </li>
    </ul>
  );
};

export default Statistics;
