import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import axios from "axios";
import { FakePicture } from "../data/FakePictures";
import InfoData from "../components/InfoData";

export default function Home({navigation}) {
  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const user = await axios.get("https://randomuser.me/api/");
    //console.log(user)
  };

  return (
    <View>
      {/* <SafeAreaView style = {styles.container}>
        <Image style = {styles.mainSquare}  source={require ('../../assets/chineloIndex.png')}></Image>
      </SafeAreaView> */}

      {/* <Text style={styles.mainText}>Listado General</Text> */}

      {/* <TouchableOpacity style = {styles.rectanguleCompany}  onPress = {()=>console.log('precionando area')} >
      <Image style = {styles.rectanguleInside}  source={require ('../../assets/google.jpg')}></Image>
      <Text  style = {styles.rectanguleText}>Google</Text>
      </TouchableOpacity> */}

      <InfoData navigation = {navigation} />

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: 120,
    backgroundColor: "#C4FBC8",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  mainSquare: {
    height: "100%",
    width: "95%",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
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
  
  mainText: {
    fontSize: 30,
    fontWeight: "bold",
    justifyContent: "center",
    alignSelf: "center",
  },
  x: {},
});
