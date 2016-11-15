import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
  Animated,
  Easing,

  Navigator,
  ScrollView,
  ListView,
  TouchableHighlight,

  Alert,
  TouchableWithoutFeedback,
} from 'react-native';

// Todo - create images files
import img_bro_fist from "../bro-fist.png";
import img_back from "../back.png";
import _style from "./style/layout";

// Todo move to separate file
class Menu extends Component {

  navBack() {
    if (this.props.route.index === 0) { return; }
    this.props.navigator.jumpBack();
  }

  navForward() {
    if (this.props.route.index >= 3) { return; }
    this.props.navigator.jumpForward();
  }

  render() {
    return (
    <View>
      <View style={_style.upperLip}/>
      <View style={_style.upperLip2}/>
      <View style={_style.containerBlock}>
        <View style={_style.leftBlock}>
          <TouchableWithoutFeedback onPress={() => {this.navBack()}}>
            <Image style={_style.broImage} source={img_back}/>
          </TouchableWithoutFeedback>
        </View>
        <View style={_style.middleBlock}>
          <Text style={_style.fancyText}>
            BROfist!
          </Text>
        </View>
        <View style={_style.rightBlock} >
          <TouchableWithoutFeedback onPress={() => {this.navForward()}}>
            <Image style={_style.broImage} source={img_bro_fist}/>
          </TouchableWithoutFeedback>
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

class NavMenuItem extends Component {

  constructor(props) {
    super(props);

    this.animSize = new Animated.Value(77);
    this.animSizeToggle = 0;

    this.animSizeOut = Animated.timing(this.animSize, {
      toValue: 300,
      duration: 1000,
      easing: Easing.linear
    })

    this.animSizeIn = Animated.timing(this.animSize, {
      toValue: 77,
      duration: 1000,
      easing: Easing.bounce
    })
  }

  navigate() {
    var self = this;

    function resolveAfter2Seconds(x) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(x);
        }, 1000);
      });
    }

    async function waitBeforeAnimation() {
      await resolveAfter2Seconds(true);
      Alert.alert('', 'async waited for a second or two');
      self.animSizeOut.start();
    }

    waitBeforeAnimation();
  }

  displayText() {
    return( this.props.text ? this.props.text + "  " : "" );
  }

  render() {
    const asdf = { width: this.animSize };

    return (
    <View style={_style.navContainer}>
      <View style={_style.navLeftBlock}>
      </View>
      <ScrollView>
        <View style={_style.navLeftBlock}>
          <Animated.Text style={ [ _style.text,
                        _style.text_padding,
                        asdf ] }
                        onPress={ (evt) => this.navigate(evt) }>
            { this.displayText() }
          </Animated.Text>
        </View>
      </ScrollView>
    </View>
    );
  }
};

class Navbar extends Component {

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.subDropDownNavMenu()),
    };
  }

  subDropDownNavMenu() {
    return(
      [ <NavMenuItem url={"/somewhere_over_the_rainbow"} text={"   -1- ListView TODO Navigation Start"}/>,
        <NavMenuItem text={"   -2- wow"}/>,
        <NavMenuItem text={"   -3- cools"}/>
      ]
    );
  }

  render() {
    return (
    <View>
      <NavMenuItem url={"/somewhere_over_the_rainbow"} text={"Menu ScrollView"}  />
      <NavMenuItem text={"TODO"}/>
      <NavMenuItem text={"Animate on hover"}/>

      <ListView
      dataSource={this.state.dataSource}
      renderRow={(rowData) => <Text>{rowData}</Text>}
      />
    </View>
    );
  }
};

function fullscene2() {
  return (
  <View>
    <Navbar/>
    <FillArea/>
  </View>
  )
}

function fullscene() {
  return (
  <View style={{padding: 20}}>
    <Navbar/>
    <FillArea/>
  </View>
  )
}

// TODO stick this in the route.js
const routes = [
  {title: 'First Scene', content: fullscene(), index: 0},
  {title: 'Second Scene', content: fullscene2(), index: 1},
  {title: '3 Scene', index: 3},
  {title: '4 Scene', index: 2}
];

class GestureHandler extends TouchableWithoutFeedback {

// todo
}

class baseLayout extends Component {

  fancy(param) {
    return param
  }

  naviMenu() {
    Alert.alert('', 'coral beans');
  }

  handlePress(evt) {
    console.log(`x ${evt.nativeEvent.locationX} y ${evt.nativeEvent.locationY}`);

    Alert.alert('Alert Title', 'My Alert Msg', [{
      text: `x ${evt.nativeEvent.locationX} y ${evt.nativeEvent.locationY}`,
      onPress: () => console.log('Ask me later pressed')
    }, {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'}, {
      text: 'OK',
      onPress: () => console.log('OK Pressed')
    },])
  }

  handleRoute(route, navigator) {
    return (
    <View>
      <Menu navigator={navigator} route={route}/>
      {route.content}
    </View>
    );
  }

  render() {
    return (
    //<TouchableWithoutFeedback onPress={(evt) => this.handlePress(evt) }>

    <View>
      <View style={_style.base}>
        <Navigator
          initialRouteStack={routes}
          initialRoute={routes[3]}
          renderScene={this.handleRoute}
        />
      </View>
    </View>

    //</TouchableWithoutFeedback>
    );
  }
};

export default baseLayout










