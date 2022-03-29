import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { PROVIDER_GOOGLE , Marker} from 'react-native-maps';

const MapsView = () => {
  return (
    <View>
      <MapView
        style={styles.mapsContainer}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 18.96421857312373,
          longitude: -99.23762258095566,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}

      > 
        <Marker key={1} coordinate = {{latitude: 18.96421857312373,
          longitude: -99.23762258095566}}></Marker>
      </MapView>
    </View>
  )
}

export default MapsView

const styles = StyleSheet.create({
  mapsContainer: {
    height: 400,
    marginHorizontal: 15,
    borderRadius: 20,
    marginBottom: 50,
    marginTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})


