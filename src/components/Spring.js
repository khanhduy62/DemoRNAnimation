import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  Image
} from 'react-native'

export class Spring extends Component {
  constructor () {
    super()
    this.springValue = new Animated.Value(0.3)
  }
  spring () {
    this.springValue.setValue(0.3)
    Animated.spring(
      this.springValue,
      {
        toValue: 1,
        friction: 1,
        tension: 1,
        // speed: 1,
        // bounciness: 1
      }
    ).start()
  }
  render () {
    return (
      <View style={styles.container}>
        <Text style={{marginBottom: 100}} onPress={this.spring.bind(this)}>Spring</Text>
        <Animated.Image
          style={{ width: 227, height: 200, transform: [{scale: this.springValue}] }}
          source={require('../assets/images/photo.jpg')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Spring
