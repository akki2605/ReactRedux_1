import React, { useState } from "react";
import { connect } from "react-redux";
import Cover from "../common/Cover";
import Comment from "./Comment";
import Rating from "../common/Ratings";
import ModalPopUp from "./ModalPopUp";
import { RatingStar } from "rating-star";
import { Title, Author } from "../common/BookDescription";
import "./specific.css";
import { Link, useSearchParams } from "react-router-dom";

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

function Specificbook({ updateBook }) {
  function check(comment) {
    return restricted.some((v) => comment.includes(v));
  }

  const [newRating, setRating] = useState(0);
  const onRatingChange = (rate) => {
    setRating(rate);
  };

  const [toggleModal, setToggleModal] = useState(false);

  //used to
  const handleSubmit = (e, isbn) => {
    e.preventDefault();
    var newComment = document.getElementById("comments").value;
    var updatedComment = newComment;

    if (newRating > 0 && updatedComment.length > 0) {
      if (check(updatedComment)) {
        setToggleModal(true);
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
          }
        });

        updatedComment = commentArr.join(" ");
        document.getElementById("comments").value = updatedComment;
        // console.log("inside if block",updatedComment , newRating);
      } else {
        setToggleModal(false);

        document.getElementById("comments").value = "";
        setRating(0);

        let books = JSON.parse(localStorage.getItem("store"));

        books.books[isbn].review.push({
          rating: newRating,
          comment: updatedComment,
        });

        var total_sum = 0;
        books.books[isbn].review.map((ele) => {
          return (total_sum = total_sum + ele.rating);
        });

        var overAllRating = total_sum / books.books[isbn].review.length;

        books.books[isbn].overallRatings = overAllRating;
        localStorage.setItem("store", JSON.stringify(books));

        updateBook({
          data: books,
        });
      }
    } else {
      alert("Either Rating or Comment not provided !!!");
    }
  };

  //read about useSearchParams
  const [URL] = useSearchParams();
  const isbn = URL.get("isbn");
  const books = JSON.parse(localStorage.getItem("store")).books;
  const currentBook = books[isbn];
  var reviews = currentBook.review;

  //main page rendering
  return (
    <>
      <div className="book-detail">
        <Link to="/">
          <img
            className="back"
            src="https://img.icons8.com/ios-glyphs/400/000000/left.png"
          />
        </Link>
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
        <ModalPopUp
          isbn={isbn}
          handleSubmit={handleSubmit}
          onClose={() => {
            setToggleModal(false);
            document.getElementById("comments").value = "";
            setRating(0);
          }}
          toggleModal={toggleModal}
        />
      </div>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Specificbook);
