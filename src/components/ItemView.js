import React, { Component } from 'react'
import { Text, View, Animated, Easing, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window');

export class ItemView extends Component {

  constructor(props) {
    super(props)
  
    this.opacity = new Animated.Value(0);
    this.scaleText = new Animated.Value(0.3);
    this.translate = new Animated.ValueXY({x: -width*2.5, y: 0});
    this.springValue = new Animated.Value(50)
  }
  

  componentDidMount = () => {
    this.animate()
  }
  
  animate = () => {
    const opacity = Animated.timing(
      this.opacity,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear
      }
    )

    const scaleText = Animated.timing(
      this.scaleText,
      {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear
      }
    )

    const translate = Animated.timing(
      this.translate,
      {
        toValue: {x: 0, y: 0},
        duration: 2000,
        easing: Easing.linear
      }
    )
    
    Animated.stagger(200, [opacity, scaleText, translate]).start()
  }
  render() {
    const { item } = this.props;
    return (
      <Animated.View 
        style= {{ 
          height: 40,
          justifyContent: 'center', 
          alignItems: 'center', 
          opacity: this.opacity,
          backgroundColor: 'red',
          marginTop: 5,
          transform: this.translate.getTranslateTransform()
      }}>
              <Animated.Text style={{ transform: [{scale: this.scaleText}]}} >{item.name.first} {item.name.last}</Animated.Text>
              <View
                style={{
                  height: 1,
                  backgroundColor: "#CED0CE",
                }}
              />
      </Animated.View>
    )
  }
}

export default ItemView
