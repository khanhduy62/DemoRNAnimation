import React, { Component } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import Swipeable from '../components/Swipeable';

const leftContent = <Text>Pull to activate</Text>;

const rightButtons = [
  <TouchableHighlight><Text>Button 1</Text></TouchableHighlight>,
  <TouchableHighlight><Text>Button 2</Text></TouchableHighlight>
];
export class SwipeScreen extends Component {
  render() {
    return (
      <Swipeable leftContent={leftContent} rightButtons={rightButtons} >
        <Text>SWIPE HERE</Text>
      </Swipeable>
    )
  }
}

export default SwipeScreen
