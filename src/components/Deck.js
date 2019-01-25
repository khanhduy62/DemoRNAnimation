import React, { Component } from 'react'
import { 
  View, 
  Animated, 
  Platform, 
  PanResponder,
  Dimensions,
  StyleSheet,
  LayoutAnimation,
  UIManager
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.4 * SCREEN_WIDTH;

export class Deck extends Component {
  constructor(props) {
    super(props)

    this.position = new Animated.ValueXY();
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        this.position.setValue({ x: gesture.dx, y: gesture.dy })
      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          this.forceSwipe('right');
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          this.forceSwipe('left')
        } else {
          this.resetPosition();
        }
      }
    });

    this.state = {
      index: 0
    }

  }

  componentWillUpdate = (nextProps, nextState) => {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    LayoutAnimation.spring();

  }
  
  componentWillReceiveProps = (nextProps) => {
    if (nextProps.data !== this.props.data) {
      this.setState({ index: 0 });
    }
  }
  
  forceSwipe = (direction) => {
    const width = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH; 
    Animated.timing(this.position, {
      toValue: { x: width , y: 0 },
      duration: 500
    }).start(() => {
      this.onSwipComplete(direction);
    })
  }

  onSwipComplete = (direction) => {
    const { onSwipeRight, onSwipeLeft, data } = this.props;
    const item = data[this.state.index];

    direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item);
    this.position.setValue({ x: 0, y: 0 })
    this.setState({ index: this.state.index + 1 })
  }

  resetPosition = () => {
    Animated.spring(this.position, {
        toValue: { x: 0, y: 0 }
      }
    ).start()
  }

  getCardStyle = () => {
    const { position } = this;
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH, 0, SCREEN_WIDTH],
      outputRange: ['-120deg', '0deg', '120deg']
    })
    return {
      ...position.getLayout(),
      transform: [{ rotate }]
    }
  }

  renderCards = () => {
    if (this.state.index >= this.props.data.length) {
      return this.props.renderNoMoreCards();
    }

    return this.props.data.map((item, index) => {
      if (index < this.state.index) return null;
      if (index === this.state.index) {
        return (
          <Animated.View
            key={index}
            style={[this.getCardStyle(), styles.cardStyle]}
            {...this.panResponder.panHandlers}
          >
            {this.props.renderCard(item)}
          </Animated.View>
        )
      }
      return (
        <Animated.View 
          key={item.id}
          style={[styles.cardStyle, { top: 10 * (index - this.state.index)}]}
        >
          {this.props.renderCard(item)}
        </Animated.View>
      )
    }).reverse()
  }

  render() {
    return (
      <View>
        {this.renderCards()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cardStyle: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
  }
});

export default Deck
