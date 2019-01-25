import React, { Component } from 'react'
import { Animated, Text, View, StyleSheet } from 'react-native'

export class Ball extends Component {
  constructor(props) {
    super(props)
  
    this.position = new Animated.ValueXY();
  }
  
  componentDidMount = () => {
    Animated.spring(this.position, {
      toValue: { x: 200, y: 500 }
    }).start()
  }
  
  render() {
    return (
      <Animated.View style={this.position.getLayout()}>
        <View style={styles.ball} />
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  ball: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 30,
    borderColor: 'black'
  },
});
export default Ball
