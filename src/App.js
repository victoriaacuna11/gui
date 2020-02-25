import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import CustomLayout from './containers/Layout';
import BaseRouter from './routes';
import {BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
      <CustomLayout>
        <BaseRouter/>
      </CustomLayout>
      </Router>
    </div>
  );
}

export default App;
