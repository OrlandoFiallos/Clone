import React from "react";
import { v4 as uuidV4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalfStroke, faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as FaStar2 } from "@fortawesome/free-regular-svg-icons";
const stars = [1, 2, 3, 4, 5];

const Rating = ({ value, text, color }) => {
  const doble = stars.map((item) =>
    value + 1 === item + 0.5 ? (
      <FontAwesomeIcon icon={faStarHalfStroke} />
    ) : value >= item ? (
      <FontAwesomeIcon icon={faStar} />
    ) : (
      <FontAwesomeIcon icon={FaStar2} />
    )
  );

  return (
    <div className="rating">
      <span key={uuidV4()}>{doble}</span>
    </div>
  );
};
Rating.defaultProps = {
  color: " #FFA41C",
};

export default Rating;
