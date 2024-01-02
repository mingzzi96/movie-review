import "./Rating.css";

function Star({ selected = false }) {
  const className = `Rating-star ${selected ? "selected" : ""}`;
  return <span className={className}>★</span>;
}

function Rating({ value = 0 }) {
  return (
    <div>
      <Star selected={value >= 1} />
      <Star selected={value >= 2} />
      <Star selected={value >= 3} />
      <Star selected={value >= 4} />
      <Star selected={value >= 5} />
    </div>
  );
}

export default Rating;
