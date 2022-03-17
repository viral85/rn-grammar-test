import React from 'react';
import type {Node} from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export const Option: () => Node = ({option, selectedOption, onOptionClick, noClick}) => {
  return (
    <Pressable
      style={
        selectedOption === option
          ? [styles.option, styles.selectedOption]
          : styles.option
      }
      onPress={!noClick ? () => onOptionClick(option) : null}>
      <Text
        style={
          selectedOption === option
            ? [styles.optionText, styles.selectedOption]
            : styles.optionText
        }>
        {option}
      </Text>
    </Pressable>
  );
};

const Options: () => Node = ({options, selectedOption, onOptionClick}) => {
  return (
    <View style={styles.main}>
      {options && options.length
        ? options.map((option, i) => (
            <Option key={i} option={option} selectedOption={selectedOption} onOptionClick={onOptionClick} />
          ))
        : null}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 32,
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
  option: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 28,
    color: '#3c6c81',
    borderRadius: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  optionText: {
    color: '#3c6c81',
    fontWeight: 'bold',
  },
  selectedOption: {
    backgroundColor: '#6392a6',
    color: '#6392a6',
  },
});

export default Options;
