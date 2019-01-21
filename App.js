/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import SingleTimming from './src/components/SingleTiming';
import MultipleTiming from './src/components/MultipleTiming';
import Spring from './src/components/Spring';
import Parralel from './src/components/Parralel';
import Sequence from './src/components/Sequence';
import Stagger from './src/components/Stagger';
import LoveButton from './src/components/LoveButton';
import CollapseToolbar from './src/components/CollapseToolbar';
import ScrollableHeader from './src/components/ScrollableHeader';
import AnimFlatlist from './src/components/AnimFlatlist';
import Flix from './src/components/Flix';
import DecayEx from './src/components/DecayEx';
import Swipeable from './src/components/Swipeable';

console.disableYellowBox = true;
type Props = {};

const leftContent = <Text>Pull to activate</Text>;

const rightButtons = [
  <TouchableHighlight><Text>Button 1</Text></TouchableHighlight>,
  <TouchableHighlight><Text>Button 2</Text></TouchableHighlight>
];

export default class App extends Component<Props> {
  
  render() {
    return (
      // <View style={styles.container}>
      //   <DecayEx />
      // </View>
      <Swipeable leftContent={leftContent} rightButtons={rightButtons}>
        <Text>asdsadsada</Text>
      </Swipeable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
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
