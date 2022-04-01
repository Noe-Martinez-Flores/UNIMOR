import { StyleSheet, Text, View, ScrollView} from 'react-native'
import React from 'react'
import { Avatar, Input } from 'react-native-elements'
import {MaterialIcons} from '@expo/vector-icons'


export default function Comments() {


    const datos = [
        {
            name : 'usuario1',
            comentario : 'Es un buen Lugar'
        },
        {
            name : 'usuario2',
            comentario : 'Es un buen Lugar'
        },
        {
            name : 'usuario3',
            comentario : 'Es un buen Lugar'
        }
    ]
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
                    <Input  rightIcon= {<MaterialIcons name="send" size={20} color = {'#299BF0'}/>} ></Input>
                </View>
                
            </View>

            <View style={{ flexDirection: 'column', justifyContent : 'space-between', backgroundColor : '#DDDDDD' , borderRadius : 15}} >
                {/* <View style = {{marginTop : 5}}>
                    <Avatar
                        rounded
                        size={'medium'}
                        source={require('../../assets/userprofile.png')}
                    ></Avatar>
                </View>
                <View style = {{ width : 300}}>
                    <Text style = {{marginStart : 10, fontWeight : 'bold', fontSize : 15}}>userName</Text>
                    <Input value='buen luegar' disabled color = {'black'} ></Input>
                </View> */}

                {datos.map((dato, index) => {
                        return (
                           
                            <View key={index} style = {{flexDirection : 'row'}}>
                                <View style = {{ marginStart : 10, marginTop : 10 }}>
                                    <Avatar
                                    rounded
                                    size={'medium'}
                                    source={require('../../assets/userprofile.png')}
                                ></Avatar>
                                </View>
                                <View style = {{ width : 300}}>
                                <Text style = {{marginStart : 10, fontWeight : 'bold', fontSize : 15, marginTop : 5}}>{dato.name}</Text>
                                <Input value={dato.comentario} disabled color = {'black'}></Input>
                                </View>
                            </View>
                        )
                    })}
                <View style={{}}>
                   
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