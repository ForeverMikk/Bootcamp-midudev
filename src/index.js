import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// const rootElement = document.getElementById("root");  

const notes = [
  {
    id: 1,
    content: 'HTML',
    date: '2022-05-30T17:30:31.09BZ',
    important: true
  },
  {
    id: 2,
    content: 'CSS',
    date: '2022-05-30T17:30:31.09BZ',
    important: true
  },
  {
    id: 2,
    content: 'JavaScript',
    date: '2022-05-30T17:30:31.09BZ',
    important: true
  },
]

ReactDOM.render(
  <App notes={notes} />
,document.getElementById('root'));


