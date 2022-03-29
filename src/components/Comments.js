import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, Input } from 'react-native-elements'
import {MaterialIcons} from '@expo/vector-icons'


export default function Comments() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.mainTitleComments}>Comentarios</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent : 'space-between' }} >
                <View>
                    <Avatar
                        rounded
                        size={'medium'}
                        source={require('../../assets/userprofile.png')}
                    ></Avatar>
                </View>
                <View style = {{ width : 300}}>
                    <Input  rightIcon= {<MaterialIcons name="send" size={20} color = {'gray'}/>} ></Input>
                </View>
                
            </View>

            <View style={{ flexDirection: 'row', justifyContent : 'space-between' }} >
                <View style = {{marginTop : 5}}>
                    <Avatar
                        rounded
                        size={'medium'}
                        source={require('../../assets/userprofile.png')}
                    ></Avatar>
                </View>
                <View style = {{ width : 300}}>
                    <Text style = {{marginStart : 10, fontWeight : 'bold', fontSize : 15}}>userName</Text>
                    <Input value='buen luegar' disabled color = {'black'} ></Input>
                </View>
                
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15
    },
    mainTitleComments: {
        marginBottom: 15,
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 20

    }
})