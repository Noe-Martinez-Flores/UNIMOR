import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import { FakePicture } from "../data/FakePictures";

import { useNavigation } from '@react-navigation/native';

const InfoData = ({navigation}) => {

  const [companies, setCompanies] = useState([])

  useEffect(() => {
    getCompanies('http://192.168.69.14:8090/company/all')   
  }, [useNavigation])
  

  const getCompanies =  async (url) => {
    try {
      const response = await fetch(url,{
        method : 'GET',
        headers : {'Content-Type' : 'application/json'}
      })

      const json = await response.json();
      
      setCompanies(json.data.content)

      const prueba = JSON.stringify(response)
      console.log('---------------------------------------------------------')
      console.log(companies)
        
    } catch (error) {
        console.log(error)
    }
  }
  

    const Base = ({item, index}) => {
        return (
          <>
            {item.status && (
               <TouchableOpacity
               key={index}
              style={styles.rectanguleCompany}
              onPress={() => navigation.navigate('infoPressArea',{
                image : item.photos[0].name,
                nombre : item.name,
                data : item
              })}
            >
              <Image
                key={index}
                style={styles.rectanguleInside}
                source={{ uri: item.photos[0].name }}
              ></Image>
              <Text style={styles.rectanguleText}>{item.name}</Text>
              <Text style = {{marginStart : 15, marginTop : 2}}>{item.description}</Text>
            </TouchableOpacity>
            )}
          </>
           
          );
    }
   
    return (
         <FlatList
        ListHeaderComponent={
            <Text style={styles.mainText}>Listado General</Text>
        }
        data={companies}
        keyExtractor={(item, index) => index.toString()}
        renderItem={Base}
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