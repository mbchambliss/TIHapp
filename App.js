//Original App.js

import React, {Component} from 'react';
import { DrawerNavigator } from './routes/drawer';

import * as firebase from 'firebase';
import {firebaseConfig} from './firebase.js';
firebase.initializeApp(firebaseConfig);

function App() {
    return (
      <DrawerNavigator />
    );
}

export default App;
