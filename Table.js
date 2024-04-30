import React, {useState} from 'react';
import {View, Text} from 'react-native';

const Table = ({textColor}) => {
  const [isBig, setIsBig] = useState(false);
  handleTextStyle = () => {
    setIsBig(!isBig);
    console.log('Table => isBig ::', isBig);
  };
  return (
    <View>
      <Text
        style={{
          fontSize: isBig ? 24 : 16,
          color: textColor ? textColor : 'purple',
        }}
        onPress={handleTextStyle}>
        Table
      </Text>
    </View>
  );
};

export default Table;
