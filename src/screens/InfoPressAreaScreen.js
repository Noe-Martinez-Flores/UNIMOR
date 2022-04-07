import { StyleSheet, Text, View, Image, ScrollView, ToastAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import InfoData from '../components/InfoData'
import { Rating, RatingProps, Overlay } from 'react-native-elements'
import { MaterialIcons } from "@expo/vector-icons";
import MapsView from '../components/Maps';
import Comments from '../components/Comments';
import { useNavigation } from '@react-navigation/native';

const InfoPressAreaScreen = ({ route }) => {

  const navigation = useNavigation();

  const { image, nombre, data } = route.params;
  const [isModalOpen, setIsModalOpen] = useState(false)

  const ratingCompleted = (rating) => {
    console.log('rating is ' + rating)
  }

  const [isTouchFavourite, setIsTouchFavourite] = useState(false);

  return (
    <ScrollView>
      <Text style={{ fontSize: 25, fontWeight: 'bold', justifyContent: 'center', alignSelf: 'center', marginTop : 5}}>{data.name}</Text>
      <View style={styles.rectanguleCompany}>
        <Image style={styles.rectanguleInside} source={{ uri: image }}></Image>
      </View>

      <View style={styles.container}>
        <View>
          <Rating style={styles.rating} startingValue={4} tintColor={"#f2f2f2"} minValue={0}  onFinishRating={ratingCompleted}  />
        </View>
        <View>
          <MaterialIcons name='favorite' size={40} color={isTouchFavourite ? 'red' : 'gray'} onPress={() => (setIsTouchFavourite(!isTouchFavourite),isTouchFavourite ? "" : ToastAndroid.show('Añadido a Favoritos!',ToastAndroid.SHORT))} style={styles.favourite} />
        </View>
      </View>
      <View style={styles.description}>
        <Text>{data.description}</Text>
      </View>
      <MapsView data = {data}/>
      <Comments data = {data.comments}/>

      <View style = {{marginBottom : 300}}></View>

      {/* favorite */}
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
  modal : {

  }
  



})