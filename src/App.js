import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCD45ea2BwqnUdXQh3Opru2cMfxw2k2b6o',
      authDomain: 'authenticationreact-69b9a.firebaseapp.com',
      databaseURL: 'https://authenticationreact-69b9a.firebaseio.com',
      projectId: 'authenticationreact-69b9a',
      storageBucket: 'authenticationreact-69b9a.appspot.com',
      messagingSenderId: '710783037687'
    });
  }
  render() {
    return (
      <View>
        <Header headerText={'Authentication'} />
        <LoginForm />
      </View>
    );
  }
}

export default App;
