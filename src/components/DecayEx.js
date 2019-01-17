import React, { Component } from 'react'
import { Text, View, Animated, TouchableOpacity } from 'react-native'

export class DecayEx extends Component {

  constructor(props) {
    super(props)
    
    this.anim = new Animated.ValueXY();
  }
  
  onAction = () => {
    Animated.decay(
      this.anim,
      { 
        velocity: {x: 50, y:0},
        deceleration: 0.2
      }
    ).start()
  }

  render() {
    return (
        <TouchableOpacity onPress={this.onAction} style={{ backgroundColor: 'red', width: 100 }} >
          <Animated.Text style={this.anim.getLayout()}> Click here to start animation </Animated.Text>
        </TouchableOpacity>
    )
  }
}

export default DecayEx
