import React from "react";  

export default function Cover(props) {
    return(
        <img className="bookCover" src={props.link} />
    );
}