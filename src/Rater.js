import "./styles.css";
import starIcon from "./icon-star.svg";
import { useState } from "react";

function Rater({ isActive, setActive, setNumber }) {
  const [selected, setSelected] = useState(null);
  const nums = [];
  for (let i = 1; i < 6; i += 1) {
    nums.push(i);
  }
  const handleClick = (index) => {
    if (selected === index) {
      setSelected(null);
      return;
    }
    console.log(`selected ${index}!`);
    setSelected(index);
  };
  const handleSubmit = () => {
    if (selected === null) return;
    else {
      console.log(`number is ${selected}!`);
      setActive(true);
      setNumber(selected);
    }
  };
  return (
    <article className="card">
      <div className="star">
        <img src={starIcon} alt="star" />
      </div>
      <div className="heading">How did we do?</div>
      <div className="subheading">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </div>
      <div className="numbers">
        {nums.map((num, index) => {
          return (
            <div
              className={selected === num ? "activeNum" : null}
              onClick={() => handleClick(num)}
            >
              {num}
            </div>
          );
        })}
      </div>
      <div className="submit" onClick={handleSubmit}>
        Submit
      </div>
    </article>
  );
}
export default Rater;
