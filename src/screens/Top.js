import { StyleSheet, Text, View, RefreshControl, FlatList, TouchableOpacity, Image } from 'react-native'
import React, {useEffect,useState} from 'react'
import axios from 'axios';


export default function Top({navigation}) {

  const [refreshing, setRefreshing] = useState(false);
  const [topCompanies, setTopCompanies] = useState([])
  
  useEffect(() => {
    getTopCompanies('http://192.168.111.214:8090/company/all/top');
  }, [refreshing])

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };
  
  const onRefresh = () => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  };

  const getTopCompanies = async(url) => {
    try {
        const response = await axios.get(url)
        return response.status ? (setTopCompanies(response.data.data)) : (console.log(response))
    } catch (error) {
        console.log(error)
    }
  }

  const Base = ({item,index}) => {
    return (
      <>
         {item.status && (
          <TouchableOpacity
            key={index}
            style={styles.rectanguleCompany}
            onPress={() =>
              navigation.navigate("infoPressArea", {
                image: {uri:'http://192.168.111.214:8090/company/image/'+item.photos[0].name},
                nombre: item.name,
                data: item,
              })
            }
          >
            <Image
              style={styles.rectanguleInside}
              source={{ uri: 'http://192.168.111.214:8090/company/image/'+item.photos[0].name }}
            ></Image>
            <Text style={styles.rectanguleText}>{item.name}</Text>
            <Text style={{ marginStart: 15, marginTop: 2 }}>
              {item.description}
            </Text>
          </TouchableOpacity>
        )}
      </>
    )
  }

  return (
    <FlatList
      refreshControl={
        <RefreshControl refreshing = {refreshing} onRefresh = {onRefresh}></RefreshControl>
      }
      ListHeaderComponent={<Text style = {styles.text}>Top 5</Text>}
      data = {topCompanies}
      renderItem = {Base}
      ListFooterComponent = {
        <View style = {{marginBottom : 70}}></View>
      }
    >
    </FlatList>
  )
}

const styles = StyleSheet.create({
  text : {
    justifyContent : 'center',
    alignSelf : 'center',
    fontSize : 30,
    fontWeight : 'bold'
  },
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
})