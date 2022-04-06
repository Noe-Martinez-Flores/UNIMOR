import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import { Input, Icon } from "react-native-elements";
import { BottomRegister } from "./Bottom";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scrollview";

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
        <BottomRegister navigation={navigation}/>
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

export default FormRegister;

const styles = StyleSheet.create({
  margin: {
    marginTop: 15,
  },
});
