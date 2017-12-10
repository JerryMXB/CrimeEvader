import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ImageBackground,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';


export default class SignUp extends Component<{}> {
  static navigationOptions = { title: 'Welcome', header: null };
  render() {
    return (
      <View>
        <Text>Sign Up</Text>
      </View>
    );
  }
}
