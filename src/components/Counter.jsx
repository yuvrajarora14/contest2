const Counter = (props) => {
  return (
    <div className="counter">
      <br />
      <div>
        <div id="title">Counter Using React</div>
        <div className="countP">
          Your Current Count is : <span id="showCount">{props.Number}</span>
        </div>
        <div id="error">{props.Errors}</div>
      </div>
      <div className="buttonClass">
        <button className="btn" onClick={props.decrement}>
          Decrement
        </button>
        <button className="btn" onClick={props.increment}>
          Increment
        </button>
        <div >
          <button id="button0" onClick={props.Zeroo}>
            Go Back to 0
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
