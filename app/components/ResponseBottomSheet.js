import React from 'react';
import type {Node} from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

const ResponseBottomSheet: () => Node = ({ref}) => {
  return (
    <RBSheet
      ref={ref}
      height={300}
      openDuration={250}
      customStyles={{
        container: {
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}>
      {/* <YourOwnComponent /> */}
    </RBSheet>
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

export default ResponseBottomSheet;
