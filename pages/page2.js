import React, { Component } from "react";
import Nav from "../components/nav";
import Light from "../components/bulb";
import Btn from "../components/buttonComponent";
import Head from "../components/head";
import { connect } from "react-redux";

class bulb extends Component {
  constructor() {
    super();
    // this.state = {
    //   currentColor: "BLACK"
    // };

    // this.getRandomColor = () => {
    //   var letters = "0123456789ABCDEF";
    //   var color = "#";
    //   for (var i = 0; i < 6; i++) {
    //     color += letters[Math.floor(Math.random() * 16)];
    //   }
    //   return color;
    // };

    // this.nextColor = color => {
    //   switch (color) {
    //     case "BLACK":
    //       return "RED";
    //     case "RED":
    //       return "GREEN";
    //     case "GREEN":
    //       return "BLUE";
    //     case "BLUE":
    //       return "RED";
    //   }
    // };
  }

  // increaseBrightness = () => {
  //   this.setState(preState => ({
  //     brightness: preState.brightness + 0.1
  //   }));
  //   console.log(this.state.brightness);
  // };

  // decreaseBrightness = () => {
  //   this.setState(preState => ({
  //     brightness: preState.brightness - 0.1
  //   }));
  //   console.log(this.state.brightness);
  // };

  // changeColor = () => {
  //   this.setState({
  //     currentColor: this.getRandomColor()
  //   });
  //   console.log(this.state.currentColor);
  // };

  render() {
    const { color, opacity, brightness } = this.props;
    console.log(color, opacity, brightness);
    let display;
    if (opacity == 0) {
      display = "none";
    }
    return (
      <div>
        <Head title="Page 2" />
        <Nav />

        <div className="container">
          <Light fill={color} opacity={brightness} display={display} />
        </div>

        <style jsx>
          {`
            div.container {
              text-align: center;
            }
          `}
        </style>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  images: state.images,
  color: state.colorReducer.color,
  opacity: state.colorReducer.opacity,
  brightness: state.colorReducer.brightness
});

export default connect(
  mapStateToProps,
  null
)(bulb);
