import React from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Pressable,
  TouchableOpacity,
} from 'react-native';

const CustomButton: () => Node = ({text, onClick, disabled, style}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={{...styles.button, backgroundColor: disabled ? '#6392a6' : '#1be3e8', ...style}}
      onPress={onClick}>
      <Text style={{...styles.buttonText, ...style}}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 32,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  button: {
    // height: 16,
    backgroundColor: '#fff',
    padding: 16,
    color: '#3c6c81',
    borderRadius: 26,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: "bold"
  },
});

export default CustomButton;
