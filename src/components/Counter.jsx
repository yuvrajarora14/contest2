const Counter = (props) => {
  const gotobtn = document.querySelector("#button0");

  if (props.Number >= 10) {
    gotobtn.style.display = "block";
  }

  if (props.Number == 0) {
    gotobtn.style.display = "none";
  }

  if (props.Number >= 3 && props.Number <= 9) {
    gotobtn.style.display = "none";
  }

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
        <div>
          <button id="button0" onClick={props.Zeroo}>
            Go Back to 0
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
