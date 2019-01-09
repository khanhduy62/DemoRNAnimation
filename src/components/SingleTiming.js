import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Easing
} from 'react-native'

const timing = 1000

export class SingleTiming extends Component {
  constructor () {
    super()
    this.spinValue = new Animated.Value(0)
  }
  componentDidMount () {
    console.log("did mount")
    this.spin()
  }
  spin = () => {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: timing,
        easing: Easing.linear
      }
    ).start(this.spin)
  }

  componentDidUpdate = (prevProps, prevState) => {
    console.log("did update")
  }
  
  render () {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    return (
      <View style={styles.container}>
        <Animated.Image
          style={{ width: 227, height: 200, transform: [{rotate: spin}] }}
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

export default SingleTiming
