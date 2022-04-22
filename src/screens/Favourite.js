import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  RefreshControl,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FakePicture } from "../data/FakePictures";
import AsyncStorage from "@react-native-async-storage/async-storage";
import instance from "../util/axios";
import { useNavigation } from "@react-navigation/native";

const InfoData = ({ navigation }) => {
  const navigations = useNavigation();

  const [isLogin, setisLogin] = useState(false);

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('token')
      return jsonValue !== null ? (setisLogin(true)) : (setisLogin(false));
    } catch (e) {
      console.log(e)
    }
  }

  const [page, setPage] = useState(10)
  
  const [companies, setCompanies] = useState([]);
  const [picture, setPicture] = useState(null);
  const [image, setimage] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getCompanies();
    navigation.navigate("favouriteStack");
  }, [refreshing]);

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const onRefresh = () => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  };

  const getCompanies = async () => {
    try {
      await instance.get('fav/find/')
      .then(res=>{
        // console.log(res.data.data.content);
        setCompanies(res.data.data.content);
      });

    } catch (error) {
      console.log(error);
    }
  };
 

  const Base = ({ item, index }) => {
    return (
      <>
       
          <View
            key={index}
            style={styles.rectanguleCompany}
            onPress={() =>
              navigation.navigate("infoPressArea", {
                image:  {uri:'http://192.168.111.214:8090/company/image/'+item.fav.photos[0].name},
                nombre: item.fav.name,
                data: item,
              })
            }
          >
            <Image
              style={styles.rectanguleInside}
              source={ {uri:'http://192.168.111.214:8090/company/image/'+item.fav.photos[0].name} }
            ></Image>
            <Text style={styles.rectanguleText}>{item.fav.name}</Text>
            <Text style={{ marginStart: 15, marginTop: 2 }}>
              {item.fav.description}
            </Text>
          </View>
        
      </>
    );
  };

  if(isLogin){
    return (
        <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
          ListHeaderComponent={
            <Text style={styles.mainText}>Favoritos</Text>
          }
          data={companies}
          keyExtractor={(item, index) => index.toString()}
          renderItem={Base}
          ListFooterComponent={<View style={styles.footer}></View>}
          
        />
  );
  }else{
    return (<FlatList
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
        ListHeaderComponent={
          <Text style={styles.mainText}>Inicia Sesión Para Favoritos</Text>
        }
   
    
   
        ListFooterComponent={<View style={styles.footer}></View>}
        
      />)
  }
  
};

export default InfoData;

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
  text : {
    justifyContent : 'center',
    alignSelf : 'center',
    fontSize : 30,
    fontWeight : 'bold',
    marginTop : 30
  },
});