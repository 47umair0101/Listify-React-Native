import React from 'react';
import {TouchableOpacity, Image, View} from 'react-native';
import {styles} from './styles';

const Checkbox = ({checked, onChecked}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => onChecked(!checked)}
      style={styles.container}>
      {checked ? (
        <View style={styles.innerContainer}>
          <Image
            style={styles.checkIcon}
            source={require('../../assets/check.png')}
          />
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default React.memo(Checkbox);
