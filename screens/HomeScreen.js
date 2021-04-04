import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MyHeader from '../components/Header';

export default class HomeScreen extends React.Component{
  render() {
    return(
      <View style={{flex: 1, backgroundColor: '#31DF86'}}>
          <MyHeader title="Home"/>
          <View style={styles.innerContainer}>

          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    innerContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }
})