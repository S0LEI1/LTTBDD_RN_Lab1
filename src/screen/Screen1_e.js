import { View, Text, StyleSheet, Dimensions, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
// import { TextInput } from 'react-native-web'
import RadioGroup, { RadioButton } from 'react-native-radio-buttons-group';
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const Screen1_e = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text1}>REGISTER</Text>
            <View>
                <View style={styles.wrapper}>
                    <TextInput style={styles.textInput} placeholder='Name' />
                </View>
                <View style={styles.wrapper}>
                    <TextInput style={styles.textInput} placeholder='Phone' />
                </View>
                <View style={styles.wrapper}>
                    <TextInput style={styles.textInput} placeholder='Email' />
                </View>
                <View style={[styles.wrapper, styles.pwdTextInput]}>
                    <TextInput style={styles.textInput} placeholder='Password' />
                    <TouchableOpacity>
                        <Image style={styles.img} source={require('../../assets/eye.png')} resizeMode='stretch' />
                    </TouchableOpacity>
                </View>
                <View style={styles.wrapper}>
                    <TextInput style={styles.textInput} placeholder='Birthday' />
                </View>
                <View style={styles.rdoBtn}>
                    <RadioButton /><Text>Male</Text>
                    <RadioButton /><Text>Female</Text>
                </View>
            </View>

            <View>
                <TouchableOpacity style={styles.button}>
                    <Text>REGISTER</Text>
                </TouchableOpacity>
                <Text style={styles.text3}>When you agree to terms and conditions</Text>
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
        fontSize: 25,
        fontWeight: '700',
        marginTop:30
    },
    wrapper: {
        backgroundColor: '#F2F2F2',
        width: 330,
        height: 54,
        borderWidth: 1,
        marginBottom: 4,
        justifyContent: 'center',
        paddingLeft: 5

    },
    pwdTextInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    img: {
        width: 38,
        height: 36
    },
    textInput: {
        width: '100%',
        height: '100%'
    },
    rdoBtn: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    button: {
        width: 330,
        height: 45,
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
        marginTop:10,
        marginBottom:80
    },
})
export default Screen1_e