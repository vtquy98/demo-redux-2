import React from "react";
import Nav from "../components/nav";
import Head from "../components/head";
import { connect } from "react-redux";

const Page2 = ({ images, state, clickImage }) => {
  console.log(images);
  return (
    <div>
      {/* {images.map((item, index) => (
        <div key={index}>{item}</div>
      ))} */}
      <button onClick={() => clickImage()}>Click Image</button>
      <Head title="Page 3" />
      <Nav />
      <p>This's Page 3</p>
    </div>
  );
};

export default connect(
  state => ({
    images: state.images
  }),
  dispatch => ({
    clickImage: () => {
      dispatch({
        type: "1"
      });
    }
  })
)(Page2);
