import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, ActivityIndicator } from 'react-native'

import ItemView from './ItemView';

export class AnimFlatlist extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       error: null,
       data: [],
       loading: false
    }
  }
  

  componentDidMount = () => {
    this.makeRemoteRequest();
  }
  
  makeRemoteRequest = () => {
    const url = `https://randomuser.me/api/?seed=1&page=2&results=20`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.results,
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false, data: [{ "name": { "first": "Duy", "last": "Le"}}, { "name": { "first": "Duy", "last": "Le"}}, { "name": { "first": "Duy", "last": "Le"}}] });
      });
  };

  renderFooter = () => {
    if (!this.state.loading) return null;
    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: "#CED0CE",
        }}
      />
    );
  };

  render() {
    console.log("render ", this.state.loading)
    return (
      <View style={ styles.container }>
        { this.renderFooter() }
         <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ItemView item={item} />
          )}
          keyExtractor={item => item.email}
          // ItemSeparatorComponent={this.renderSeparator}
          ListFooterComponent={this.renderFooter}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40
  }
});

export default AnimFlatlist
