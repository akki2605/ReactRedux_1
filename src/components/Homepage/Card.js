import './Card.css';
import Cover from "../common/Cover";
import Rating from "../common/Ratings";
import {Title,Author} from "../common/BookDescription";
import React from "react";
import StarRatings from 'react-star-ratings';


export default function Card() {
  return (
    <div className="card">
        <Cover/>
        <Title/>
        <Rating/>
        <Author/>
    </div>
  );
}
