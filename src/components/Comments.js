import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import React, { useState } from "react";
import { Avatar, Button, Input, Overlay, Rating } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";

export default function Comments({ data }) {
  const [visible, setVisible] = useState(false);

  const toggleOverLay = () => {
    setVisible(!visible);
  };


  const datos = [
    {
      name: "usuario1",
      comentario: "Es un buen Lugar",
    },
    {
      name: "usuario2",
      comentario: "Es un buen Lugar",
    },
    {
      name: "usuario3",
      comentario: "Es un buen Lugar",
    },
  ];


  const modal = () => {
    return (
      <Overlay isVisible={true} overlayStyle={styles.modal}>
        <Text>Hols</Text>
      </Overlay>
    );
  };

  const Base = (item, index) => {
    return (
      <View key={index} style={{ flexDirection: "row" }}>
        <View style={{ marginStart: 10, marginTop: 10 }}>
          <Avatar
            rounded
            size={"medium"}
            source={require("../../assets/userprofile.png")}
          ></Avatar>
        </View>
        <View style={{ width: 300 }}>
          <Text
            style={{
              marginStart: 10,
              fontWeight: "bold",
              fontSize: 15,
              marginTop: 5,
            }}
          >
            {item.comment}
          </Text>
          <Input value={item.comment} style={{ color: "black" }}></Input>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.mainTitleComments}>Comentarios</Text>
      </View>

      {/* <View style={{ flexDirection: 'row', justifyContent : 'space-between' }} >
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
                
            </View> */}
      <View style={{ marginVertical: 15 }}>
        <Button
          title={"Calificar y Comentar"}
          onPress={toggleOverLay}
          containerStyle={{ borderRadius: 15 }}
        />

        <Overlay
          isVisible={visible}
          overlayStyle={styles.modal}
          onBackdropPress={toggleOverLay}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 5 }}>
            Calificación
          </Text>
          <Rating imageSize={35}></Rating>
          {/* <Text style = {{fontWeight : 'bold', fontSize : 20, marginVertical : 5}}>Comentario</Text> */}
          <Input
            placeholder="Escriba un Comentario"
            style={{ marginVertical: 2 }}
          ></Input>
          <Button icon = {<MaterialIcons name="send" size={24} color = {'white'} style = {{marginEnd : 5}}></MaterialIcons>} title = {'Enviar'} containerStyle = {{borderRadius : 10}}></Button>
        </Overlay>
      </View>

      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#DDDDDD",
          borderRadius: 15,
        }}
      >
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
        {/* <FlatList ListHeaderComponent={<Text></Text>}
                data = {data}
                keyExtractor = {(item,index)=> index.toString()}
                renderItem = {Base}
                ListFooterComponent = {<View></View>}
                >
                </FlatList> */}
        {data.map((item, index) => {
          return (
            <View key={index} style={{ flexDirection: "row" }}>
              <View style={{ marginStart: 10, marginTop: 10 }}>
                <Avatar
                  rounded
                  size={"medium"}
                  source={require("../../assets/userprofile.png")}
                ></Avatar>
              </View>
              <View style={{ width: 300 }}>
                <Text
                  style={{
                    marginStart: 10,
                    fontWeight: "bold",
                    fontSize: 15,
                    marginTop: 5,
                  }}
                >
                  {item.user.person.name} {item.user.person.lastname}
                </Text>
                <Input
                  value={item.comment}
                  disabled
                  style={{ color: "black" }}
                ></Input>
              </View>
            </View>
          );
        })}

        <View style={{}}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  mainTitleComments: {
    marginBottom: 15,
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  modal: {
    height: 200,
    width: "95%",
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
