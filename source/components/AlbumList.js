import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import albumData from "../albums.json";

const AlbumList = () => {
    return (
        <ScrollView style={styles.backgroundStyle}>
            <View style={styles.cardContainerStyle}>
                <View style={[
                    styles.cardContainerStyle,
                    styles.cardSectionStyle
                ]}>
                    <View style={styles.thumbnailContainerStyle}>
                        <Image 
                        style={styles.thumbnailStyle}
                        source={{uri: albumData[0].image}} 
                        />
                        <View style={styles.headerContentStyle}>
                        <Text style={styles.albumTitleStyle}>{albumData[0].title}</Text>
                        <Text style={styles.albumArtistStyle}>{albumData[0].artist}</Text>
                        </View>
                    </View>
                    <View style={styles.cardSectionStyle}>
                        <Image 
                            style={styles.imageStyle}
                            source={{uri: albumData[0].thumbnail_image}}
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
                        source={{uri: albumData[1].image}} 
                        />
                        <View style={styles.headerContentStyle}>
                        <Text style={styles.albumTitleStyle}>{albumData[1].title}</Text>
                        <Text style={styles.albumArtistStyle}>{albumData[1].artist}</Text>
                        </View>
                    </View>
                    <View style={styles.cardSectionStyle}>
                        <Image 
                            style={styles.imageStyle}
                            source={{uri: albumData[1].thumbnail_image}}
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
                        source={{uri: albumData[2].image}} 
                        />
                        <View style={styles.headerContentStyle}>
                        <Text style={styles.albumTitleStyle}>{albumData[2].title}</Text>
                        <Text style={styles.albumArtistStyle}>{albumData[2].artist}</Text>
                        </View>
                    </View>
                    <View style={styles.cardSectionStyle}>
                        <Image 
                            style={styles.imageStyle}
                            source={{uri: albumData[2].thumbnail_image}}
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
                        source={{uri: albumData[3].image}} 
                        />
                        <View style={styles.headerContentStyle}>
                        <Text style={styles.albumTitleStyle}>{albumData[3].title}</Text>
                        <Text style={styles.albumArtistStyle}>{albumData[3].artist}</Text>
                        </View>
                    </View>
                    <View style={styles.cardSectionStyle}>
                        <Image 
                            style={styles.imageStyle}
                            source={{uri: albumData[3].thumbnail_image}}
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
                        source={{uri: albumData[4].image}} 
                        />
                        <View style={styles.headerContentStyle}>
                        <Text style={styles.albumTitleStyle}>{albumData[4].title}</Text>
                        <Text style={styles.albumArtistStyle}>{albumData[4].artist}</Text>
                        </View>
                    </View>
                    <View style={styles.cardSectionStyle}>
                        <Image 
                            style={styles.imageStyle}
                            source={{uri: albumData[4].thumbnail_image}}
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
        marginLeft: 3,
        height: 50,
        width: 50,
        borderRadius: 3
      },
      headerContentStyle: {
        flexDirection: "column",
        justifyContent: "space-around"
      },
      cardContainerStyle: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#ddd",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        backgroundColor: "#3c3c3c",
        
      },
      imageStyle: {
        height: 300,
        width: null,
        borderRadius: 3,
      },
      cardSectionStyle: {
        padding: 3,
        backgroundColor: "#FFFCEC",
        borderColor: "#ddd",
        borderBottomWidth: 1,
      },
      albumTitleStyle: {
          fontSize: 15,
          color: "#272727",
          marginLeft: 3,
      },
      albumArtistStyle: {
          fontSize: 12,
          color: "#272727",
          marginLeft: 3,
      },
      backgroundStyle: {
        backgroundColor: "#adadad",
      },
});

export default AlbumList;