import React from "react";

export default function Tours(props) {
  const [truncated, setTruncated] = React.useState(true);
  function handleTruncated() {
    setTruncated(!truncated);
  }
  const resulting = truncated
    ? props.info.slice(0, 200)
    : props.info.slice(0);
  const [hide, setHide] = React.useState(true);

  function handleClick() {
    setHide(false);
  }

  return (
    <article
      className="single-tour"
      style={{ display: hide ? "block" : "none" }}
    >
      <img alt="" src={props.image} />
      <span className="tour-price">{props.price}</span>
      <div className="tour-info">
        <h5>{props.name}</h5>
        <p>
          {resulting}
          <span className="toggle" onClick={handleTruncated}>
            {truncated ? "Read More" : "Read Less"}
          </span>
        </p>
        <button className="delete-btn btn-block btn" onClick={handleClick}>
          Not interested
        </button>
      </div>
    </article>
  );
}
