import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const Screen1_d = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text1}>
                LOGIN
            </Text>
            <View>
                <View>
                    <TextInput style={styles.textInput} placeholder='Email' />
                </View>
                <View style={[styles.wrapper]}>
                    <TextInput style={{ width: 330,height: 54,}} placeholder='Password' />
                    <TouchableOpacity>
                    <Image style={styles.img} source={require('../../assets/eye.png')} resizeMode='stretch' />
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text>LOGIN</Text>
            </TouchableOpacity>
            <View>
            <Text style={styles.text3}>When you agree to terms and conditions</Text>
            <Text style={styles.text3}>For got your password?</Text>
            <Text style={styles.text3}>Or login with</Text>
            </View>
            <View style={{flexDirection:'row', width:328, height:45, marginBottom:80}}>
                <TouchableOpacity style={{width:110, height:45, borderWidth:1 , backgroundColor:'#25479B' , justifyContent:'center', alignItems:'center'}}>
                    <Image style={{width:30, height:30}} source={require('../../assets/fb.png')} resizeMode='stretch' />
                </TouchableOpacity>
                <TouchableOpacity style={{width:110, height:45, borderWidth:1,  backgroundColor:'#0F8EE0' , justifyContent:'center', alignItems:'center'}}>
                    <Image style={{width:30, height:30,}} source={require('../../assets/icozalo.png')} resizeMode='stretch' />
                </TouchableOpacity>
                <TouchableOpacity style={{width:110, height:45, borderWidth:1, backgroundColor:'#FFFFFF' , justifyContent:'center', alignItems:'center'}}>
                    <Image style={{width:30, height:30,}} source={require('../../assets/gg.png')} resizeMode='stretch' />
                </TouchableOpacity>
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
    text1: {
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
        marginTop:30
    },
    textInput: {
        width: 330,
        height: 54,
        backgroundColor: '#F2F2F2',
        marginHorizontal: 5,
        paddingLeft: 10,
        marginBottom:20, 
        justifyContent:'center'
    },
    wrapper: {
        width: 330,
        height: 54,
        backgroundColor: '#F2F2F2',
        marginHorizontal: 5,
        paddingLeft: 10,
        marginBottom:20, 
        justifyContent:'center',
        alignItems:'center',
        flexDirection: 'row',
    }, img:{
        width:38,
        height:36
    },
    button: {
        width:330,
        height:45,
        backgroundColor: '#E53935',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 29
    },
    text3: {
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: '700',
        textAlign:'center',
        marginBottom:10
    },
})
export default Screen1_d