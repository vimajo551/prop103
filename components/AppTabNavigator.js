import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import LogInScreen from '../Screens/LogInScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import { Icon } from 'react-native-elements';


export const AppTabNavigator = createBottomTabNavigator({
  LogIn: {
    screen: LogInScreen,
    navigationOptions: {
      tabBarIcon: <Icon name="log-in" type="ionicon" color="green" />,
      tabBarLabel: 'Entrar',
    },
  },
  
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: {
      tabBarIcon: <Icon name="person-add" type="ionicon" color="green" />,
      tabBarLabel: 'Cadastre-se',
    }, 
  },
});
