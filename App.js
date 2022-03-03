import { StatusBar } from 'expo-status-bar';
import React from "./node_modules/react";
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import Header from "./source/components/Header";
import AlbumList from './source/components/AlbumList';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Header />
      <AlbumList />
    </SafeAreaView>
  );
};



