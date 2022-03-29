import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import { Icon, Input, SearchBar } from 'react-native-elements'
//import { useNavigation } from '@react-navigation/native'
import axios from 'axios'

const Search = ({navigation}) => {

  //const navigation = useNavigation();

  const [data, setData] = useState([])
  const [filterData, setFilterData] = useState([])

  useEffect(() => {
    getUsers('https://randomuser.me/api/?results=20');
}, [navigation])

  // useEffect(() => {
  //   navigation.setOptions({
  //     headerLargeTitle : true,
  //     headerTitle : "Buscar",
  //     headerSearchBarOptions : {
  //       placeholder : "Buscar"
  //     }
  //   })
  // }, [navigation])
  
 
  const getUsers = async (url) =>{
    try {
    const response = await fetch (url);
    const json = await response.json();
    setData(json.results);
    setFilterData(json.results);
    console.log(json.results)
    }catch (error){
      console.log(error)
    }
  }

  const searchFilterFunction = (text) => {
    if  (text){
      const newData = data.filter(item=>{
        const itemData = item.name.first ? item.name.first.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      })
      setFilterData(newData);
    }else{
      setFilterData(data)
    }
  }

  return (
    <ScrollView>
      {/* <Text style = {styles.mainText}>Search</Text> */}
      <Input
      color = {'007aff'}
      style = {{marginHorizontal : 10}} 
      placeholder='Busqueda' 
      leftIcon = { <Icon
            type="material-icons"
            name="search"
            color={"gray"}
            ></Icon>}
      onChange = {(event) => {
            searchFilterFunction(event.nativeEvent.text);
            }}
          ></Input>
      {
        filterData.map((item,index)=>{
          return (
            <View key = {index} style = {styles.itemContainer}>
              <Image 
                source={{uri : item.picture.large}}
                style = {styles.image}
              />
              <View>
                <Text style = {styles.textName} > {item.name.first} {item.name.last}</Text>
              </View>  
            </View>
            
          )
        })
      }
      <View style = {styles.footer}></View>
    </ScrollView>
  )
}

export default Search

const styles = StyleSheet.create({
    mainText : {
        fontSize : 30,
        fontWeight : 'bold',
        justifyContent : 'center',
        alignSelf : 'center',
    },
    itemContainer : {
      flexDirection : 'row',
      alignItems : 'center',
      marginLeft : 10,
      marginTop : 10,
    },
    image : {
      width : 45,
      height : 45,
      borderRadius : 25
    },
    textName : {
      fontSize : 17, 
      fontWeight : '600',
      marginLeft : 10
    },
    footer : {
      marginBottom : 85
    }
})