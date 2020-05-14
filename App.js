/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component, useState} from 'react';
import {Platform, StyleSheet, Text, View, Button, ScrollView,TextInput} from 'react-native';
import { getStockMonthlyUpdates } from './utils/api';
import { stockDetailsCard } from './components/stockDetails';
/*
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
*/

/*type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}
*/


export default function App(){
  //const [count, setCount ]= useState(0)
  //const [showPanel, setShowPanel]= useState(false);
   const [stockName, updateStockName] = useState('');
   const [stockData, updateStockData]= useState([]);
   const [searchStart, updateSearchStart]=useState(false);
   const [searchError, updateSearchError]=useState(false);
   const [monthList, updateMonthList]=useState([]);

  function renderStockMonthlyUpdates(userSearch){
    //updateSearchError(false);
    //updateSearchStart(true);
    updateStockName(userSearch);
    var responseStockData=getStockMonthlyUpdates(userSearch);
    console.log('FRONT ---')
    console.log(responseStockData);
     // updateStockData();
      if(responseStockData["Error Message"]!= undefined){
         // updateSearchError(true);

      }else{
         // updateSearchError(false);
          var _monthlySeries=responseStockData["Monthly Time Series"];
          var _monthList=[];
          for(var key in _monthlySeries){
             _monthList.push(key);
          }
          console.log(_monthList);
          //console.error(_monthlySeries);
          updateMonthList(_monthList);
          updateStockData(responseStockData["Monthly Time Series"]);
          console.log(stockData);
      }
  }

  return(
    <View style={styles.container}>
      <ScrollView style={{width:'100%'}}>
      <Text style={styles.header}>Stock Monthly Information</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          multiline={false}
          placeholder="Search for stock eg: AMZN, MSFT"
          value={stockName}
          onChangeText={userSearch =>renderStockMonthlyUpdates(userSearch)}
        />
      </View>
   <Text style={{color:'red'}}>Cannot find: {stockName} Monthly Time Series, 
  make sure you entered a correct stock name</Text>
  
  
    {monthList.map(item =>(
      <stockDetailsCard month={item} volume={stockData[item]["5. volume"]} open={stockData[item]["1. open"]} high={stockData[item]["2. high"]} low={stockData[item]["3. low"]} close={stockData[item]["4. close"]} />
    ))}
  
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f6f6f6',
  },
  header: {
		marginTop: '15%',
		fontSize: 20,
		color: '#008080',
		paddingBottom: 10
	},
	textInputContainer: {
		flexDirection: 'row',
		alignItems: 'baseline',
		borderColor: 'black',
		borderBottomWidth: 1,
		paddingRight: 10,
		paddingBottom: 10
	},
	textInput: {
		flex: 1,
		height: 20,
		fontSize: 18,
		fontWeight: 'bold',
		color: 'black',
		paddingLeft: 10,
		minHeight: '3%'
	},
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  timerContainer:{
    backgroundColor: 'white',
    borderColor:'#d6d7da',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginBottom:0,
},
title:{
    fontSize:14,
    fontWeight: 'bold',
},
elapsedTime:{
    fontSize: 26,
    fontWeight: 'bold',
    textAlign:'center',
    paddingVertical: 15,
},
buttonGroup:{
    flexDirection: 'row',
    justifyContent: 'space-between',
},
});
