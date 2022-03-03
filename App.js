import { StatusBar } from 'expo-status-bar';
import React from "./node_modules/react";
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <View style={styles.headerStyle}>
        <Text style={styles.textStyle}>
          Albums
        </Text>
      </View>

      <View style={styles.cardContainerStyle}>
        <View style={styles.thumbnailContainerStyle}>
          <Image 
            style={styles.thumbnailStyle}
            source={require('./source/Jay-Chou.jpg')} 
          />
          <View style={styles.headerContentStyle}>
            <Text>Jay Chou</Text>
            <Text>Jay Chou</Text>
          </View>
        </View>
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#f8f8f8",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    shadowColor: "#000",
    shadowOpacity: 2,
    //Android only
    elevation: 2,
  },
  textStyle: {
    fontSize: 20,
  },
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  cardContainerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  
});
