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
import Layout from './layout'

const App = ({ store }) => (
  <Provider store={store}>
    <Layout fancy={777} store={store}/>
  </Provider>
);

class VideoUp extends Component {
  render() {
    return <App store={configureStore()} />
  }
}

AppRegistry.registerComponent('VideoUp', () => VideoUp);
