import React, { Component } from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
class Logo extends Component {
  state = {}
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 40,height: 70}}
          source={require('../images/logo.png')}/>
        <Text style={styles.logoText}> Welcome to SendBob App</Text>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoText: {
    fontSize: 18,
    justifyContent: 'center'
  }
})
export default Logo;


