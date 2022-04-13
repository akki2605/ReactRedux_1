import React from "react";
import StarRatings from "react-star-ratings";

export default function Comment(props) {
  return (
    <div className="single-comment">
        {props.rating} <StarRatings rating={props.rating} starRatedColor="blue" starDimension="20px"
        starSpacing="1px"/><br/>
        {props.comment}
    </div>
    );
}
