import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';




// resources
import img_bro_fist from "../bro-fist.png";


class FlexDirectionBasics extends Component {
/*
  const asdf = ({
  increment = createAction('INCREMENT')
  });

  const reducer = handleActions({
    INCREMENT: (state, action) => ({
      counter: state.counter + action.payload
    }),

    DECREMENT: (state, action) => ({
      counter: state.counter - action.payload
    })
  }, {counter: 0});


  function counter(state = 0, action) {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state - 1
      default:
        return "state " + state.toString();
    }
  };
*/

  render() {
    return (
    <View>
      <View style={{height: 20, backgroundColor: 0xFFE11AFF}}/>
      <View style={{height: 1, backgroundColor: 0xFD7400FF}}/>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: 50, height: 50, backgroundColor: 0x004358FF}}/>
        <View style={{flex: 1,   height: 50, backgroundColor: 0x1F8A70FF}}>
          <Text
          style={{fontFamily: 'Verdana', fontWeight: 'bold', fontSize: 20, textAlign: 'center', margin: 10, color: 'white'}}>Brofist!</Text></View>
        <View style={{width: 50, height: 50, backgroundColor: 0xBEDB39FF}}>
          <Image style={{left: 5, top: 5}} source={img_bro_fist}/></View>
      </View>
      <View style={{height: 2, backgroundColor: 0xFD7400FF}}/>
    </View>
    );
  }
};


class Route extends Component {
  render() {
    return (
    <View style={styles.container}>

      <FlexDirectionBasics />

      <Text style={styles.welcome}>
        Become a bro like f@#$`n today!
      </Text>
      <Text style={styles.instructions}>
        To get started, edit index.ios.js
      </Text>
      <Text style={styles.instructions}>
        Press Cmd+R to reload,{'\n'}
        Cmd+D or shake for dev menu
      </Text>
    </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


