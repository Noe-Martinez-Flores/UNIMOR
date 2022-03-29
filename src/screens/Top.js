import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Top() {
  return (
    <View>
      <Text style = {styles.text}>Top-5</Text>
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