import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BoardState from './context/board/BoardState';
import AlertState from './context/alert/AlertState';
import UserState from './context/user/UserState';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
       <BoardState>
      <AlertState>
        <UserState>
          <App />
        </UserState>
      </AlertState>
    </BoardState>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
