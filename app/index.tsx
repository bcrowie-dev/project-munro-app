import { Stack } from "expo-router";
import React, { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Region } from 'react-native-maps';

// Define the geographic box for your allowed area (e.g., Scotland)
const SCOTLAND_BOUNDS = {
  minLat: 54.97, // bottom border PERFECT
  maxLat: 60.95, // top border PERFECT
  minLng: -8.7, // left border
  maxLng: -0.7, // right border PERFECT
};

export default function HomeScreen() {

  const [isMapReady, setIsMapReady] = useState(false);

  // 3. Type useRef with <MapView> so VS Code knows its methods
  const mapRef = useRef<MapView>(null);

  const handleAction = () => {
    // 4. Use optional chaining (?.) to safely call methods
    mapRef.current?.animateCamera({
      center: { latitude: 56.7969, longitude: -5.0036 },
      pitch: 0,
    });
  };

  const handleRegionChangeComplete = (region: Region) => {
    const isOutLat =
      region.latitude < SCOTLAND_BOUNDS.minLat ||
      region.latitude > SCOTLAND_BOUNDS.maxLat;

    const isOutLng =
      region.longitude < SCOTLAND_BOUNDS.minLng ||
      region.longitude > SCOTLAND_BOUNDS.maxLng;

    // If center point went outside allowed bounds, bounce it back
    if (isOutLat || isOutLng) {
      // Add a safety buffer to push the camera definitively inside the borders
      // This stops the infinite animation loop that freezes the screen
      const BUFFER = 0.1; 

      let targetLat = region.latitude;
      let targetLng = region.longitude;

      if (region.latitude < SCOTLAND_BOUNDS.minLat) targetLat = SCOTLAND_BOUNDS.minLat + BUFFER;
      if (region.latitude > SCOTLAND_BOUNDS.maxLat) targetLat = SCOTLAND_BOUNDS.maxLat - BUFFER;
      if (region.longitude < SCOTLAND_BOUNDS.minLng) targetLng = SCOTLAND_BOUNDS.minLng + BUFFER;
      if (region.longitude > SCOTLAND_BOUNDS.maxLng) targetLng = SCOTLAND_BOUNDS.maxLng - BUFFER;
      
      setTimeout(() => {
        mapRef.current?.animateToRegion(
          { 
            latitude: targetLat, 
            longitude: targetLng,
            // Recycle the exact zoom level the user is currently at so we don't do any math!
            latitudeDelta: region.latitudeDelta,
            longitudeDelta: region.longitudeDelta,
          },
          400 // Duration in ms
        );
      }, 150);
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <MapView
        ref={mapRef}
        style={styles.map}
        mapType="standard"
        pitchEnabled={false}
        rotateEnabled={false}
        initialCamera={{
          center: { latitude: 56.8198,longitude: -4.2052 },
          pitch: 0,
          heading: 0,
          altitude: 1500000,
        }}
        onRegionChangeComplete={handleRegionChangeComplete}
        cameraZoomRange={
          isMapReady
            ?{
              minCenterCoordinateDistance: 1000, // sets zoom in limit
              maxCenterCoordinateDistance: 1500000, // sets zoom out limit
            }
            :undefined
        }
        onMapReady={() => setIsMapReady(true)}
        showsPointsOfInterest={false}
        showsCompass={true}
        showsScale={true}  
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  }
});