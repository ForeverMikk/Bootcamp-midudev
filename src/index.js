import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30",
    important: true,
  },
  {
    id: 2,
    content: "CSS is easy",
    date: "2019-05-30",
    important: false,
  },
  {
    id: 3,
    content: "JS is easy",
    date: "2019-05-30",
    important: true,
  },
];

const rootElement = document.getElementById("root");

ReactDOM.render(<App notes={notes} />, rootElement);
