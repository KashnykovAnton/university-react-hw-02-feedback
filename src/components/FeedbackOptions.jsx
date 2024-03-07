import { nanoid } from "nanoid";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((option) => (
        <button key={nanoid()} type="button" name={option} onClick={onLeaveFeedback}>
          {option}
        </button>
      ))}
    </>
  );
};

export default FeedbackOptions;
