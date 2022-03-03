import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
    return(
        <View style={styles.headerStyle}>
            <Text style={styles.textStyle}>
            Albums
            </Text>
        </View>
    );
};

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

export default Header;