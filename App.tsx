import { StatusBar} from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Header from './Components/Header';

const App =() => {
  return (
    <SafeAreaView style = {styles.container}>
      <Header title='shopping List'/>
    </SafeAreaView>
  
  

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    backgroundColor: '#e8e7e3'
  },
});
export default App