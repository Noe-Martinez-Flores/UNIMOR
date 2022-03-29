import { StyleSheet, Text, View, Image, ScrollView, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import InfoData from '../components/InfoData'
import { Rating, RatingProps } from 'react-native-elements'
import { MaterialIcons } from "@expo/vector-icons";
import MapsView from '../components/Maps';
import Comments from '../components/Comments';

const InfoPressAreaScreen = ({ route }) => {
  const { image, nombre } = route.params;

  const ratingCompleted = (rating) => {
    console.log('rating is ' + rating)
  }

  const [isTouchFavourite, setIsTouchFavourite] = useState(false);


  return (
    <ScrollView>
      <Text style={{ fontSize: 25, fontWeight: 'bold', justifyContent: 'center', alignSelf: 'center', marginTop : 5}}>{nombre}</Text>
      <View style={styles.rectanguleCompany}>
        <Image style={styles.rectanguleInside} source={{ uri: image }}></Image>
      </View>

      <View style={styles.container}>
        <View>
          <Rating style={styles.rating} startingValue={4} tintColor={"#f2f2f2"} minValue={0} onFinishRating={ratingCompleted} />
        </View>
        <View>
          <MaterialIcons name='favorite' size={40} color={isTouchFavourite ? 'red' : 'gray'} onPress={() => (setIsTouchFavourite(!isTouchFavourite),isTouchFavourite ? "" : ToastAndroid.show('Añadido a Favoritos!',ToastAndroid.SHORT))} style={styles.favourite} />
        </View>
      </View>
      <View style={styles.description}>
        <Text>En compañía del mago Gandalf y de trece enanos, el hobbit Bilbo Bolsón emprende un viaje a través del país de los elfos y los bosques de los trolls, desde las mazmorras de los orcos hasta la Montaña Solitaria, donde el dragón Smaug esconde el tesoro de los Enanos.</Text>
      </View>
      <MapsView/>
      <Comments/>

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
  



})