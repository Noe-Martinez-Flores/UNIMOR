import { StyleSheet, Text, View, Image, TouchableOpacity, ToastAndroid, ScrollView } from "react-native";
import React, {useEffect, useRef, useState} from "react";
import {Avatar} from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Button } from "react-native-elements";

const UserScreen = ({navigation, setStateUser, userInfo, conter, setUserInfo}) => {

  const deleteAccount = async () => {
   
    try {
      await AsyncStorage.removeItem('@storage_key')
      await AsyncStorage.clear()
      console.log('BIEN REMOVE')
      setUserInfo([])
      return true
    } catch (e) {
      return false
    }
  }

  const catchData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_key') 
      return jsonValue != null ? console.log(JSON.parse(jsonValue)) : null
    } catch (e) {
      console.log('error')
    }
}


  return (
    <ScrollView>
      <View style = {{justifyContent : "center", alignItems : "center", marginTop : 15}}>
        {/* <Image style={[styles.photo, { alignSelf: "center" }]} source={require("../../assets/userprofile.png")}></Image> */}
        <Avatar 
        rounded
          size={'large'}
          showEditButton
          source={userInfo != null ? {uri : userInfo.picture.large}: require('../../assets/userprofile.png')}
          >
          {/* <Avatar.Accessory size={24} onPress={()=>console.log('editar perfil')}/> */}
        </Avatar>
        {/* <Text style={styles.text}>{userInfo.results[conter].name.first} {userInfo.results[conter].name.last}</Text>
        <Text style={styles.email}>{userInfo.results[conter].email} </Text> */}
        <Text style={styles.text}>{userInfo.name.first} {userInfo.name.last}</Text>
        <Text style={styles.email}>{userInfo.email} </Text>

        </View>
        <TouchableOpacity style={styles.bottomStyle}  onPress = {()=>navigation.navigate('editProfileStack')}>
          <Text style = {{textAlign : "center", fontSize : 15, justifyContent : "center",fontWeight : "600",}}>Editar Perfil</Text>
        </TouchableOpacity>

        <Button title={'Ver Usuario'} onPress={()=> catchData()}></Button>
        <Button title = 'LogOUT' containerStyle = {{borderRadius : 15, marginHorizontal : 15, marginTop : 30}} titleStyle = {{fontWeight : "bold"}} buttonStyle = {{backgroundColor : '#0BD57B'}} onPressIn = {() => (setStateUser(false), deleteAccount())}></Button>
    </ScrollView>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  
  photo: {
    width: 100,
    height: 100,
    marginLeft: 15,
    marginTop: 15,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 15
  },
  containerInfo: {
    marginHorizontal: 20,
    marginVertical: 15,
    justifyContent: "center",
    alignContent: "center"
  },
  bottomStyle: {
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'gray',
    marginHorizontal : 20,
    height : 25,
    borderRadius : 8,
  },
  email : {
    marginTop : 5,
    fontSize : 15
  }

});
