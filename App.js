/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TouchableHighlight, ScrollView } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import SingleTimming from './src/screen/SingleTiming';
import MultipleTiming from './src/screen/MultipleTiming';
import Spring from './src/screen/Spring';
import Parralel from './src/screen/Parralel';
import Sequence from './src/screen/Sequence';
import Stagger from './src/screen/Stagger';
import LoveButton from './src/screen/LoveButton';
import CollapseToolbar from './src/screen/CollapseToolbar';
import ScrollableHeader from './src/screen/ScrollableHeader';
import AnimFlatlist from './src/screen/AnimFlatlist';
import Flix from './src/screen/Flix';
import DecayEx from './src/screen/DecayEx';
import SwipeScreen from './src/screen/SwipeScreen';
import LayoutAnimationEx from './src/screen/LayoutAnimationEx';
import DragEx from './src/screen/DragEx';
import Football from './src/screen/Football';

console.disableYellowBox = true;
type Props = {};

class HomeScreen extends Component<Props> {
  
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text 
          style={styles.textView}
          onPress={() => this.props.navigation.navigate('SingleTimming')}>
          SingleTimming
        </Text>
        <Text 
          style={styles.textView}
          onPress={() => this.props.navigation.navigate('MultipleTiming')}>
          MultipleTiming
        </Text>
        <Text 
          style={styles.textView}
          onPress={() => this.props.navigation.navigate('Spring')}>
          Spring
        </Text>
        <Text 
          style={styles.textView}
          onPress={() => this.props.navigation.navigate('Parralel')}>
          Parralel
        </Text>
        <Text 
          style={styles.textView}
          onPress={() => this.props.navigation.navigate('Sequence')}>
          Sequence
        </Text>
        <Text 
          style={styles.textView}
          onPress={() => this.props.navigation.navigate('Stagger')}>
          Stagger
        </Text>
        <Text 
          style={styles.textView}
          onPress={() => this.props.navigation.navigate('LoveButton')}>
          LoveButton
        </Text>
        <Text 
          style={styles.textView}
          onPress={() => this.props.navigation.navigate('CollapseToolbar')}>
          CollapseToolbar
        </Text>
        <Text 
          style={styles.textView}
          onPress={() => this.props.navigation.navigate('ScrollableHeader')}>
          ScrollableHeader
        </Text>
        <Text 
          style={styles.textView}
          onPress={() => this.props.navigation.navigate('AnimFlatlist')}>
          AnimFlatlist
        </Text>
        <Text 
          style={styles.textView}
          onPress={() => this.props.navigation.navigate('DecayEx')}>
          DecayEx
        </Text>
        <Text 
          style={styles.textView}
          onPress={() => this.props.navigation.navigate('Flix')}>
          Flix
        </Text>
        <Text 
          style={styles.textView}
          onPress={() => this.props.navigation.navigate('Swipeable')}>
          Swipeable
        </Text>
        <Text 
          style={styles.textView}
          onPress={() => this.props.navigation.navigate('LayoutAnimationEx')}>
          LayoutAnimationEx
        </Text>
        <Text 
          style={styles.textView}
          onPress={() => this.props.navigation.navigate('DragEx')}>
          DragEx
        </Text>
        <Text 
          style={styles.textView}
          onPress={() => this.props.navigation.navigate('Football')}>
          Football
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5
  },
  textView: {
    width: '100%',
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'green'
  }
});

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      header: null
    }),
  },

  Football: {
    screen: Football,
    navigationOptions: () => ({
      headerTitle: 'Football',
    }),
  },

  SingleTimming: {
    screen: SingleTimming,
    navigationOptions: () => ({
      headerTitle: 'SingleTimming',
    }),
  },

  MultipleTiming: {
    screen: MultipleTiming,
    navigationOptions: () => ({
      headerTitle: 'MultipleTiming',
    }),
  },

  Spring: {
    screen: Spring,
    navigationOptions: () => ({
      headerTitle: 'Spring',
    }),
  },

  Parralel: {
    screen: Parralel,
    navigationOptions: () => ({
      headerTitle: 'Parralel',
    }),
  },

  Sequence: {
    screen: Sequence,
    navigationOptions: () => ({
      headerTitle: 'Sequence',
    }),
  },

  Stagger: {
    screen: Stagger,
    navigationOptions: () => ({
      headerTitle: 'Stagger',
    }),
  },

  LoveButton: {
    screen: LoveButton,
    navigationOptions: () => ({
      headerTitle: 'LoveButton',
    }),
  },

  CollapseToolbar: {
    screen: CollapseToolbar,
    navigationOptions: () => ({
      headerTitle: 'CollapseToolbar',
    }),
  },

  ScrollableHeader: {
    screen: ScrollableHeader,
    navigationOptions: () => ({
      headerTitle: 'ScrollableHeader',
    }),
  },

  AnimFlatlist: {
    screen: AnimFlatlist,
    navigationOptions: () => ({
      headerTitle: 'AnimFlatlist',
    }),
  },

  Flix: {
    screen: Flix,
    navigationOptions: () => ({
      headerTitle: 'Flix',
    }),
  },

  DecayEx: {
    screen: DecayEx,
    navigationOptions: () => ({
      headerTitle: 'DecayEx',
    }),
  },

  Swipeable: {
    screen: SwipeScreen,
    navigationOptions: () => ({
      headerTitle: 'Swipeable',
    }),
  },

  LayoutAnimationEx: {
    screen: LayoutAnimationEx,
    navigationOptions: () => ({
      headerTitle: 'LayoutAnimationEx',
    }),
  },

  DragEx: {
    screen: DragEx,
    navigationOptions: () => ({
      headerTitle: 'DragEx',
    }),
  },
});

export default createAppContainer(AppNavigator);