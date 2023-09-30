import { View, Text, StyleSheet, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const ScreenXMEye = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../assets/eyeball.png')} resizeMode='stretch' />
            <View>
                <View style={[styles.wrapper, styles.pwdTextInput]}>
                    <Image style={styles.img2} source={require('../../assets/user2.png')} resizeMode='stretch' />
                    <TextInput style={styles.textInput} placeholder='Please input your name' />
                </View>
                <View style={[styles.wrapper, styles.pwdTextInput]}>
                    <Image style={styles.img2} source={require('../../assets/lock2.png')} resizeMode='stretch' />
                    <TextInput style={styles.textInput} placeholder='Please input password' />
                    <TouchableOpacity>
                        <Image style={styles.img2} source={require('../../assets/eye.png')} resizeMode='stretch' />
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text3}>LOGIN</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <Text>Register</Text>
                    <Text>Forgot Password</Text>
                </View>
            </View>
            <View>
                <View style={styles.wrapperConnection}>
                    <View style={styles.connectionUnderlined}></View>
                    <Text style={styles.text2}>Other Login Methods</Text>
                    <View style={styles.connectionUnderlined}></View>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:30}}>
                    <TouchableOpacity style={styles.icon}>
                        <Image style={styles.img3} source={require('../../assets/add.png')} resizeMode='stretch' />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon}>
                        <Image style={styles.img3} source={require('../../assets/wifi.png')} resizeMode='stretch' />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.icon2]}>
                        <Image style={{width:32, height:45}} source={require('../../assets/fb3.png')} resizeMode='stretch' />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: width,
        height: height
    },
    img: {
        width: 140,
        height: 140,
    },
    wrapper: {
        width: 330,
        height: 54,
        borderBottomWidth: 1,
        marginBottom: 20,
        justifyContent: 'center',
        paddingLeft: 5

    },
    pwdTextInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    img2: {
        width: 38,
        height: 36
    },
    textInput: {
        width: '100%',
        height: '100%',
        marginLeft: 10
    },
    button: {
        width: 300,
        height: 48,
        backgroundColor: '#386FFC',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    text2: {
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center',
    },
    text3: {
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center',
        color: '#FFFFFF'
    },
    line: {
        width: '100%',
        height: 3,
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#0E18F5'
    },
    wrapperConnection:{
        width:width-60,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:30,
        flexDirection:'row',
    },
    connectionUnderlined:{
        width:'20%',
        height:1,
        backgroundColor:'#0E18F5'
    },
    img3:{
        width:74,
        height:74
    },
    icon2:{
        backgroundColor:'#3A579C',
        width:74,
        height:74,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default ScreenXMEye