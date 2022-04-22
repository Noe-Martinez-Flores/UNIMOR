import { StyleSheet, Text, View, Image, ScrollView, ToastAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import InfoData from '../components/InfoData'
import { Rating, RatingProps, Overlay, Button } from 'react-native-elements'
import { MaterialIcons } from "@expo/vector-icons";
import MapsView from '../components/Maps';
import Comments from '../components/Comments';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import instance from '../util/axios'

const InfoPressAreaScreen = ({ navigation,route }) => {

  // const navigation = useNavigation();
  const { image, nombre, data, user } = route.params;
  const [visible, setVisible] = useState(false);
  const [existFav, setExistFav] = useState(false);
  
  const toggleOverLay = () => {
    setVisible(!visible);
  };

  

  const [isLogin, setisLogin] = useState(false);

  useEffect(() => {
    getData();
    isFav();
  }, [])

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('token')
      return jsonValue !== null ? ( setisLogin(true)) : (setisLogin(false));
    } catch (e) {
      console.log(e)
    }
  }

  const isFav = () =>{
    instance.post('fav/exist/' + data.id)
      .then(res=>{
        setExistFav(res.data.data);
        console.log('FAV', res.data.data);
      })
      .catch(err=>{
        console.log(err);
      });
  };

  const addFav = () => {
    if(existFav){
      instance.delete('fav/delete/'+data.id)
      .then(response => {
          console.log(response);
          if (response.data.status) {
                isFav();
          }
          
      }).catch(err=>{
        console.log(err);
      });
    }else{
      instance.post('fav/save/' + data.id)
        .then(res=>{
          console.log(res);
          if (res.data.status){
            isFav();
          }
        })
        .catch(err=>{
          console.log(err);
        });
    }
  }


  
  const [isModalOpen, setIsModalOpen] = useState(false)

  const ratingCompleted = (rating) => {
    console.log('rating is ' + rating)
  }
  const [isTouchFavourite, setIsTouchFavourite] = useState(false);

  const modal = () => {
    return (<>

    </>)
  }

  return (
    <ScrollView>
      <Text style={{ fontSize: 25, fontWeight: 'bold', justifyContent: 'center', alignSelf: 'center', marginTop: 5 }}>{data.name}</Text>
      <View style={styles.rectanguleCompany}>
        <Image style={styles.rectanguleInside} source={image}></Image>
      </View>

      <View style={styles.container}>
        <View>
          <Rating readonly style={styles.rating} startingValue={4} tintColor={"#f2f2f2"} minValue={0} onFinishRating={ratingCompleted} />
        </View>
        <View>

        {isLogin ? <Button icon={ <MaterialIcons name='favorite' size={40} color={existFav ? 'red' : 'gray'}  style={styles.favourite} />} buttonStyle = {{backgroundColor : "#f2f2f2"}} onPress={addFav}></Button>
        : <Button icon={ <MaterialIcons name='favorite' size={40} color={existFav ? 'red' : 'gray'}  style={styles.favourite} />} buttonStyle = {{backgroundColor : "#f2f2f2"}} onPress={toggleOverLay}></Button>}
            
        
         
          <Overlay
            isVisible={visible}
            overlayStyle={styles.modal}
            onBackdropPress={toggleOverLay}
            
          >
            <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 5 , marginTop :  5}}>
              Para Añadir a Favoritos Inicia Sesión
            </Text>
            <Text style={{ fontSize: 15, marginBottom: 5 , alignSelf : 'center', justifyContent : 'center'}}>
              Inicia Sesión o Registrate
            </Text>

            <Button icon={<MaterialIcons name="login" size={24} color={'white'} style={{ marginEnd: 5, }}></MaterialIcons>} title={'Login / Registrate'} containerStyle={{ borderRadius: 10, marginBottom : 5 }} onPress = {()=>navigation.navigate("profileStack")}></Button>
          </Overlay>
        </View>
      </View>
      <View style={styles.description}>
        <Text>{data.description}</Text>
      </View>
      <MapsView data={data} />
      <Comments data={data.comments} company = {data} navigation = {navigation} />

      <View style={{ marginBottom: 300 }}></View>

    </ScrollView>
  )
}

export default InfoPressAreaScreen

function NumberStars(event) {
  console.log(event)
}

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
    height: "100%",
    width: "100%",
    borderRadius: 15,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  favourite: {
    marginEnd: 50,

  },
  rating: {
    marginStart: 20
  },
  description: {
    marginTop: 20,
    alignItems: 'center',
    marginHorizontal: 20
  },
  modal: {

  }




})