import "./Counter.css";

const Counter = ({ title, number, eventColor }) => {
  return (
    <div className="counter">
      <div className="counter-number" style={{ backgroundColor: eventColor }}>
        {number}
      </div>
      <h3 className="counter-text" style={{ color: eventColor }}>
        {title}
      </h3>
    </div>
  );
};

export default Counter;
