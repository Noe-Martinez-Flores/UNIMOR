import { StyleSheet, Text, View, ScrollView , ToastAndroid} from "react-native";
import React, { useState } from "react";
import { Input, Icon } from "react-native-elements";
import { BottomRegister } from "./Bottom";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scrollview";
import axios from "axios";

const FormRegister = ({setData}) => {
  const [showPassword, setShowPassword] = useState(false);



  return (
    <View style={styles.margin}>
      <Input
        placeholder="Correo Electronico"
        keyboardType="email-address"
        rightIcon={
          <Icon
            type="meterial-icons"
            name="alternate-email"
            color={"gray"}
          ></Icon>
          
        }
        onChange = {(event) => setData("email", event.nativeEvent.text)}
      />

      <Input
        placeholder="Contraseña"
        password={true}
        secureTextEntry={showPassword ? false : true}
        rightIcon={
          <Icon
            type="material-icons"
            name={showPassword ? "visibility-off" : "visibility"}
            color={showPassword ? "black" : "gray"}
            onPress={() => setShowPassword(!showPassword)}
          ></Icon>
        }
        onChange = {(event) => setData("password", event.nativeEvent.text)}
      />
    </View>
  );
};

export const FormRegisterUser = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);
  const [inputValor, setInputValor] = useState(defaultValues());

  const setData = (type,event) => {
      setInputValor({...inputValor, [type] : event})
  }

  const registerNewUser = async (inputValor) => {
    try {
        const result = await axios.post('http://192.168.111.214:8090/user/save', {
            email : inputValor.email,
            password : inputValor.password,
            status : true,
            photo : "",
            person : {
              name : inputValor.name,
              lastname : inputValor.lastname,
              surname : inputValor.surname,
            },
            role : {
              id : inputValor.id,
              name : inputValor.nameuser,
              status : true,
            }
        })

        return result.status === false ? (ToastAndroid.show('Error',ToastAndroid.SHORT)) : (ToastAndroid.show('Registro Exitoso', ToastAndroid.SHORT))
    } catch (error) {
        console.log("something went wrong with the register -> "+error)
    }
  }

  return (

    <View style={styles.margin}>
      <Input
        placeholder="Nombre"
        rightIcon={
          <Icon
            type="meterial-icons"
            name="account-circle"
            color={"gray"}
          ></Icon>
        }
        onChange = {event => {setData('name',event.nativeEvent.text)}}
      />

      <Input
        placeholder="Apellido Paterno"
        rightIcon={
          <Icon
            type="meterial-icons"
            name="account-circle"
            color={"gray"}
          ></Icon>
          
        }
        onChange = {event => {setData('lastname',event.nativeEvent.text)}}
      />

      <Input
        placeholder="Apellido Materno"
        rightIcon={
          <Icon
            type="meterial-icons"
            name="account-circle"
            color={"gray"}
          ></Icon>
        }
        onChange = {event => {setData('surname',event.nativeEvent.text)}}
      />

      <Input
        placeholder="Correo Electronico"
        keyboardType="email-address"
        rightIcon={
          <Icon
            type="meterial-icons"
            name="alternate-email"
            color={"gray"}
          ></Icon>
        }
        onChange = {event => {setData('email',event.nativeEvent.text)}}
      />

      <Input
        placeholder="Contraseña"
        password={true}
        secureTextEntry={showPassword ? false : true}
        rightIcon={
          <Icon
            type="material-icons"
            name={showPassword ? "visibility-off" : "visibility"}
            color={showPassword ? "black" : "gray"}
            onPress={() => setShowPassword(!showPassword)}
          ></Icon>
        }
        onChange = {event => {setData('password',event.nativeEvent.text)}}
      />

      {/* <Input
        placeholder="Repetir Contraseña"
        password={true}
        secureTextEntry={showPasswordRepeat ? false : true}
        rightIcon={
          <Icon
            type="material-icons"
            name={showPasswordRepeat ? "visibility-off" : "visibility"}
            color={showPasswordRepeat ? "black" : "gray"}
            onPress={() => setShowPasswordRepeat(!showPasswordRepeat)}
          ></Icon>
        }
      /> */}
        <BottomRegister navigation={navigation} validation = {registerNewUser} inputValor = {inputValor}/>
    </View>
  );
};

export const FormForgotPassword = () => {
  return (
    <View style={styles.margin}>
      <Input
        placeholder="Correo Electronico"
        keyboardType="email-address"
        rightIcon={
          <Icon
            type="meterial-icons"
            name="alternate-email"
            color={"gray"}
          ></Icon>
        }
      />
    </View>
  );
}


function defaultValues () {
  return {
      "email" : "",
      "password" : "",
      "status" : true,
      "photo" : "",
     
          "name" : "",
          "lastname" : "",
          "surname" : "",


          "id" : 2,
          "nameuser" : "User",
          "status" : true

  }
}

export default FormRegister;

const styles = StyleSheet.create({
  margin: {
    marginTop: 15,
  },
});
