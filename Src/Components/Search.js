import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

class Search extends Component {
  constructor(props) {
    super(props);
  }

  handleOnChange = (newLocation) => {
    this.props.newLocation= newLocation
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          autoCorrect={false}
          placeholder={this.props.placeholder}
          placeholderTextColor="white"
          underlineColorAndroid="tranparent"
          style={styles.textInput}
          clearButtonMode="always"
          onChangeText={this.handleOnChange.bind(this)}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: 40,
    marginTop: 20,
    backgroundColor: '#666',
    marginHorizontal: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  textInput: {
    flex: 1,
    width:100,
    color: 'white'
  }
})

export default Search;