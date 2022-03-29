import { StyleSheet, Text, View, ScrollView, Image, SafeAreaView, ToastAndroid } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import FormRegister from '../components/FormRegister'
import Bottom from '../components/Bottom'
import AsyncStorage from '@react-native-async-storage/async-storage'
import UserScreen from './UserScreen'
import {Button} from 'react-native-elements'

export default function Profile({navigation}) {


  const [stateUser, setStateUser] = useState(false);
  const [inputValor, setInputValor] = useState(defaultValues());
  const [valuesAPI, setValuesAPI] = useState([])
  const [userInfo, setUserInfo] = useState([])
  const [conter, setConter] = useState(null)

  console.log('user state -> '+stateUser)


  useEffect(() => {
    getUser('https://randomuser.me/api/?results=5')
  }, [])
  
  useEffect(()=>{
    navigation.navigate("profileStack")
  }, [stateUser])
  // console.log(inputValor)
  // console.log('*************************************************')
  // console.log(valuesAPI)

  const storeData = async (value) => {
   
  }
  const ref = useRef()

  const catchData = async () => {
      try {
        
        // const jsonValue = await AsyncStorage.getItem('@storage_key') 
        // setUserInfo(JSON.parse(jsonValue))
        // return jsonValue != null ? console.log(userInfo) : null
      } catch (e) {
        console.log('error')
      }
  }

  const deleteAccount = async () => {
   
    try {
      await AsyncStorage.removeItem('@storage_key')
      return true
    } catch (e) {
      return false
    }
  }


  const getUser = async(url) => {
    try {
          fetch (url).then(res => res.json()).then(data => {
          console.log('=========') ;
          console.log(data.results[0].name) ; 
          setValuesAPI(data)
 

          for (let i = 0; i < data.info.results; i++) {
            console.log('====================================')
            console.log( 'USERNAME ->' + data.results[i].login.username)
            console.log('PASSWORD ->' + data.results[i].login.password)
            console.log('====================================')
           }
         
      }
     
      );
      // const json = await response.json();
      // console.log('**********************************************')
      // console.log(users)
      // console.log('=============================================')
      // console.log(json.cell)
      // setValuesAPI(json.results)
      }catch (error){
        console.log(error)
      }
  }

  const authSession = async (inputValor, valuesAPI) => {
            
    for (let i = 0; i < valuesAPI.info.results; i++) {

     if (inputValor.username ===  valuesAPI.results[i].login.username && inputValor.password === valuesAPI.results[i].login.password){
        console.log('login Success')
        setStateUser(true);
        setConter(i);
        setUserInfo(valuesAPI.results[i])
        try {
          const json = JSON.stringify(valuesAPI.results[i]);
          await AsyncStorage.setItem('@storage_key',json)
          
        } catch (e) {
          console.log(e)
        }
        setUserInfo(valuesAPI.results[i])
        break;
        
     }else{
      
      //  ToastAndroid.show('Usuario y / o Contraseña Incorrectos', ToastAndroid.SHORT)
       console.log(inputValor.username + ' = ' + valuesAPI.results[i].login.username)
       console.log(inputValor.password + ' = ' + valuesAPI.results[i].login.password)
       setStateUser(false);
   
     }

      
    }

    return stateUser ? console.log('succes!!!') : ToastAndroid.show('Usuario y / o Contraseña Incorrectos', ToastAndroid.SHORT)

  }

  
const setData =  (type,event) => {
  setInputValor({ ...inputValor, [type] : event})
}

if(!stateUser){
  return (
   
<ScrollView>
      <SafeAreaView style = {styles.container}>
        <Image style = {styles.image}  source={require ('../../assets/unimorLogo.jpeg')}></Image>
      </SafeAreaView>
      
      <View style = {styles.viewRegisterContainer}>
        <Text style = {styles.text}>Inicio de Sesión</Text>
        <FormRegister setData = {setData}/>
        <Bottom navigation = {navigation} authSession = {authSession} inputValor = {inputValor} valuesAPI = {valuesAPI} userSate = {stateUser} catchData = {catchData}/>
        <Text style = {styles.register} onPress = {()=>navigation.navigate('register')}> Registrate</Text>
        <Text style = {styles.normalText}>¿Has Olvidadó la Contraseña? <Text style = {styles.forgotPassword} onPress={()=>navigation.navigate('forgotpassword')}> Has Click Aquí </Text> </Text>
        {/* <Button onPress={()=>(storeData('Usuario Almacenado 1'))} title = 'Guardar Usuario 1'></Button>
        <Button onPress={()=>(storeData('Usuario Almacenado 2'))} title = 'Guardar Usuario 2'></Button>
        <Button onPress={()=>(deleteAccount(),ref)} title = 'LogOUT'></Button>
        <Button onPress={()=>(catchData())} title = 'Imprimir Resultado'></Button> */}
        {/* <Button title={'Ver Usuario'} onPress={()=> userInfo}></Button>
        <Button title={'delete'} onPress={()=>deleteAccount()}></Button> */}
      </View>
      
    </ScrollView>
  )
}else{
  return (
    <UserScreen navigation={navigation} setStateUser={setStateUser} setUserInfo={setUserInfo} userInfo = {userInfo} conter = {conter}/>
  )
}
  
}


function defaultValues () {
  return {
    username : "",
    password : ""
  
  }
  
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
   justifyContent : 'center'
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