import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
    return(
        <View style={styles.headerStyle}>
            <Text style={styles.textStyle}>
            葉惠美
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: "#272727",
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        shadowColor: "#000",
        shadowOpacity: 2,
        //Android only
        elevation: 2,
        borderRadius: 5,
      },
    textStyle: {
        fontSize: 18,
        color: "#ffffdf",
    },
});

export default Header;