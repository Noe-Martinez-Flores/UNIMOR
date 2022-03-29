import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Favourite() {
  return (
    <View>
      <Text style = {styles.text}>Favourite</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text : {
    justifyContent : 'center',
    alignSelf : 'center',
    fontSize : 30,
    fontWeight : 'bold'
  },
})