import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Landing from './landing';
import reportWebVitals from './reportWebVitals';
import News from './news.js';
import Discount from './discount';
import Trailers from './trailers';
import Video from './video';

ReactDOM.render(
  <React.StrictMode>
    <Landing />
    <Video />
    <News />
    <Discount />
    <Trailers />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
