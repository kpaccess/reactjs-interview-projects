import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

const StarRating = ({ noOfStars }: { noOfStars: number }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const arr = [...Array(noOfStars)];

  const handleClick = (getCurrentIndex: number) => {
    setRating(getCurrentIndex);
  };
  const handleMouseMove = (getCurrentIndex: number) =>
    setHover(getCurrentIndex);
  const handleMouseLeave = () => {
    setHover(rating);
  };

  return (
    <div className="star-rating">
      {arr.map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseMove(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
};
export default StarRating;
