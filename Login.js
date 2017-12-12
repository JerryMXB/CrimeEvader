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


// Login component
const loginUrl = 'http://192.168.1.163:8080';

export default class Login extends Component<{}> {
  static navigationOptions = { title: 'Welcome', header: null };
  constructor(props) {
      super(props);
      this.state = {
        loggedIn: false,
        username: null,
        password: null,
      }};

  _login () {
    const { navigate } = this.props.navigation;
    var myInit = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type:'login',
        username: this.state.username,
        password: this.state.password,
    })}

    fetch(loginUrl, myInit)
    .then((response) => (responseData = response.text()))
    .then((responseData) => {
      this.setState({loggedIn:true});
      if (responseData == 'Success') {
        navigate('Map');
      } else {
        Alert.alert('Password or Username Error');
      }
    }).done();
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <BackgroundImage>
        <Text style={styles.nameTitle}>Name</Text>
        <TextInput style={styles.name} autoCapitalize="none" placeholder="Username" onChangeText={(text) => this.setState({username: text})}/>
        <Text style={styles.passwordTitle}>Password</Text>
        <TextInput style={styles.password} secureTextEntry={true} placeholder="Password" onChangeText={(text) => this.setState({password: text})}/>
        <TouchableOpacity
          style={styles.signIn}
          onPress={() => {
            this._login();
          }}>
        <Text style={{textAlign: 'center',color: '#FFFFFF',}}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signUp}
          onPress={() => {
            navigate('SignUp');
          }}>
        <Text style={{textAlign: 'center',color: '#FFFFFF50',fontSize: 11,}}>Do not have an account?
          <Text style={{textAlign: 'center',color: '#FFFFFF',fontSize: 11,}}>    Sign up</Text>
        </Text>
        </TouchableOpacity>
      </BackgroundImage>
    );
  }
}

// Background Image component
class BackgroundImage extends Component {
  render() {
    return (
      <ImageBackground source={require('./resources/login.png')} style={styles.backgroundImage}>
        {this.props.children}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  name: {
    fontSize: 15,
    left: 63,
    top: 390,
  },
  password: {
    fontSize: 15,
    left: 63,
    top: 435,
  },
  nameTitle: {
    fontSize: 12,
    color: '#FFFFFF',
    backgroundColor: 'rgba(0,0,0,0)',
    left: 63,
    top: 370,
  },
  passwordTitle: {
    fontSize: 12,
    color: '#FFFFFF',
    backgroundColor: 'rgba(0,0,0,0)',
    left: 63,
    top: 415,
  },
  backgroundImage: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  signIn: {
    height: 20,
    top: 495,
    backgroundColor: 'rgba(256,256,256,0)',
  },
  signUp: {
    height: 20,
    top: 525,
    backgroundColor: 'rgba(256,256,256,0)',
  },
});
