import React, { Component } from 'react';
import Search from './Src/Components/Search';
import getImageForWeather from './utils/getImageForWeather'

import { StyleSheet, View, Text, KeyboardAvoidingView, ImageBackground } from 'react-native';
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const loction='san Francisco'
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ImageBackground
          source={getImageForWeather('Clear')}
          style={styles.imageContainer}
          imageStyle={styles.image}
        >
          <View style={styles.detailsContainer}>
            <Text style={[styles.largeText, styles.textStyle]}>
              {location}</Text>
            <Text style={[styles.smallText, styles.textStyle]}>
              Light Cloud</Text>
            <Text style={[styles.largeText, styles.textStyle]}>24°</Text>
            <SearchInput placeholder="Search any city" />
          </View>
        </ImageBackground>

      </KeyboardAvoidingView>

    );
  }
}

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#fff',
    justifyContent: "center"
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: 'AvenirNext-Regular',
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 10
  },
  textInput: {
    backgroundColor: '#666',
    color: 'white',
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: 'center'
  },
  imageContainer: {
    flex: 1,
    
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode:'cover'
  },
  detailsContainer: {
    flex: 1,
    justifyContent:'center',
    backgroundColor: rgb(0, 0, 0, 0.2),
    paddingHorizontal:20,
    
  }
})

export default App;


