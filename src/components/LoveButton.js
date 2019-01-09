import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Animated, Dimensions } from 'react-native';

const { height } = Dimensions.get('window')

class LoveButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      loves: []
    };
  }

  animationComplete = (countNum) => {
    let loves = this.state.loves;
    loves.splice(loves.indexOf(countNum), 1);

    this.setState({loves});
  }

  love = () =>{
    let count = this.state.count;
    let loves = this.state.loves;

    count++;

    loves.push(count)
    this.setState({count})
    
  }
  
  keepLoving = () => {
    this.loveTimer = setInterval(() => {
      this.love()
    }, 300)
  }

  stopLoving = () => {
    if (this.loveTimer) {
      clearInterval(this.loveTimer)
    }
  }

  renderLoves = () => {
    return this.state.loves.map(countNum => <LoveBubble  key={countNum} countNum={countNum} animationComplete={(countNum) => this.animationComplete(countNum)}/>)
  }

  render() {
    const love = this.state.count > 0 ? "Loved" : "Love"
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity
          onPress={() => this.love()}
          onPressIn={() => this.keepLoving()}
          onPressOut={() => this.stopLoving()}
          activeOpacity={0.7} 
          style={styles.loveButton}>
            <Text>{love}</Text>
        </TouchableOpacity>
        {this.renderLoves()}
        {/* <LoveBubble /> */}
      </View>
    );
  }
}

class LoveBubble extends Component {
  constructor(props) {
    super(props)
  
    this.yPosition= new Animated.Value(20),
    this.opacity= new Animated.Value(0)
  }

  componentDidMount = () => {
    const yPosition = Animated.spring(
      this.yPosition,
      {
        toValue: -80,
        friction: 3,
        tension: 1
      }
    );
    
    const delay = Animated.delay(500)
    const yPosition2 = Animated.timing(
      this.yPosition,
      {
        toValue: -height,
        duration: 400,
      }
    );

    const opacity = Animated.timing(
      this.opacity,
      {
        toValue: 1,
        duration: 300,
      }
    );
    Animated.stagger(150, [yPosition, opacity, delay, yPosition2]).start(()=>{
    });
    // Animated.parallel([yPosition, opacity]).start(()=>{
    //   yPosition2.start()
    //   setTimeout(()=>{
    //     this.props.animationComplete(this.props.countNum);
    //   }, 300)
    // });
  }
  
  render() {
    const animateionStyle = {
      transform: [{translateY: this.yPosition}],
      opacity: this.opacity
    }
    return (
        <Animated.View style={[styles.loveBubble , animateionStyle]}>
          <Text style={styles.loveText}>ae</Text>
        </Animated.View>
    )
  }
  
}

const styles = StyleSheet.create({
  loveButton: {
    position: 'absolute',
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: '#ecf0f1',
    bottom: 20,
    right: 10,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loveBubble: {
    position: 'absolute',
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: '#15a872',
    bottom: 20,
    right: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loveText: {
    color: 'white'
  }
})

export default LoveButton;
