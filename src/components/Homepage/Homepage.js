import React, { useEffect } from "react";
import Header from "./Header";
import Card from "./Card";
import {connect } from "react-redux";


function mapStateToProps (state){
  return {
    allBooks:state.allBooks
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    getAllData:()=>dispatch({type:"readBook"})
  }
}



function Homepage({getAllData,allBooks}) {

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
              return <Card key={isbn} id={isbn} book={store.books[isbn]}/>
            })
          }
        </div>
      </>
    );
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Homepage);
  