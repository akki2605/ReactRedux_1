import "./Card.css";
import Cover from "../common/Cover";
import Rating from "../common/Ratings";
import { Title, Author } from "../common/BookDescription";
import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <Cover link={props.book.coverpage} />
      <Title title={props.book.title} />
      <Rating number={props.book.overallRatings} />
      <Author author={props.book.author} />
    </div>
  );
}
