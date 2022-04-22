import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Icon, Input, SearchBar } from "react-native-elements";
//import { useNavigation } from '@react-navigation/native'
import axios from "axios";

const Search = ({ navigation }) => {
  console.disableYellowBox=true;
  //const navigation = useNavigation();

  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getUsers("http://192.168.111.214:8090/company/all");
  }, [refreshing]);

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const onRefresh = () => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  };

  const getUsers = async (url) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.data.content);
      setFilterData(json.data.content);
      console.log(json.data.content);
    } catch (error) {
      console.log(error);
    }
  };

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = data.filter((item) => {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
    } else {
      setFilterData(data);
    }
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Input
        color={"007aff"}
        style={{ marginHorizontal: 10 }}
        placeholder="Busqueda"
        leftIcon={
          <Icon type="material-icons" name="search" color={"gray"}></Icon>
        }
        onChange={(event) => {
          searchFilterFunction(event.nativeEvent.text);
        }}
      ></Input>
      {filterData.map((item, index) => {
        return (
          <>
            {item.status && (
              <TouchableOpacity
                key={index}
                style={styles.rectanguleCompany}
                onPress={() =>
                  navigation.navigate("infoPressArea", {
                    image: {
                      uri:
                        "http://192.168.111.214:8090/company/image/" +
                        item.photos[0].name,
                    },
                    nombre: item.name,
                    data: item,
                  })
                }
              >
                <Image
                  style={styles.rectanguleInside}
                  source={{
                    uri:
                      "http://192.168.111.214:8090/company/image/" +
                      item.photos[0].name,
                  }}
                ></Image>
                <Text style={styles.rectanguleText}>{item.name}</Text>
                <Text style={{ marginStart: 15, marginTop: 2 }}>
                  {item.description}
                </Text>
              </TouchableOpacity>
            )}
          </>
        );
      })}
      <View style={styles.footer}></View>
    </ScrollView>
  );
};

export default Search;

const styles = StyleSheet.create({
  mainText: {
    fontSize: 30,
    fontWeight: "bold",
    justifyContent: "center",
    alignSelf: "center",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginTop: 10,
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 25,
  },
  textName: {
    fontSize: 17,
    fontWeight: "600",
    marginLeft: 10,
  },
  footer: {
    marginBottom: 70,
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
});
