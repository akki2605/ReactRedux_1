import React from "react";  

export default function Cover(props) {
    return(
        <img className={props.className} src={props.link} />
    );
}