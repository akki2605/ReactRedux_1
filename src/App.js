import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Homepage/Header";
import Card from "./components/Homepage/Card";
import {connect } from "react-redux";


const mapStateToProps = (state)=>{
  return {
    allBooks:state.allBooks
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    getAllData:()=>dispatch({type:"readBook"})
  }
}



function App({getAllData,allBooks}) {

  useEffect(()=>{
    getAllData()
  },[])

  var store;
  const lStorage = localStorage.getItem("store");
  if (lStorage == null ) {
    store = allBooks
    localStorage.setItem("store", JSON.stringify(store));
  } else {
    store = JSON.parse(lStorage);
  }

  return (
    <>
      <Header />
      <div>
        {
          store.listIsbn.map((isbn) => {
            return <Card key={isbn} book={store.books[isbn]}/>
          })
        }
      </div>
    </>
  );
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
