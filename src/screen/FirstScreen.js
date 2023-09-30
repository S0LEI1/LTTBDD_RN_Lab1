import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar, Dimensions} from 'react-native'
import React from 'react'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const FirstScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/ellipse.png')} style={{ width: 140, height: 140 }} />
      <View>
        <Text style={styles.text1}>GROW</Text>
        <Text style={styles.text1}>YOUR BUSINESS</Text>
      </View>
      <Text style={styles.text2}>We will help you to grow your business using
        online server</Text>
      <StatusBar style="auto" />
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text3}>LOG IN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text3}>SIGN UP</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00CCF9',
      alignItems: 'center',
      justifyContent: 'space-around',
      width:width, 
      height:height
    },
    button: {
      width: 119,
      height: 48,
      backgroundColor: '#E3C000',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 29
    },
    text1: {
      fontFamily: 'Roboto',
      fontSize: 25,
      textAlign:'center',
      fontWeight:'700'
    },
    text2: {
      fontFamily: 'Roboto',
      fontSize: 15,
      textAlign:'center',
      marginHorizontal:29,
      fontWeight:'700'
    },
    text3: {
      fontFamily: 'Roboto',
      fontSize: 20,
      fontWeight:'700'
   
    }
  });
  
export default FirstScreen