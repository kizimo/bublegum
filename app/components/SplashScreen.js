import React from 'react';
import { View, Text } from 'react-native';

const FIVE_SECONDS = 5000;

export default class SplashScreen extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Landing');
    }, FIVE_SECONDS);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>Splash</Text>
      </View>
    );
  }
}