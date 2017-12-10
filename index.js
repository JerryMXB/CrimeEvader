import { AppRegistry } from 'react-native';
import App from './App';
import Login from './Login';
import SignUp from './SignUp'
import Map from './Map'
import { StackNavigator } from 'react-navigation';

const CrimeEvader = StackNavigator(
  {
    Login: { screen: Login },
    SignUp: { screen: SignUp },
    Map: { screen: Map },
  }
);


AppRegistry.registerComponent('CrimeEvader', () => CrimeEvader);
