import { StyleSheet, Text, View, ToastAndroid } from 'react-native'
import React from 'react'
import { Avatar, Input, Button } from 'react-native-elements'
import { ButtonSendChangeProfile } from '../components/Bottom'
import * as permissions from 'expo-permissions';
import * as imagePicker from 'expo-image-picker'


export default function EditProfile({navigation}) {


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
                
            }
        }
    }

    return (
        <View style = {{marginHorizontal : 15}}>
            <View style={styles.container}>
                <Avatar
                    rounded
                    size={'xlarge'}
                    source={require('../../assets/userprofile.png')}
                >
                    <Avatar.Accessory size={45} onPress={() => changePictureProfile()} />
                </Avatar>

            </View>

            <View style = {styles.containerInput}>
                <Input></Input>
                <Input></Input>
                <Input></Input>
                <Input></Input>
            </View>
            <ButtonSendChangeProfile navigation={navigation}/>

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
        marginTop : 10
    },
    
})