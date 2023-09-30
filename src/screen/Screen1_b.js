import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, StatusBar, Dimensions } from 'react-native';
import React from 'react'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const Screen1_b = () => {
  return (
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Image source={require('../../assets/lock.png')} resizeMode='stretch' style={styles.img} />
          <View>
            <Text style={styles.text1}>FORGET </Text>
            <Text style={styles.text1}>PASSWORD</Text>
          </View>
          <View style={{marginHorizontal: 30}}>
            <Text style={styles.text2}>
              Provide your account’s email for which you want to reset your password
            </Text>
            <View style={styles.wrapper}>
              <Image style={{ width: 48, height: 45 }} source={require('../../assets/mail.png')} resizeMode='stretch' />
              <TextInput placeholder='Email' />
            </View>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text>Next</Text>
          </TouchableOpacity>
        </View>
      
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundImage: 'linear-gradient(180deg, #C7F4F7 0.03%, #D1F4F6 30.21%, #E5F4F5 85.42%, #00CCF9 100%)',
      alignItems: 'center',
      justifyContent: 'space-around',
      width:width,
      height:height
    },
    img: {
      width: 105,
      height: 117,
      marginTop: 0.1 * height
    },
    wrapper: {
      flexDirection: 'row',
      width: 305,
      height: 45,
      backgroundColor: '#C4C4C4',
      marginTop:0.5 ,
      marginHorizontal:30,
  
    },
    button: {
      backgroundColor: '#E3C000',
      width: 305,
      height: 45,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal:30,
      marginBottom:100
    },
    text1: {
      fontFamily: 'Roboto',
      fontSize: 25,
      fontWeight: '700',
      textAlign: 'center'
    },
    text2: {
      fontFamily: 'Roboto',
      fontSize: 15,
      fontWeight: '700',
      textAlign: 'center',
    }
  });
  
export default Screen1_b