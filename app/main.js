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

var App = ({ store }) => (
  <Provider store={store}>
    <BaseLayout fancy={777} store={configureStore()}/>
  </Provider>
);

class VideoUp extends Component {
  render() {
    return <App store={configureStore()} />
  }
}

AppRegistry.registerComponent('VideoUp', () => VideoUp);
