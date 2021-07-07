import { StatusBar} from 'expo-status-bar';
import React,{useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Header from './Components/Header';
import AddItem, {MyItem} from './Components/Header'
const App =() => {
  const [shoppingList, setShoppingList] =useState<MyItem[]>([]) 
  
  return (

 
    <SafeAreaView style = {styles.container}>
      <Header title='shopping List'/>
     <View>
       <AddItem 
        setShoppingList ={setShoppingList}
        shoppingList ={shoppingList}
       
       />
     </View>
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