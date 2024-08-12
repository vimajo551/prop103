import React from 'react'; 
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import WelcomeScreen from './Screens/WelcomeScreen';
import { AppTabNavigator } from './components/AppTabNavigator';


export default class App extends React.Component{
  render(){
    return <AppContainer/>;   
  } 
}  
 
const switchNavigator = createSwitchNavigator({
  WelcomeScreen: { screen: WelcomeScreen },  
  AppTabNavigator: { screen: AppTabNavigator },    
});
  
const AppContainer = createAppContainer(switchNavigator);            