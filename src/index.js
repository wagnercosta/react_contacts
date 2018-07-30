import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import App1 from './App1'
import './index.css'

//ReactDOM.render(<App1 />, document.getElementById('root'))
ReactDOM.render(
    <BrowserRouter><App /></BrowserRouter>,
    document.getElementById('root')
  );
