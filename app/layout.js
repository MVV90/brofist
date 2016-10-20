import React, { Component } from 'react';
import {
  Image,
  Text,
  Animated,
  View
} from 'react-native';

// Todo - create images files
import img_bro_fist from "../bro-fist.png";
import _style from "./style/layout";

// Todo move to separate file
class Menu extends Component {
  render() {
    return (
    <View>
      <View style={_style.upperLip}/>
      <View style={_style.upperLip2}/>
      <View style={_style.containerBlock}>
        <View style={_style.leftBlock}/>
        <View style={_style.middleBlock}>
          <Text style={_style.fancyText}>
            BROfist!
          </Text>
        </View>
        <View style={_style.rightBlock}>
          <Image style={_style.broImage} source={img_bro_fist}/>
        </View>
      </View>
      <View style={_style.lowerLip}/>
    </View>
    );
  }
};

import Cards from './components/cards';
// Todo move to separate file
class FillArea extends Component {
  render() {
    return <Cards/>
  }
};

class baseLayout extends Component {

  fancy(param) {
    return param
  }

  displayFancy() {
    this.style = {color: 0x004358FF}
  }

  render() {
    return (
    <View style={_style.base}>
      <Menu/>
      <Text onPress={this.displayFancy}>{this.fancy(666)} != {this.props.fancy}</Text>
      <FillArea/>
    </View>
    );
  }
};

export default baseLayout
