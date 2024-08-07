import React from 'react';


import getDesignTokens from './theme';
import ThemeConfig from './theme';
import Router from './routes';
import "./App.css";
import 'react-circular-progressbar/dist/styles.css';





function App() {

  return (

    <ThemeConfig>
      <Router />
    </ThemeConfig>

  );
}

export default App;
