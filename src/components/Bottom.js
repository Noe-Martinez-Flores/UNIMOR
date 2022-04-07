import { View, Text, TouchableOpacity, StyleSheet, ToastAndroid} from 'react-native'
import React from 'react'
import {Button} from 'react-native-elements'


const Bottom = ({navigation, authSession, inputValor, valuesAPI, userSatate, catchData}) => {
  return (
   <Button onPress = {()=>( authSession(inputValor,valuesAPI), catchData())} title = "Iniciar Sesión" buttonStyle = {styles.sendBottomStyle} titleStyle = {styles.textBottom}></Button>
  )
}

export const BottomRegister = ({navigation,validation,inputValor}) => {
    return (
        <Button onPress = {()=>(validation(inputValor), navigation.goBack())} title = "Registrarse" buttonStyle = {styles.sendBottomStyle} titleStyle = {styles.textBottom}></Button>

       )
}

export const BottomForgotPassword = () => {
    return (
        <Button onPress = {()=>navigation.goBack()} title = "Enviar" buttonStyle = {styles.sendBottomStyle} titleStyle = {styles.textBottom}></Button>

       )
}

export const ButtonSendChangeProfile = ({navigation}) => {
    return (
        <Button onPress = {()=>navigation.goBack()} title = "Guardar Cambios" buttonStyle = {styles.sendBottomStyle} titleStyle = {styles.textBottom}></Button>

       )
}

export default Bottom

const styles = StyleSheet.create ({
    sendBottomStyle : {
        backgroundColor : '#178CE8',
        borderRadius : 10,
        justifyContent : 'center',
        alignItems : 'center',
        height : 50,
        marginTop : 15, 
        marginBottom : 30,
        fontWeight :'bold',
        fontSize : 20 
        
    },
    textBottom : {
        fontSize : 20,
        color : '#fff',
        fontWeight : 'bold'
    },
    x : {},
})