import { StyleSheet, Dimensions } from 'react-native'
import * as colors from '../constants/Colors'

// Todo - put in separate helper file
var width = Dimensions.get('window').width; // full width
var height = Dimensions.get('window').height; // full height

export default StyleSheet.create({

  text: {
    color: 'white',
  },

  text_padding: {
    left: 5,
    top: 5,
  },

  base: {
    width: width,
    height: height,
    backgroundColor: colors.MENU_BLUE
  },

  upperLip: {
    height: 20,
    backgroundColor: colors.MENU_YELLOW
  },
  upperLip2: {
    height: 2,
    backgroundColor: colors.MENU_ORANGE
  },
  lowerLip: {
    height: 2,
    backgroundColor: colors.MENU_ORANGE
  },

  containerBlock: {
    flex: 1,
    flexDirection: 'row'
  },
  leftBlock: {
    width: 50,
    height: 50,
    backgroundColor: colors.MENU_BLUE
  },
  rightBlock: {
    width: 50,
    height: 50,
    backgroundColor: colors.MENU_LT_GREEN
  },
  middleBlock: {
    flex: 1,
    height: 50,
    backgroundColor: colors.MENU_GREEN
  },

  fancyText: {
    fontFamily: 'Verdana',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },

  navContainer: {
    flexDirection: 'row',
    height: 25,
    width: 225,
    backgroundColor: colors.MENU_LT_GREEN
  },
  navLeftBlock: {
    flexDirection: 'row',
    height: 25,
    width: 25,
    backgroundColor: colors.MENU_GREEN
  },

  broImage: {
    left: 5,
    top: 5
  }
});
