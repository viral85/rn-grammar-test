/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useRef, useEffect} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Options, {Option} from './app/components/Options';
import CustomButton from './app/components/CustomButton';
import RBSheet from 'react-native-raw-bottom-sheet';
import firestore from '@react-native-firebase/firestore';

const windowHeight = Dimensions.get('window').height;

const QUESTIONS = [
  {
    question: 'The house <space> small.',
    answer: 'is',
    options: ['am', 'is', 'are', 'was'],
  },
];

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const BSRef = useRef(null);
  const fetchData = async () => {
    const questions = await firestore().collection('questions').get();
    console.log({questions});
  };

  const [selectedOption, setSelectedOption] = useState('');
  const [isAnsTrue, setIsAnsTrue] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={'light-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.main}>
          <View>
            <Text style={styles.instruction}>Fill in the missing word</Text>
            <Text>
              <Text style={styles.question}>The house </Text>
              {selectedOption ? (
                <View>
                  <Option option={selectedOption} />
                </View>
              ) : (
                <View style={styles.space}></View>
              )}
              <Text style={styles.question}> small</Text>
            </Text>
            <Options
              options={QUESTIONS[0].options}
              selectedOption={selectedOption}
              onOptionClick={value => {
                setSelectedOption(value);
              }}
            />
          </View>
          <CustomButton
            text="Continue"
            disabled={!selectedOption}
            onClick={() => {
              if (selectedOption === QUESTIONS[0].answer) setIsAnsTrue(true);
              else setIsAnsTrue(false);
              BSRef.current.open();
            }}
          />
        </View>
      </ScrollView>

      <RBSheet
        ref={BSRef}
        height={200}
        openDuration={100}
        customStyles={{
          container: {
            ...styles.sheetContainer,
            backgroundColor: isAnsTrue ? '#1be3e8' : '#fe7b87',
          },
        }}>
        <View>
          <Text style={styles.infoText}>
            {isAnsTrue ? 'Great Job!' : `Answer: is`}
          </Text>
          <CustomButton
            text="Continue"
            style={{
              backgroundColor: '#fff',
              color: isAnsTrue ? '#1be3e8' : '#fe7b87',
            }}
          />
        </View>
      </RBSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#3c6c81',
    padding: 64,
    minHeight: '100%',
    justifyContent: 'space-between',
    height: windowHeight,
  },
  instruction: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
  question: {
    marginTop: 24,
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  sheetContainer: {
    backgroundColor: '#1be3e8',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 32,
  },
  infoText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  space: {
    width: 50,
    height: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff',
  },
});

export default App;
