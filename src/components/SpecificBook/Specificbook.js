import React, { useState } from "react";
import { connect } from "react-redux";
import Header from "../Homepage/Header";
import Cover from "../common/Cover";
import Comment from "./Comment";
import Rating from "../common/Ratings";
import { RatingStar } from "rating-star";
import { Title, Author } from "../common/BookDescription";
import "./specific.css";
import { useSearchParams } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    allBooks: state.allBooks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllData: () => dispatch({ type: "readBook" }),
    updateBook: (data) =>
      dispatch({ type: "updateBook", payload: { data: data } }),
  };
};

const restricted = ["poor", "waste", "disgusting", "horrible", "filthy"];

function check(comment) {
  if (restricted.some((v) => comment.includes(v))) return true;
  else return false;
}

function Specificbook({ updateBook }) {
  const [newRating, setRating] = React.useState(0);
  const onRatingChange = (rate) => {
    setRating(rate);
  };

  const handleSubmit = (e, isbn) => {
    e.preventDefault();
    var newComment = document.getElementById("comments").value;

    if (check(newComment)) {
      // alert("restricted  comment !!!!");
      var commentArr = newComment.split(" ");
      commentArr.forEach((ele, index) => {
        switch (ele) {
          case "poor":
            commentArr[index] = "p**r";
            break;
          case "waste":
            commentArr[index] = "w***e";
            break;
          case "disgusting":
            commentArr[index] = "d********g";
            break;
          case "horrible":
            commentArr[index] = "h******e";
            break;
          case "filthy":
            commentArr[index] = "f*****y";
            break;
          default:
            break;
          }
      });
      var updatedComment = commentArr.join(' ');
      
      console.log(updatedComment ,newRating);

    } else {
      console.log(newComment, newRating);
    }
  };

  // toupdate reviews
  // reviews.push(
  //   {
  //     comment: "Book servers the purpose",
  //     rating: 4
  //   });
  // var total_sum = 0
  // currentBook.review.map((ele)=>{
  //    return total_sum = total_sum+ele.rating
  //  })
  //  var overAllRating = total_sum/currentBook.review.length

  const [URL] = useSearchParams();
  const isbn = URL.get("isbn");
  const books = JSON.parse(localStorage.getItem("store")).books;
  const currentBook = books[isbn];
  var reviews = currentBook.review;
  // console.log(reviews);

  //main page rendering
  return (
    <>
      <Header />
      <div className="book-detail">
        <Cover className="book-cover" link={currentBook.coverpage} />
        <Title className="book-title" title={currentBook.title} />
        <Rating
          className="over-all-rating"
          number={currentBook.overallRatings}
        />
        <Author className="book-author" author={currentBook.author} />
        <form onSubmit={(event) => handleSubmit(event, isbn)}>
          <div className="comment-header">
            <div id="comment">Comment :</div>
            <RatingStar
              id="new-rating"
              clickable
              rating={newRating}
              onRatingChange={onRatingChange}
            />
          </div>
          <textarea
            type="text"
            id="comments"
            placeholder="Liked the book tell us about it!!!"
          />
          <button type="summit" id="add">
            Add
          </button>
        </form>
        <div className="comment-container">
          {reviews.map((e) => {
            return <Comment rating={e.rating} comment={e.comment} />;
          })}
        </div>
      </div>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Specificbook);
