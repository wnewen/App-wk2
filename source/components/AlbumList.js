import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

const AlbumList = () => {
    return (
        <ScrollView>
            <View style={styles.cardContainerStyle}>
                <View style={[
                    styles.cardContainerStyle,
                    styles.cardSectionStyle
                ]}>
                    <View style={styles.thumbnailContainerStyle}>
                        <Image 
                        style={styles.thumbnailStyle}
                        source={require('../Jay-Chou.jpg')} 
                        />
                        <View style={styles.headerContentStyle}>
                        <Text>Jay Chou</Text>
                        <Text>Jay Chou</Text>
                        </View>
                    </View>
                    <View style={styles.cardSectionStyle}>
                        <Image 
                            style={styles.imageStyle}
                            source={require('../晴天.jpg')}
                        />
                    </View>
                </View>
            </View>

            <View style={styles.cardContainerStyle}>
                <View style={[
                    styles.cardContainerStyle,
                    styles.cardSectionStyle
                ]}>
                    <View style={styles.thumbnailContainerStyle}>
                        <Image 
                        style={styles.thumbnailStyle}
                        source={require('../Jay-Chou.jpg')} 
                        />
                        <View style={styles.headerContentStyle}>
                        <Text>Jay Chou</Text>
                        <Text>Jay Chou</Text>
                        </View>
                    </View>
                    <View style={styles.cardSectionStyle}>
                        <Image 
                            style={styles.imageStyle}
                            source={require('../晴天.jpg')}
                        />
                    </View>
                </View>
            </View>
            

            <View style={styles.cardContainerStyle}>
                <View style={[
                    styles.cardContainerStyle,
                    styles.cardSectionStyle
                ]}>
                    <View style={styles.thumbnailContainerStyle}>
                        <Image 
                        style={styles.thumbnailStyle}
                        source={require('../Jay-Chou.jpg')} 
                        />
                        <View style={styles.headerContentStyle}>
                        <Text>Jay Chou</Text>
                        <Text>Jay Chou</Text>
                        </View>
                    </View>
                    <View style={styles.cardSectionStyle}>
                        <Image 
                            style={styles.imageStyle}
                            source={require('../晴天.jpg')}
                        />
                    </View>
                </View>
            </View>

            <View style={styles.cardContainerStyle}>
                <View style={[
                    styles.cardContainerStyle,
                    styles.cardSectionStyle
                ]}>
                    <View style={styles.thumbnailContainerStyle}>
                        <Image 
                        style={styles.thumbnailStyle}
                        source={require('../Jay-Chou.jpg')} 
                        />
                        <View style={styles.headerContentStyle}>
                        <Text>Jay Chou</Text>
                        <Text>Jay Chou</Text>
                        </View>
                    </View>
                    <View style={styles.cardSectionStyle}>
                        <Image 
                            style={styles.imageStyle}
                            source={require('../晴天.jpg')}
                        />
                    </View>
                </View>
            </View>

            <View style={styles.cardContainerStyle}>
                <View style={[
                    styles.cardContainerStyle,
                    styles.cardSectionStyle
                ]}>
                    <View style={styles.thumbnailContainerStyle}>
                        <Image 
                        style={styles.thumbnailStyle}
                        source={require('../Jay-Chou.jpg')} 
                        />
                        <View style={styles.headerContentStyle}>
                        <Text>Jay Chou</Text>
                        <Text>Jay Chou</Text>
                        </View>
                    </View>
                    <View style={styles.cardSectionStyle}>
                        <Image 
                            style={styles.imageStyle}
                            source={require('../晴天.jpg')}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>


    
    );
};

const styles = StyleSheet.create({
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
      imageStyle: {
        height: 300,
        width: null,
      },
      cardSectionStyle: {
        padding: 5,
        backgroundColor: "#fff",
        borderColor: "#ddd",
        borderBottomWidth: 1,
      },
});

export default AlbumList;