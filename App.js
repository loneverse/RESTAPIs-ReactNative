import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component() {
  state ={
    data: {'activity': 'loading...'} // json data recieved from the request
  }
  
  
  getJsonData = () => {
    fetch("http://www.boredapi.com/api/activity?type=recreational/",
    {method: 'GET'}).then((response) => response.json()).then((responseJson)=> {
      console.log(responseJson);
      this.setState({
        data: responseJson
      })
    })  
    .catch((error)=> {
      console.error(error)
    })
  }

  useEffect = (() =>{
    this.getJsonData()
  });

  render(){
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20, 
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
