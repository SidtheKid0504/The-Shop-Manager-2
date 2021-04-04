import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class ShopListScreen extends React.Component{
  render() {
    return(
      <View style={styles.container}>
          <Text>Shop List Screen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#31DF86',
      alignItems: 'center',
      justifyContent: 'center',
    }
})