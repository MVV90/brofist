//
// 3rd party!
//
// Thanks yogiben!
// https://github.com/meteor-factory/react-native-tinder-swipe-cards
// and whoever else you are:
// https://github.com/brentvatne/react-native-animated-demo-tinder
//

'use strict';

import React, { Component } from "react";
import {StyleSheet, Text, View, Image} from "react-native";
// import SwipeCards from 'react-native-swipe-cards'; // screw the package so we can modify ourselves:
import SwipeCards from "./external/react-native-swipe-cards/SwipeCards";

class Card extends Component {
  render() {
    return (
    <View style={styles.card}>
      <Image style={styles.thumbnail} source={{uri: this.props.image}}/>
      <Text style={styles.text}>{this.props.name}</Text>
    </View>
    )
  }
}

class NoMoreCards extends Component {
  render() {
    return (
    <View style={styles.noMoreCards}>
      <Text>No more cards</Text>
    </View>
    )
  }
}

const Cards = [
  {name: 'Bill Hankis', image: 'https://media.giphy.com/media/MuCGA1pRiH68g/giphy.gif'},
  {name: 'ゴジラ', image: 'https://media.giphy.com/media/gLy8OMRImEADu/giphy.gif'},
  {name: 'dog', image: 'https://media.giphy.com/media/vIEJcdeRAK1Es/giphy.gif'},
  {name: 'Douglas', image: 'https://i.kinja-img.com/gawker-media/image/upload/s--vwJAzCfC--/c_fit,fl_progressive,q_80,w_636/19ap97d3cc2evgif.gif'},
];

export default React.createClass({
  getInitialState() {
    return {
      cards: Cards,
      outOfCards: false
    }
  },
  handleYup (card) {
    console.log("yup")
  },
  handleNope (card) {
    console.log("nope")
  },
  cardRemoved (index) {
    console.log(`The index is ${index}`);

    let CARD_REFRESH_LIMIT = 3

    if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
      console.log(`There are only ${this.state.cards.length - index - 1} cards left.`);
    }

  },
  render() {
    return (
    <SwipeCards
    cards={this.state.cards}
    loop={false}

    renderCard={(cardData) => <Card {...cardData} />}
    renderNoMoreCards={() => <NoMoreCards />}
    showYup={true}
    showNope={true}

    handleYup={this.handleYup}
    handleNope={this.handleNope}
    cardRemoved={this.cardRemoved}
    />
    )
  }
})

import { MENU_BLUE, MENU_YELLOW, MENU_ORANGE } from '../constants/Colors'

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: MENU_ORANGE,
    backgroundColor: MENU_YELLOW,
    borderWidth: 2,
    elevation: 1,
  },
  thumbnail: {
    flex: 1,
    width: 300,
    height: 300,
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    color: MENU_BLUE
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
