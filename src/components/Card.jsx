import React from "react";

function Card(props) {
  const { title, body, imgUrl } = props.item;
  const ITEM = props.item;

  const [counter, setCounter] = React.useState(
    Number(localStorage.getItem("counter") || 0)
  );

  const clickHandler = event => {
    event.target.name == "increase"
      ? setCounter(counter + 1)
      : setCounter(counter - 1);
  };
  localStorage.setItem("counter", counter);

  return (
    <div className="card">
      {imgUrl ? <img src={imgUrl} className="card-img-top" alt="..." /> : null}

      <div className="card-body">
        {ITEM.title ? <h5 className="card-title">{ITEM.title}</h5> : null}
        <p className="card-text">{props.item.body}</p>
        <div>
          <h1>Likes: {counter}</h1>
          <button name="increase" onClick={clickHandler}>
            Like
          </button>
          <button name="decrease" onClick={clickHandler}>
            Dislike
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
