/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import SingleTimming from './src/components/SingleTiming';
import MultipleTiming from './src/components/MultipleTiming';
import Spring from './src/components/Spring';
import Parralel from './src/components/Parralel';
import Sequence from './src/components/Sequence';
import Stagger from './src/components/Stagger';
import LoveButton from './src/components/LoveButton';
import CollapseToolbar from './src/components/CollapseToolbar';
import ScrollableHeader from './src/components/ScrollableHeader';

console.disableYellowBox = true;
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <ScrollableHeader />
      </View>
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
