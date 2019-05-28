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
    // const { currentColor, brightness } = this.state;
    const { images, color } = this.props;
    console.log(color.color, color.opacity);
    return (
      <div>
        <Head title="Page 2" />
        <Nav />

        <div className="container">
          <Light fill={color.color} opacity={color.opacity} />
          {/* <Btn onClick2={this.changeColor} title="Change Color" />
          <Btn onClick2={this.increaseBrightness} title="+ Brightness" />
          <Btn onClick2={this.decreaseBrightness} title="- Brightness" /> */}
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
  color: state.colorReducer,
  opacity: state.opacity
});

export default connect(
  mapStateToProps,
  null
)(bulb);
