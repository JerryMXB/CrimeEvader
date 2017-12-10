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


export default class Map extends Component<{}> {
  static navigationOptions = { title: 'Welcome', header: null };
  render() {
    return (
      <View>
        <Text style={{top:30}}>This is Map</Text>
      </View>
    );
  }
}
