import * as React from 'react';
import { Text, View } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import SplashScreen from './components/SplashScreen';
import LandingScreen from './components/LandingScreen';


const AppNavigator = createSwitchNavigator({
  Landing: LandingScreen,
  Splash: SplashScreen
}, {
  initialRouteName: 'Splash'
});

export default createAppContainer(AppNavigator);