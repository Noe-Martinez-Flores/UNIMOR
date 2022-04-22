import { StyleSheet, Text, View, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { Avatar, Input, Button } from 'react-native-elements'
import { ButtonSendChangeProfile } from '../components/Bottom'
import * as permissions from 'expo-permissions';
import * as imagePicker from 'expo-image-picker'
import instance from '../util/axios';


export default function EditProfile({navigation, route}) {

    console.disableYellowBox=true;

    const {userInfo,change} = route.params;
    const [image, setImage] = useState(null);
    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [surname, setSurName] = useState('');

    console.log({userInfo})
    console.log(userInfo.photo)
    const changePictureProfile = async () => {
        const {status} = await imagePicker.requestMediaLibraryPermissionsAsync();
        
        if (status == "granted") {
            const result = await imagePicker.launchImageLibraryAsync({
                allowsEditing : true,
                aspect : [3,4]
            })

            if (result.cancelled) {
                ToastAndroid.show('Operación Cancelada', ToastAndroid.SHORT);
            } else {
                console.log(result.uri);
                setImage(result.uri);
            }
        }
    }

    const saveChange = () => {
        console.log("000000000000000000000000000000000000000000000000000000000000")
        console.log({userInfo, image, lastname, name, surname})
        try {
            instance.put('user/update',{
                id : userInfo.id,
                password : userInfo.password,
                email : userInfo.email,
                photo : image,
                status : true,
                person : {
                    id : userInfo.person.id,
                    lastname : lastname,
                    name : name,
                    surname : surname
                },
                role : userInfo.role
            }).then(response => {
                console.log(response);
                change(true);
            })
            .catch(error => console.log(error))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style = {{marginHorizontal : 15}}>
            <View style={styles.container}>
                <Avatar
                    rounded
                    size={'xlarge'}
                    source={userInfo.photo !== "" ? {uri : userInfo.photo} : require('../../assets/userprofile.png')}
                >
                    <Avatar.Accessory size={45} onPress={() => changePictureProfile()} />
                </Avatar>

            </View>

            <View style = {styles.containerInput}>
                <Input onChange={(event)=>setName(event.nativeEvent.text)}>{userInfo.person.name}</Input>
                <Input onChange={(event)=>setLastName(event.nativeEvent.text)}>{userInfo.person.lastname}</Input>
                <Input onChange={(event)=>setSurName(event.nativeEvent.text)}>{userInfo.person.surname}</Input>
                
            </View>
            <Button onPress = {()=>(saveChange(), navigation.goBack())} title = "Guardar Cambios" buttonStyle = {styles.sendBottomStyle} titleStyle = {styles.textBottom}></Button>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    containerInput : {
        marginTop : 5
    },
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
    
})
