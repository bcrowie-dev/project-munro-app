import { Stack } from "expo-router";
import React, { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Region } from 'react-native-maps';

// Sets the bounds of map to Scotland and its isles
const SCOTLAND_BOUNDS = {
  minLat: 54.97, // bottom bound 
  maxLat: 60.95, // top bound 
  minLng: -8.7, // left bound
  maxLng: -0.7, // right bound
};

export default function HomeScreen() {
  /* 
  Pos1 = variable - sets initial value to false so we can use it to check map status
  Pos2 = updateer function - re-renders the screen and gives the variable its new value
  */
  const [isMapReady, setIsMapReady] = useState(false);

  /* 
  Creates a variable (mapRef) that will be paired with the map on the screen once it has loaded
  Can be updated without a re-render, keeping the app from slowing down due to too many re-renders
  */
  const mapRef = useRef<MapView>(null);

  /*
  Custom function that takes one parameter that must be type Region
  */
  const handleRegionChangeComplete = (region: Region) => {
    // Checks if the region is beyond either latitude bound
    const isOutLat =
      region.latitude < SCOTLAND_BOUNDS.minLat ||
      region.latitude > SCOTLAND_BOUNDS.maxLat;

    // Checks if the region is beyond either longitude bound
    const isOutLng =
      region.longitude < SCOTLAND_BOUNDS.minLng ||
      region.longitude > SCOTLAND_BOUNDS.maxLng;

    // If beyond bounds, bounce back is activated
    if (isOutLat || isOutLng) {
      /*
      Variable used to ensure the camera is bounced fully with bounds.
      Due to the flaws of floating point math, bounce back could leave the bounced centre point just 
      beyond the bounds and then it gets stuck in an infinite loop
      */
      const BUFFER = 0.1; // Degree of latitude/longitude
      
      // Establishes the mutable variables that will hold the bounce back coordinate/s (if needed)
      let targetLat = region.latitude;
      let targetLng = region.longitude;

      // Sets the coordinates to which the bounce back must finish
      if (region.latitude < SCOTLAND_BOUNDS.minLat) targetLat = SCOTLAND_BOUNDS.minLat + BUFFER;
      if (region.latitude > SCOTLAND_BOUNDS.maxLat) targetLat = SCOTLAND_BOUNDS.maxLat - BUFFER;
      if (region.longitude < SCOTLAND_BOUNDS.minLng) targetLng = SCOTLAND_BOUNDS.minLng + BUFFER;
      if (region.longitude > SCOTLAND_BOUNDS.maxLng) targetLng = SCOTLAND_BOUNDS.maxLng - BUFFER;
      
      
      setTimeout(() => { // Gives the map time to render after a bounce back to stop blank patches
        /*
        Bounce back call.
        Checks if mapRef has a value (has the map loaded)
        */
        mapRef.current?.animateToRegion(
          { 
            // Passes in the target coordinates
            latitude: targetLat, 
            longitude: targetLng,
            // Recycle the exact zoom level the user is currently at so we don't do any math!
            latitudeDelta: region.latitudeDelta,
            longitudeDelta: region.longitudeDelta,
          },
          400 // Duration of boune back in ms
        );
      }, 150); // Timeout duration in ms
    }
  };
  // Dictates what is appears on the UI
  return (
    // Parent container in which all elements and child containers can be placed
    <View style={styles.container}>
      {/*Removes the headrer*/}
      <Stack.Screen options={{ headerShown: false }} />
      <MapView
        ref={mapRef} // Connects my useRef variable to the map on the UI
        style={styles.map} // attributes the predefined style "map" to this map
        mapType="standard"
        pitchEnabled={false} // Disables 3D viewing
        rotateEnabled={false} // Disables map rotation
        // Establishes the starting parameters for the map when the page is first loaded
        initialCamera={{
          center: { latitude: 56.8198,longitude: -4.2052 }, // Sets the starting centre point of the map
          pitch: 0, // Sets the map to a 2D view
          heading: 0, // Sets the map pointing north
          altitude: 1500000, // Sets zoom level in meters
        }}
        /*
        Prop assigns the region value to the custom function upon map movement stopping
        function is then called each time the map stops moving
        */
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

// Stores styles for this screen
const styles = StyleSheet.create({
  // sets full screen invisible container in which objects can be placed
  container: {
    flex: 1,
  },
  // Sets map to fill the screen
  map: {
    width: '100%',
    height: '100%',
  }
});