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
        <Cover className="bookCover" link={props.book.coverpage} />
        <Title className="title" title={props.book.title} />
        <Rating className="star"number={props.book.overallRatings} />
        <Author className="authorName" author={props.book.author} />
      </div>
    </Link>
  );
}
