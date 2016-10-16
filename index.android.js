/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import Redux, { createStore } from 'redux';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  View
} from 'react-native';

import NativeUploader from './NativeUploader';


// 'use strict';
/**
 * This exposes the native ToastAndroid module as a JS module. This has a
 * function 'show' which takes the following parameters:
 *
 * 1. String message: A string with the text to toast
 * 2. int duration: The duration of the toast. May be ToastAndroid.SHORT or
 *    ToastAndroid.LONG
 */
//import { NativeModules } from 'react-native';
//module.exports = NativeModules.NativeUploader;

//import { NativeModules } from 'react-native';
// module.exports = NativeModules.NativeUploader;

// module.exports = NativeModules.NativeUploader;



///////
//import NativeUploader from './NativeUploader';
// NativeUploader.show('Awesome', NativeUploader.SHORT);


// import NativeUploader from NativeModules.NativeUploader;










function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1
  case 'DECREMENT':
    return state - 1
  default:
    return "state " + state.toString();
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counter)

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

store.subscribe(() =>
  console.log(store.getState())
)

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: 'INCREMENT' })
// 1
store.dispatch({ type: 'INCREMENT' })
// 2
store.dispatch({ type: 'DECREMENT' })
// 1

















const Fpoo = ({ fancy }) => (
        <Text >
          Hello From Redux-ish: {fancy}
        </Text>
);













class VideoUp extends Component {

  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
    this._onPressButton = this._onPressButton.bind(this);
  }
  
  _onChange(event: Event) {
    if (!this.props.onChangeMessage) { return; }
    this.props.onChangeMessage(event.nativeEvent.message);
  }
  
  _onPressButton(event: Event) {
    console.log("testing");
    // TODO: make this a background service, so upload will continue
    // on app close or pause etc..
    // http://stackoverflow.com/questions/15758980/android-service-need-to-run-alwaysnever-pause-or-stop
    NativeUploader.show('Now uploading your video..', NativeUploader.SHORT);
    
    //NativeUploader.show('Awesome', NativeUploader.SHORT);
    /*
    //var a = getMoviesFromApi();
    
    var a = fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => { return responseJson.movies; })
      .catch((error) => { console.error(error); });
      
      
      console.warn(a);
    */
    // lets upload a video here to somewhere fancy!!!
    // practise send to S3! or zencoder?
  }
  

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Re- Hello World!
        </Text>
        <Fpoo
          fancy = {777}
        />
        <Text style={styles.instructions}>
          To upload a video try here:
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu{'\n'}
          Or press ctrl + m
        </Text>
        <TouchableHighlight onPress={this._onPressButton}>
        <Image style={styles.button} source={require('image!logo')} />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF00FF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#337733',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('VideoUp', () => VideoUp);
