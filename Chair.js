import React from 'react';
import {View, Text} from 'react-native';

class Chair extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      isBig: false,
    };
  }
  handleTextStyle = () => {
    this.setState({isBig: !this.state.isBig});
  };

  render() {
    console.log('Chiar => isBig ::', this.state.isBig);
    return (
      <View>
        <Text
          style={{fontSize: this.state.isBig ? 24 : 16}}
          onPress={this.handleTextStyle}>
          Hello, World!
        </Text>
      </View>
    );
  }
}

export default Chair;
