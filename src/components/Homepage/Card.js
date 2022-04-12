import React from "react";
import { Link } from "react-router-dom";
import Cover from "../common/Cover";
import Rating from "../common/Ratings";
import { Title, Author } from "../common/BookDescription";
import "./Card.css";

export default function Card(props) {
  return (
    <Link to={"/specific_book?isbn="+props.id} style={{ textDecoration: 'none',color: 'black'}}>
      <div className="card">
        <Cover link={props.book.coverpage} />
        <Title title={props.book.title} />
        <Rating number={props.book.overallRatings} />
        <Author author={props.book.author} />
      </div>
    </Link>
  );
}
