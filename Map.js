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
import MarkerTypes from './src/components/DraggableMap.js';
import Section from './src/components/Section';
import Header from './src/components/header';

const styles = {
  viewStyle: {
    paddingTop: 10,
  }
};

export default class Map extends Component<{}> {
  static navigationOptions = { title: 'Welcome', header: null };
  render() {
    return (
      <View style = {styles.viewStyle}>
      <Section>
      <Header headerText = {'Crime Evader'} />
      </Section>
      <Section>
      <MarkerTypes />
      </Section>
      </View>
    );
  }
}
