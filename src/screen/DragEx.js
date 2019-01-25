import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'

import Ball from '../components/Ball'
import Deck from '../components/Deck'

const DATA = [
  { id: 1, text: 'Card #1', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
];

export class DragEx extends Component {

  renderCard = (item) => {
    return (
      <View elevation={5} style={styles.card} key={item.id}>
        <Image
          style={{width: "100%", height: 70}}
          source={{uri: item.uri}}
        />
        <Text style={styles.textStyle}>{item.text}</Text>
        <TouchableOpacity
          style={styles.btnViewStyle}>
          <Text style={{ textAlign: 'center', lineHeight: 30 }}>View Now!</Text>
        </TouchableOpacity>
      </View>
    )
  }

  onSwipeRight = (item) => {
  }

  onSwipeLeft = (item) => {
  }

  renderNoMoreCards = () => {
    return (
      <View elevation={5} style={styles.card}>
        <Text style={styles.textStyle}>There`s no more content here!</Text>
        <TouchableOpacity
          style={[styles.btnViewStyle, { marginTop: 20 }]}>
          <Text style={{ textAlign: 'center', lineHeight: 30 }}>Get more!</Text>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Deck
          data={DATA}
          onSwipeRight={this.onSwipeRight}
          onSwipeLeft={this.onSwipeLeft}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}></Deck>
      </View>
    )
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  textStyle: {
    color: '#FFFFFF'
  },
  card: {
    minHeight: 120,
    backgroundColor: '#2E9298',
    borderRadius: 5,
    marginTop: 20,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
  },
  btnViewStyle: {
    width: '70%',
    alignSelf: 'center',
    backgroundColor: '#F4A460',
    borderRadius: 5
  }
});

export default DragEx
