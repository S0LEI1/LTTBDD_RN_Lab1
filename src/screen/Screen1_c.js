import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const Screen1_c = () => {
    return (
        <View style={styles.container}>
            <Text style={[styles.text1]}>CODE</Text>
            <Text style={styles.text2}>VERIFICATION</Text>
            <View style={{justifyContent:'center', alignItems:'center'}}>
                <Text style={styles.text3}>Enter ontime password sent on ++849092605798</Text>
                <View style={styles.wrapper}>
                    <TextInput keyboardType="numeric" style={styles.textInput} />
                    <TextInput keyboardType="numeric" style={styles.textInput} />
                    <TextInput keyboardType="numeric" style={styles.textInput} />
                    <TextInput keyboardType="numeric" style={styles.textInput} />
                    <TextInput keyboardType="numeric" style={styles.textInput} />
                    <TextInput keyboardType="numeric" style={styles.textInput} />
                </View>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text>
                    VERIFY CODE
                </Text>
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
        width: width,
        height: height,
    },
    wrapper: {
        flexDirection: 'row',
        width: 300,
        height: 50,

    },
    button: {
        backgroundColor: '#E3C000',
        width: 305,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 200
    },
    textInput: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: '#000000'
    },
    text1: {
        fontFamily: 'Roboto',
        fontSize: 60,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 100
    },
    text2: {
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
    },
    text3: {
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom:20
    }
})
export default Screen1_c