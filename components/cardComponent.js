import React from "react";
import Link from "next/link";

const cardComponent = ({ link, title, content }) => (
  <div>
    <Link prefetch href={link}>
      <a className="card">
        <h3> {title}</h3>
        <p> {content}</p>
      </a>
    </Link>

    <style jsx>{`
      div {
        border: 1px solid #9b9b9b;
        padding: 18px 18px 24px;
        color: #434343;
        margin: auto;
        width: 220px;
      }
      .card {
        text-align: left;
        text-decoration: none;
      }
      div:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
);

export default cardComponent;
