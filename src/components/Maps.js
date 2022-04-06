import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { PROVIDER_GOOGLE , Marker} from 'react-native-maps';

const MapsView = ({data}) => {
  return (
    <View>
      <MapView
        style={styles.mapsContainer}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: parseFloat(data.latitude),
          longitude: parseFloat(data.altitude),
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      
      > 
        <Marker key={data.id} coordinate = {{latitude: parseFloat(data.latitude),
          longitude: parseFloat(data.altitude)}}></Marker>
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


