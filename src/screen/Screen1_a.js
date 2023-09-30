import { View, Text, Image, StyleSheet, StatusBar, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const Screen1_a = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/ellipse.png')} style={{ width: 140, height: 140, marginTop: 69 }} />
            <View>
                <Text style={styles.text1}>GROW</Text>
                <Text style={styles.text1}>YOUR BUSINESS</Text>
            </View>
            <Text style={styles.text2}>We will help you to grow your business using
                online server</Text>
            <StatusBar style="auto" />
            <View style={{ flexDirection: 'column' }}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text3}>LOG IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text3}>SIGN UP</Text>
                    </TouchableOpacity>

                </View>
                <Text style={styles.text4}>
                    HOW WE WORK?
                </Text>
            </View>


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
        height: height
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
        fontWeight: '700',
        textAlign: 'center'
    },
    text2: {
        fontFamily: 'Roboto',
        fontSize: 15,
        fontWeight: '700',
        textAlign: 'center',
        marginHorizontal: 29
    },
    text3: {
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: '700',
    },
    text4: {
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 69,
        marginTop: 20
    }
});

export default Screen1_a