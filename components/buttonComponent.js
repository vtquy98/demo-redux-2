import React from "react";

const buttonComponent = ({ title, onClick2 }) => {
  return (
    <div>
      <button onClick={onClick2}> {title} </button>

      <style jsx>
        {`
          button {
            background-color: #4caf50; /* Green */
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            margin: 10px;
            font-size: 16px;
            border-radius: 5px;
            float: left;
          }
        `}
      </style>
    </div>
  );
};

export default buttonComponent;
