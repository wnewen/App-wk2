import { StatusBar } from 'expo-status-bar';
import React from "./node_modules/react";
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <View style={styles.headerStyle}>
        <Text style={styles.textStyle}>
          Albums
        </Text>
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
});
