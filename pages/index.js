import React from "react";
import Head from "../components/head";
import Nav from "../components/nav";
import CardComponent from "../components/cardComponent";

const Home = () => (
  <div>
    <Head title="Home" />
    <Nav />

    <div className="hero">
      <h1 className="title">Some Examples</h1>

      <div className="row">
        <CardComponent
          link="/page1"
          title="Setting the light &rarr;"
          content="Example page 1"
        />

        <CardComponent
          link="/page2"
          title="View the light &rarr;"
          content="Example page 2"
        />

        <CardComponent
          link="/page3"
          title="Getting Started &rarr;"
          content="Example page 3"
        />
      </div>
    </div>
    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
    `}</style>
  </div>
);

export default Home;
