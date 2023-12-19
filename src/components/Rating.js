const Rating = ({getRating}) => {
  return (
    <div className="feedbackWidget__rating">
      {[...Array(5)].map((_, r) => (
        <label htmlFor={r + 1} key={r}>
          <input
            onChange={() => getRating(r + 1)}
            id={r + 1}
            type="radio"
            name="rating"
            value={r + 1}
          />
          <span>{r + 1}</span>
        </label>
      ))}
    </div>
  );
}

export default Rating
