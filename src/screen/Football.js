import React, { Component } from 'react'
import { 
  View,
  Text,
  Animated, 
  Platform, 
  PanResponder,
  Dimensions,
  StyleSheet,
  LayoutAnimation,
  UIManager
} from 'react-native';

export class Football extends Component {
  constructor(props) {
    super(props)

    this.position = new Animated.ValueXY();
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,

      onPanResponderMove: (event, gesture) => {
        this.position.setValue({ x: gesture.dx, y: gesture.dy })
        const xPosition = this.position.x._value;
        const yPosition = this.position.y._value;
        const { x, y, height, width, textHeight, textWidth } = this.state;

        if (xPosition >= x - textWidth/2 && xPosition <= width+x && yPosition >= y - textHeight/2 && yPosition <= y + height) {
          if (!this.state.isCorrect) {
            this.setState({
              isCorrect: true
            })
          }
        } else {
          if (this.state.isCorrect) {
            this.setState({
              isCorrect: false
            })
          }
        }
      },
      onPanResponderRelease: (event, gesture) => {
        const xPosition = this.position.x._value;
        const yPosition = this.position.y._value;
        const { x, y, height, width, textHeight, textWidth } = this.state;
        console.log(this.position.x._value)
        console.log(this.position.y._value)
        console.log(this.state)
        console.log()
        console.log("xPosition ", xPosition >= x - textWidth/2)
        if (xPosition >= x - textWidth/2 && xPosition <= width+x && yPosition >= y - textHeight/2 && yPosition <= y + height) {

        } else {
          this.resetPosition()
        }
        this.position.flattenOffset()
      }
    });

    this.state = {
      isCorrect: false,
      width: 0,
      height: 0,
      x: 0,
      y: 0,
      textWidth: 0,
      textHeight: 0
    }

  }

  resetPosition = () => {
    Animated.spring(this.position, {
        toValue: { x: 0, y: 0 }
      }
    ).start()
  }

  render() {
    console.log("object")
    return (
      <View style={styles.container} >
        <Animated.Text
          style={[this.position.getLayout()]}
          {...this.panResponder.panHandlers}
          onLayout={event => {
            const layout = event.nativeEvent.layout;
            this.setState({
              textWidth: layout.width,
              textHeight: layout.height,
            })
          }}
          > 
          textInComponent 
        </Animated.Text>
        <View style={styles.view} >
          <Text 
            onPress={() => {
                this.setState({isCorrect: false})
                this.resetPosition()
              }
            }
             onLayout={event => {
              const layout = event.nativeEvent.layout;
              this.setState({
                width: layout.width,
                height: layout.height,
                x: layout.x,
                y: layout.y
              })
            }}
            style={[styles.borderText, this.state.isCorrect && styles.convertBorder]} > ABC </Text>
          <Text style={[styles.borderText]}> DEF </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  view: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  borderText: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  convertBorder: {
    borderColor: 'green',
    borderWidth: 3,
  }
});

export default Football
