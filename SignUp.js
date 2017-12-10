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


const signUpUrl = 'http://localhost:8080';

export default class SignUp extends Component<{}> {
  static navigationOptions = { title: 'Welcome', header: null };
  constructor(props) {
      super(props);
      this.state = {
        loggedIn: false,
        username: null,
        password: null,
        email: null,
        phone: null,
      }};

  _signUp() {
    var myInit = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        phone: this.state.phone,
    })}

    fetch(signUpUrl, myInit)
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
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <BackgroundImage>
        <Text style={styles.nameTitle}>Name</Text>
        <TextInput style={styles.name} autoCapitalize="none" placeholder="Username" onChangeText={(text) => this.setState({username: text})}/>
        <Text style={styles.emailTitle}>Email</Text>
        <TextInput style={styles.email}  placeholder="Email" onChangeText={(text) => this.setState({email: text})}/>
        <Text style={styles.passwordTitle}>Password</Text>
        <TextInput style={styles.password} secureTextEntry={true} autoCapitalize="none" placeholder="Password" onChangeText={(text) => this.setState({password: text})}/>
        <Text style={styles.phoneTitle}>Phone</Text>
        <TextInput style={styles.phone} placeholder="Phone" onChangeText={(text) => this.setState({phone: text})}/>
        <TouchableOpacity
          style={styles.signUp}
          onPress={() => {
            this._signUp();
          }}>
        <Text style={{textAlign: 'center',color: '#FFFFFF',}}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signIn}
          onPress={() => {
            navigate('Login');
          }}>
        <Text style={{textAlign: 'center',color: '#FFFFFF50',fontSize: 11,}}>Already have an account?
          <Text style={{textAlign: 'center',color: '#FFFFFF',fontSize: 11,}}>    Sign In</Text>
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
      <ImageBackground source={require('./resources/signup.png')} style={styles.backgroundImage}>
        {this.props.children}
      </ImageBackground>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  nameTitle: {
    fontSize: 12,
    color: '#FFFFFF',
    backgroundColor: 'rgba(0,0,0,0)',
    left: 63,
    top: 225,
  },
  name: {
    fontSize: 15,
    left: 63,
    top: 245,
  },

  emailTitle: {
    fontSize: 12,
    color: '#FFFFFF',
    backgroundColor: 'rgba(0,0,0,0)',
    left: 63,
    top: 270,
  },
  email: {
    fontSize: 15,
    left: 63,
    top: 290,
  },

  passwordTitle: {
    fontSize: 12,
    color: '#FFFFFF',
    backgroundColor: 'rgba(0,0,0,0)',
    left: 63,
    top: 310,
  },
  password: {
    fontSize: 15,
    left: 63,
    top: 330,
  },

  phoneTitle: {
    fontSize: 12,
    color: '#FFFFFF',
    backgroundColor: 'rgba(0,0,0,0)',
    left: 63,
    top: 355,
  },
  phone: {
    fontSize: 15,
    left: 63,
    top: 375,
  },

  backgroundImage: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  signUp: {
    height: 20,
    top: 430,
    backgroundColor: 'rgba(256,256,256,0)',
  },
  signIn: {
    height: 20,
    top: 465,
    backgroundColor: 'rgba(256,256,256,0)',
  },
  });
