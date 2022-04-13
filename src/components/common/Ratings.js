import React from "react";
import StarRatings from "react-star-ratings";

export default function Rating(props) {
  return (
    <div className={props.className}>
      <StarRatings
        rating={props.number}
        starRatedColor="gold"
        starDimension="25px"
        starSpacing="1px"
      />
    </div>
  );
}
