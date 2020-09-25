// App.index.js

import React, { Component } from 'react';
import * as admin from "firebase-admin";
import config from './firebase-config';

class App extends Component {
  
  constructor() {
    super();

    // Initialize Firebase
    admin.initializeApp(config);
  }
  
  render() {
    return (
	  </body>
      <div className="App">
        Hello World
      </div>
    );
  }
}

export default App;