import { StyleSheet, Text, View, ScrollView, Image, SafeAreaView } from 'react-native'
import React from 'react'
import {FormRegisterUser} from '../components/FormRegister'
import {BottomRegister} from '../components/Bottom'
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scrollview";

export default function Register({navigation}) {
  
  return (
    <KeyboardAwareScrollView>
      <SafeAreaView style = {styles.container}>
        <Image style = {styles.image}  source={require ('../../assets/unimorLogo.jpeg')}></Image>
      </SafeAreaView>
     
      <View style = {styles.viewRegisterContainer}>
        <Text style = {styles.text}>Registro</Text>
        <FormRegisterUser navigation={navigation}/>
      </View>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : "#8DCDFF",
    height : 150,
    alignItems : 'center',
    justifyContent : 'center',
    borderBottomLeftRadius : 15,
    borderBottomRightRadius : 15,
  },
  image : {
    height : "100%",
    width : "95%",
    borderBottomLeftRadius : 15,
    borderBottomRightRadius : 15,
  },
  text : {
    justifyContent : 'center',
    alignSelf : 'center',
    fontSize : 30,
    fontWeight : 'bold',
    marginBottom : 15,
  },
  viewRegisterContainer : {
    marginTop : 15,
    marginHorizontal : 30,
   alignContent : 'center',
   
  },
  normalText : {
    marginTop : 15,
    fontSize : 15,
  },
  forgotPassword : {
    fontWeight : 'bold',
    color : '#12BD65'
  }, 
  register : {
    marginTop : 20,
    fontSize : 20,
    color : '#0061DE'
  },
  x : {}
})