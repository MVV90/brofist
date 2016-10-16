import React, { Component } from "react";
import {
AppRegistry,
StyleSheet,
Image,
Text,
View
} from "react-native";

import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

import BaseLayout from './layout'



/*
// redux
import Redux, { createStore } from 'redux';

import { createAction } from 'redux-actions';
import { handleAction } from 'redux-actions';
import { handleActions } from 'redux-actions';




// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
var store = createStore(counter)

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

store.subscribe(() =>
console.log(store.getState())
)

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({type: 'INCREMENT'})
// 1
store.dispatch({type: 'INCREMENT'})
// 2
store.dispatch({type: 'DECREMENT'})
// 1

 render() {
 var Route = require('./route');
 return <Route/>
 };
*/

const Fpoo = ({ fancy }) => (
<Text >
  Hello From falvsiusadlj: {fancy}
</Text>
);


class VideoUp extends Component {
  render() {
    return (
      <BaseLayout fancy={777} store={configureStore}/>
    )
  }
}


AppRegistry.registerComponent('VideoUp', () => VideoUp);
