import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FakePicture } from "../data/FakePictures";

const InfoData = ({navigation}) => {

    const Base = (props) => {
        return (
            <TouchableOpacity
              style={styles.rectanguleCompany}
              onPress={() => navigation.navigate('infoPressArea',{
                image : props.image,
                nombre : props.nombre
              })}
            >
              <Image
                style={styles.rectanguleInside}
                source={{ uri: props.image }}
              ></Image>
              <Text style={styles.rectanguleText}>{props.nombre}</Text>
            </TouchableOpacity>
          );
    }
   
    return (
        <FlatList
        ListHeaderComponent={
            <Text style={styles.mainText}>Listado General</Text>
        }
        data={FakePicture}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Base image={item.url} nombre={item.nombre} />
        )}
        ListFooterComponent = {
            <View style={styles.footer}></View>
        }
      />
    )
    
  };

export default InfoData

const styles = StyleSheet.create({
      rectanguleCompany: {
        marginHorizontal: 15,
        backgroundColor: "#DCDCDC",
        height: 200,
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 15,
      },
      rectanguleInside: {
        height: "70%",
        width: "100%",
        borderRadius: 15,
      },
      rectanguleText: {
        marginLeft: 15,
        fontSize: 20,
        fontWeight: "bold",
      },
      mainText: {
        fontSize: 30,
        fontWeight: "bold",
        justifyContent: "center",
        alignSelf: "center",
      },
      footer: {
        height: 70,
      },
      x: {},
})