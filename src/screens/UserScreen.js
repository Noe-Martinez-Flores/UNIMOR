import { StyleSheet, Text, View, Image, TouchableOpacity, ToastAndroid, ScrollView } from "react-native";
import React, {useEffect, useRef, useState} from "react";
import {Avatar} from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Button } from "react-native-elements";
import instance from "../util/axios";
import Loading from "../util/Loading";

const UserScreen = ({navigation, setisLogin, userInfo, conter, setUserInfo}) => {

  const [ready, setReady] = useState(false);
  const [change, setChange] = useState(false);

  useEffect(async()=>{
    await findUserByToken();
  }, []);

  useEffect(async()=>{
    await findUserByToken();
    setChange(false)
  }, [change]);

  const findUserByToken = async() =>{
   await instance.get('user/valid')
      .then(res=>{

        console.log(res.data.data);
        if (res.data.status){
           setUser(res.data.data);
           setReady(true);
        }
      })
      .catch((error)=>{
          console.log('error con', error)
      });
  };

  const [user, setUser] = useState(useObject)

  const useObject = {
    email: '',
    password: '',
    role: {},
    person:{
      name: '',
      lastname: '',
      surname: '',
    },
    photo: '',
  };

  console.log({user})

  const deleteAccount = async () => {
   
    try {
      await AsyncStorage.clear
      await AsyncStorage.removeItem('token')
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
if (!ready) return <Loading isVisible = {true} text = {'Cargando...'}/>
if (ready){
  return (
    <ScrollView>
      <View style = {{justifyContent : "center", alignItems : "center", marginTop : 15}}>
        {/* <Image style={[styles.photo, { alignSelf: "center" }]} source={require("../../assets/userprofile.png")}></Image> */}
        <Avatar 
        rounded
          size={'large'}
          showEditButton
          source={user.photo !== '' ? {uri : user.photo}: require('../../assets/userprofile.png')}
          // source={require('../../assets/userprofile.png')}
          >
          {/* <Avatar.Accessory size={24} onPress={()=>console.log('editar perfil')}/> */}
        </Avatar>
        {/* <Text style={styles.text}>{userInfo.results[conter].name.first} {userInfo.results[conter].name.last}</Text>
        <Text style={styles.email}>{userInfo.results[conter].email} </Text> */}
        <Text style={styles.text}>{user.person.name} {user.person.lastname} {user.person.surname}</Text>
        <Text style={styles.email}>{user.email} </Text>

        </View>
        <TouchableOpacity style={styles.bottomStyle}  onPress = {()=>navigation.navigate('editProfileStack', {
          userInfo : user,
          change : setChange
        })} >
          <Text style = {{textAlign : "center", fontSize : 15, justifyContent : "center",fontWeight : "600",}}>Editar Perfil</Text>
        </TouchableOpacity>

        {/* <Button title={'Ver Usuario'} onPress={()=> catchData()}></Button> */}
        <Button title = 'LogOUT' containerStyle = {{borderRadius : 15, marginHorizontal : 15, marginTop : 30}} titleStyle = {{fontWeight : "bold"}} buttonStyle = {{backgroundColor : '#0BD57B'}} onPressIn = {() => (setisLogin(false), deleteAccount())}></Button>
    </ScrollView>
  )
}
  ;
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
